import React from 'react';
import { Settings, Info } from 'lucide-react';

const AlgorithmSelector = ({ algorithm, onAlgorithmChange, onReset }) => {
  const algorithms = [
    {
      value: 'First Fit',
      label: 'First Fit',
      description: 'Allocates the first available block that is large enough',
      color: 'from-blue-500 to-blue-600'
    },
    {
      value: 'Best Fit',
      label: 'Best Fit', 
      description: 'Allocates the smallest available block that is large enough',
      color: 'from-green-500 to-green-600'
    },
    {
      value: 'Worst Fit',
      label: 'Worst Fit',
      description: 'Allocates the largest available block',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const selectedAlgorithm = algorithms.find(alg => alg.value === algorithm);

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
        <Settings className="h-5 w-5 text-primary-400" />
        <span>Algorithm Configuration</span>
      </h3>

      {/* Algorithm Selector */}
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="algorithm" className="block text-sm font-medium text-gray-300 mb-2">
            Memory Allocation Algorithm
          </label>
          <select
            id="algorithm"
            value={algorithm}
            onChange={(e) => onAlgorithmChange(e.target.value)}
            className="input-field w-full"
          >
            {algorithms.map((alg) => (
              <option key={alg.value} value={alg.value} className="bg-gray-800">
                {alg.label}
              </option>
            ))}
          </select>
        </div>

        {/* Algorithm Description */}
        {selectedAlgorithm && (
          <div className={`bg-gradient-to-r ${selectedAlgorithm.color}/20 border border-${selectedAlgorithm.color.split('-')[1]}-500/30 rounded-lg p-4`}>
            <div className="flex items-center space-x-2 mb-2">
              <Info className="h-4 w-4 text-gray-300" />
              <span className="text-sm font-medium text-gray-200">How it works</span>
            </div>
            <p className="text-sm text-gray-300">{selectedAlgorithm.description}</p>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="space-y-3">
        <button
          onClick={onReset}
          className="btn-secondary w-full"
        >
          Reset Memory
        </button>
      </div>

      {/* Algorithm Performance Tips */}
      <div className="mt-6 pt-4 border-t border-gray-600">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Performance Tips</h4>
        <div className="text-xs text-gray-400 space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>First Fit:</strong> Fastest allocation, moderate fragmentation</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Best Fit:</strong> Minimizes waste, can increase fragmentation</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
            <span><strong>Worst Fit:</strong> Reduces fragmentation, may waste space</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmSelector;