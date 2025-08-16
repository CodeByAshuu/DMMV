import React, { useState } from 'react';
import { Plus, Trash2, AlertCircle } from 'lucide-react';

const ProcessForm = ({ onAllocate, onDeallocate, algorithm, error, success }) => {
  const [processId, setProcessId] = useState('');
  const [memorySize, setMemorySize] = useState('');
  const [deallocateId, setDeallocateId] = useState('');

  const handleAllocate = (e) => {
    e.preventDefault();
    if (processId && memorySize) {
      onAllocate(parseInt(processId), parseInt(memorySize));
      setProcessId('');
      setMemorySize('');
    }
  };

  const handleDeallocate = (e) => {
    e.preventDefault();
    if (deallocateId) {
      onDeallocate(parseInt(deallocateId));
      setDeallocateId('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Status Messages */}
      {error && (
        <div className="bg-error-500/20 border border-error-500 rounded-lg p-4 flex items-center space-x-2 animate-slide-up">
          <AlertCircle className="h-5 w-5 text-error-400 flex-shrink-0" />
          <span className="text-error-200">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="bg-success-500/20 border border-success-500 rounded-lg p-4 flex items-center space-x-2 animate-slide-up">
          <div className="h-2 w-2 bg-success-400 rounded-full flex-shrink-0"></div>
          <span className="text-success-200">{success}</span>
        </div>
      )}

      {/* Allocation Form */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Plus className="h-5 w-5 text-primary-400" />
          <span>Allocate Memory</span>
        </h3>
        <form onSubmit={handleAllocate} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="processId" className="block text-sm font-medium text-gray-300 mb-2">
                Process ID
              </label>
              <input
                type="number"
                id="processId"
                value={processId}
                onChange={(e) => setProcessId(e.target.value)}
                className="input-field w-full"
                placeholder="e.g., 1"
                min="1"
                required
              />
            </div>
            <div>
              <label htmlFor="memorySize" className="block text-sm font-medium text-gray-300 mb-2">
                Memory Size (KB)
              </label>
              <input
                type="number"
                id="memorySize"
                value={memorySize}
                onChange={(e) => setMemorySize(e.target.value)}
                className="input-field w-full"
                placeholder="e.g., 100"
                min="1"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            <Plus className="h-4 w-4 mr-2" />
            Allocate Using {algorithm}
          </button>
        </form>
      </div>

      {/* Deallocation Form */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Trash2 className="h-5 w-5 text-error-400" />
          <span>Deallocate Memory</span>
        </h3>
        <form onSubmit={handleDeallocate} className="space-y-4">
          <div>
            <label htmlFor="deallocateId" className="block text-sm font-medium text-gray-300 mb-2">
              Process ID to Deallocate
            </label>
            <input
              type="number"
              id="deallocateId"
              value={deallocateId}
              onChange={(e) => setDeallocateId(e.target.value)}
              className="input-field w-full"
              placeholder="e.g., 1"
              min="1"
              required
            />
          </div>
          <button type="submit" className="btn-danger w-full">
            <Trash2 className="h-4 w-4 mr-2" />
            Deallocate Process
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProcessForm;