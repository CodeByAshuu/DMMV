import { firstFit, bestFit, worstFit } from './algorithms';

/**
 * Memory Manager class for handling dynamic memory allocation and deallocation
 */
export class MemoryManager {
  constructor(totalSize) {
    this.totalSize = totalSize;
    this.memoryBlocks = [
      {
        size: totalSize,
        allocated: false,
        processId: null,
        startAddress: 0
      }
    ];
    this.processes = new Map(); // Track allocated processes
  }

  /**
   * Allocate memory using the specified algorithm
   * @param {number} processId - Process identifier
   * @param {number} size - Memory size requested
   * @param {string} algorithm - Allocation algorithm ('First Fit', 'Best Fit', 'Worst Fit')
   * @returns {boolean} - Success status
   */
  allocate(processId, size, algorithm) {
    // Validate input
    if (size <= 0) {
      throw new Error('Memory size must be positive');
    }
    
    if (this.processes.has(processId)) {
      throw new Error(`Process ${processId} already exists`);
    }

    // Find suitable block using the specified algorithm
    let blockIndex = -1;
    
    switch (algorithm) {
      case 'First Fit':
        blockIndex = firstFit(this.memoryBlocks, size);
        break;
      case 'Best Fit':
        blockIndex = bestFit(this.memoryBlocks, size);
        break;
      case 'Worst Fit':
        blockIndex = worstFit(this.memoryBlocks, size);
        break;
      default:
        throw new Error('Unknown allocation algorithm');
    }

    if (blockIndex === -1) {
      return false; // No suitable block found
    }

    // Allocate the block
    const block = this.memoryBlocks[blockIndex];
    
    if (block.size === size) {
      // Exact fit - just mark as allocated
      block.allocated = true;
      block.processId = processId;
    } else {
      // Split the block
      const newBlock = {
        size: block.size - size,
        allocated: false,
        processId: null,
        startAddress: block.startAddress + size
      };
      
      block.size = size;
      block.allocated = true;
      block.processId = processId;
      
      this.memoryBlocks.splice(blockIndex + 1, 0, newBlock);
    }

    // Track the process
    this.processes.set(processId, {
      size: size,
      blockIndex: blockIndex
    });

    return true;
  }

  /**
   * Deallocate memory for a process
   * @param {number} processId - Process identifier
   * @returns {boolean} - Success status
   */
  deallocate(processId) {
    if (!this.processes.has(processId)) {
      return false;
    }

    // Find the block containing this process
    const blockIndex = this.memoryBlocks.findIndex(
      block => block.processId === processId
    );

    if (blockIndex === -1) {
      return false;
    }

    // Deallocate the block
    this.memoryBlocks[blockIndex].allocated = false;
    this.memoryBlocks[blockIndex].processId = null;

    // Remove from processes map
    this.processes.delete(processId);

    // Merge adjacent free blocks
    this._mergeAdjacentFreeBlocks();

    return true;
  }

  /**
   * Merge adjacent free blocks to reduce fragmentation
   * @private
   */
  _mergeAdjacentFreeBlocks() {
    let i = 0;
    while (i < this.memoryBlocks.length - 1) {
      const currentBlock = this.memoryBlocks[i];
      const nextBlock = this.memoryBlocks[i + 1];

      if (!currentBlock.allocated && !nextBlock.allocated) {
        // Merge blocks
        currentBlock.size += nextBlock.size;
        this.memoryBlocks.splice(i + 1, 1);
      } else {
        i++;
      }
    }
  }

  /**
   * Get current memory blocks for visualization
   * @returns {Array} - Array of memory blocks
   */
  getMemoryBlocks() {
    return this.memoryBlocks.map(block => ({
      ...block
    }));
  }

  /**
   * Get memory statistics
   * @returns {Object} - Statistics object
   */
  getStats() {
    const totalMemory = this.totalSize;
    let allocatedMemory = 0;
    let freeMemory = 0;
    let freeBlocks = 0;
    let allocatedBlocks = 0;
    let fragmentedBlocks = 0;

    this.memoryBlocks.forEach(block => {
      if (block.allocated) {
        allocatedMemory += block.size;
        allocatedBlocks++;
      } else {
        freeMemory += block.size;
        freeBlocks++;
        if (block.size < 50) { // Consider blocks < 50KB as fragmented
          fragmentedBlocks++;
        }
      }
    });

    const utilizationPercentage = (allocatedMemory / totalMemory) * 100;
    
    // Calculating fragmentation as the ratio of fragmented free space to total free space
    const fragmentedSpace = this.memoryBlocks
      .filter(block => !block.allocated && block.size < 50)
      .reduce((sum, block) => sum + block.size, 0);
    
    const fragmentationPercentage = freeMemory > 0 
      ? (fragmentedSpace / freeMemory) * 100 
      : 0;

    return {
      totalMemory,
      allocatedMemory,
      freeMemory,
      utilizationPercentage,
      fragmentationPercentage,
      freeBlocks,
      allocatedBlocks,
      fragmentedBlocks,
      activeProcesses: this.processes.size
    };
  }

  /**
   * Reset memory to initial state
   */
  reset() {
    this.memoryBlocks = [
      {
        size: this.totalSize,
        allocated: false,
        processId: null,
        startAddress: 0
      }
    ];
    this.processes.clear();
  }

  /**
   * Get all active processes
   * @returns {Array} - Array of process information
   */
  getActiveProcesses() {
    return Array.from(this.processes.entries()).map(([processId, info]) => ({
      processId,
      size: info.size
    }));
  }
}