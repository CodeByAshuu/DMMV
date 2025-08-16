/**
 * Memory allocation algorithms implementation
 */

/**
 * First Fit Algorithm
 * Allocates the first available block that is large enough
 * @param {Array} memoryBlocks - Array of memory blocks
 * @param {number} size - Required memory size
 * @returns {number} - Index of suitable block, -1 if none found
 */
export function firstFit(memoryBlocks, size) {
  for (let i = 0; i < memoryBlocks.length; i++) {
    const block = memoryBlocks[i];
    if (!block.allocated && block.size >= size) {
      return i;
    }
  }
  return -1;
}

/**
 * Best Fit Algorithm
 * Allocates the smallest available block that is large enough
 * @param {Array} memoryBlocks - Array of memory blocks
 * @param {number} size - Required memory size
 * @returns {number} - Index of suitable block, -1 if none found
 */
export function bestFit(memoryBlocks, size) {
  let bestIndex = -1;
  let bestSize = Infinity;

  for (let i = 0; i < memoryBlocks.length; i++) {
    const block = memoryBlocks[i];
    if (!block.allocated && block.size >= size && block.size < bestSize) {
      bestIndex = i;
      bestSize = block.size;
    }
  }

  return bestIndex;
}

/**
 * Worst Fit Algorithm
 * Allocates the largest available block
 * @param {Array} memoryBlocks - Array of memory blocks
 * @param {number} size - Required memory size
 * @returns {number} - Index of suitable block, -1 if none found
 */
export function worstFit(memoryBlocks, size) {
  let worstIndex = -1;
  let worstSize = -1;

  for (let i = 0; i < memoryBlocks.length; i++) {
    const block = memoryBlocks[i];
    if (!block.allocated && block.size >= size && block.size > worstSize) {
      worstIndex = i;
      worstSize = block.size;
    }
  }

  return worstIndex;
}

/**
 * Get algorithm performance characteristics
 * @param {string} algorithmName - Name of the algorithm
 * @returns {Object} - Performance characteristics
 */
export function getAlgorithmInfo(algorithmName) {
  const algorithms = {
    'First Fit': {
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      advantages: [
        'Fastest allocation time',
        'Simple implementation',
        'Good for systems with frequent allocations'
      ],
      disadvantages: [
        'Can lead to fragmentation at the beginning of memory',
        'May not utilize memory optimally'
      ],
      bestUseCase: 'Real-time systems requiring fast allocation'
    },
    'Best Fit': {
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      advantages: [
        'Minimizes wasted space',
        'Better memory utilization',
        'Leaves larger blocks for future large allocations'
      ],
      disadvantages: [
        'Can create many small unusable blocks',
        'Slower than First Fit',
        'May increase external fragmentation'
      ],
      bestUseCase: 'Systems with varied allocation sizes and memory constraints'
    },
    'Worst Fit': {
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      advantages: [
        'Leaves large remaining blocks',
        'Reduces small fragment creation',
        'Good for systems with similar-sized allocations'
      ],
      disadvantages: [
        'May waste memory for small allocations',
        'Slowest of the three algorithms',
        'Can lead to poor memory utilization'
      ],
      bestUseCase: 'Systems with predictable, similar-sized memory requests'
    }
  };

  return algorithms[algorithmName] || null;
}

/**
 * Calculate fragmentation metrics for analysis
 * @param {Array} memoryBlocks - Array of memory blocks
 * @returns {Object} - Fragmentation analysis
 */
export function calculateFragmentation(memoryBlocks) {
  const freeBlocks = memoryBlocks.filter(block => !block.allocated);
  const totalFreeMemory = freeBlocks.reduce((sum, block) => sum + block.size, 0);
  
  if (freeBlocks.length === 0 || totalFreeMemory === 0) {
    return {
      externalFragmentation: 0,
      largestFreeBlock: 0,
      averageFreeBlockSize: 0,
      freeBlockCount: 0
    };
  }

  const largestFreeBlock = Math.max(...freeBlocks.map(block => block.size));
  const averageFreeBlockSize = totalFreeMemory / freeBlocks.length;
  
  // External fragmentation: percentage of free memory that cannot be used
  // due to being split into small blocks
  const unusableMemory = freeBlocks
    .filter(block => block.size < 50) // Blocks smaller than 50KB are considered unusable
    .reduce((sum, block) => sum + block.size, 0);
  
  const externalFragmentation = totalFreeMemory > 0 
    ? (unusableMemory / totalFreeMemory) * 100 
    : 0;

  return {
    externalFragmentation: Math.round(externalFragmentation * 100) / 100,
    largestFreeBlock,
    averageFreeBlockSize: Math.round(averageFreeBlockSize * 100) / 100,
    freeBlockCount: freeBlocks.length,
    totalFreeMemory
  };
}