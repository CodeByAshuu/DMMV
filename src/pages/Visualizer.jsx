import React, { useState, useEffect } from 'react';
import MemoryBlock from '../components/MemoryBlock';
import ProcessForm from '../components/ProcessForm';
import MemoryStats from '../components/MemoryStats';
import AlgorithmSelector from '../components/AlgorithmSelector';
import { MemoryManager } from '../utils/memoryManager';
import { MemoryStick as Memory, RefreshCw } from 'lucide-react';

const Visualizer = () => {
  const [memoryManager] = useState(() => new MemoryManager(1000)); // 1000KB total memory
  const [memoryBlocks, setMemoryBlocks] = useState([]);
  const [algorithm, setAlgorithm] = useState('First Fit');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [stats, setStats] = useState(() => memoryManager.getStats());

  // Initialize memory and stats
  useEffect(() => {
    updateVisualization();
  }, []);

  // Clear messages after delay
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const updateVisualization = () => {
    setMemoryBlocks([...memoryManager.getMemoryBlocks()]);
    setStats(memoryManager.getStats());
  };

  const handleAllocate = (processId, size) => {
    try {
      const result = memoryManager.allocate(processId, size, algorithm);
      if (result) {
        setSuccess(`Successfully allocated ${size}KB to Process ${processId} using ${algorithm}`);
        setError('');
        updateVisualization();
      } else {
        setError(`Failed to allocate ${size}KB to Process ${processId}. Not enough contiguous memory available.`);
        setSuccess('');
      }
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  const handleDeallocate = (processId) => {
    try {
      const result = memoryManager.deallocate(processId);
      if (result) {
        setSuccess(`Successfully deallocated memory for Process ${processId}`);
        setError('');
        updateVisualization();
      } else {
        setError(`Process ${processId} not found or already deallocated.`);
        setSuccess('');
      }
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  const handleReset = () => {
    memoryManager.reset();
    setSuccess('Memory has been reset to initial state');
    setError('');
    updateVisualization();
  };

  const handleBlockClick = (block) => {
    if (block.allocated) {
      handleDeallocate(block.processId);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Memory className="h-8 w-8 text-primary-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Memory Visualizer
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Visualize dynamic memory allocation algorithms in real-time. 
            Click on allocated blocks to deallocate them.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Controls */}
          <div className="lg:col-span-1 space-y-6">
            <AlgorithmSelector
              algorithm={algorithm}
              onAlgorithmChange={setAlgorithm}
              onReset={handleReset}
            />
            
            <ProcessForm
              onAllocate={handleAllocate}
              onDeallocate={handleDeallocate}
              algorithm={algorithm}
              error={error}
              success={success}
            />
          </div>

          {/* Right Column - Visualization and Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Memory Visualization */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <RefreshCw className="h-5 w-5 text-primary-400" />
                  <span>Memory Layout</span>
                </h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded border border-blue-400"></div>
                    <span className="text-gray-300">Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded border border-green-400"></div>
                    <span className="text-gray-300">Allocated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded border border-orange-400"></div>
                    <span className="text-gray-300">Fragmented</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 min-h-[200px] overflow-x-auto">
                <div className="flex flex-wrap items-start justify-start">
                  {memoryBlocks.map((block, index) => (
                    <MemoryBlock
                      key={index}
                      block={block}
                      onClick={handleBlockClick}
                      index={index}
                    />
                  ))}
                </div>
                
                {memoryBlocks.length === 0 && (
                  <div className="flex items-center justify-center h-32 text-gray-500">
                    <p>Memory visualization will appear here</p>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-sm text-gray-400">
                <p>💡 <strong>Tip:</strong> Click on allocated (green) blocks to deallocate them</p>
              </div>
            </div>

            {/* Statistics */}
            <MemoryStats stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;