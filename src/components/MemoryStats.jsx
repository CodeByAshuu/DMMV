import React from 'react';
import { BarChart3, PieChart, Activity, AlertTriangle } from 'lucide-react';

const MemoryStats = ({ stats }) => {
  const getFragmentationColor = () => {
    if (stats.fragmentationPercentage < 20) return 'text-success-400';
    if (stats.fragmentationPercentage < 50) return 'text-warning-400';
    return 'text-error-400';
  };

  const getUtilizationColor = () => {
    if (stats.utilizationPercentage > 80) return 'text-success-400';
    if (stats.utilizationPercentage > 50) return 'text-warning-400';
    return 'text-error-400';
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
        <BarChart3 className="h-5 w-5 text-primary-400" />
        <span>Memory Statistics</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Memory */}
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <PieChart className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300">Total Memory</span>
          </div>
          <div className="text-2xl font-bold text-blue-300">
            {stats.totalMemory.toLocaleString()} KB
          </div>
        </div>

        {/* Free Memory */}
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-green-400" />
            <span className="text-sm text-gray-300">Free Memory</span>
          </div>
          <div className="text-2xl font-bold text-green-300">
            {stats.freeMemory.toLocaleString()} KB
          </div>
        </div>

        {/* Allocated Memory */}
        <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-gray-300">Allocated</span>
          </div>
          <div className="text-2xl font-bold text-purple-300">
            {stats.allocatedMemory.toLocaleString()} KB
          </div>
        </div>

        {/* Active Processes */}
        <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-gray-300">Processes</span>
          </div>
          <div className="text-2xl font-bold text-orange-300">
            {stats.activeProcesses}
          </div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Memory Utilization</span>
            <span className={`text-sm font-semibold ${getUtilizationColor()}`}>
              {stats.utilizationPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                stats.utilizationPercentage > 80 ? 'bg-gradient-to-r from-success-500 to-success-400' :
                stats.utilizationPercentage > 50 ? 'bg-gradient-to-r from-warning-500 to-warning-400' :
                'bg-gradient-to-r from-error-500 to-error-400'
              }`}
              style={{ width: `${stats.utilizationPercentage}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Fragmentation Level</span>
            <span className={`text-sm font-semibold ${getFragmentationColor()}`}>
              {stats.fragmentationPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${
                stats.fragmentationPercentage < 20 ? 'bg-gradient-to-r from-success-500 to-success-400' :
                stats.fragmentationPercentage < 50 ? 'bg-gradient-to-r from-warning-500 to-warning-400' :
                'bg-gradient-to-r from-error-500 to-error-400'
              }`}
              style={{ width: `${stats.fragmentationPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 pt-4 border-t border-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
          <div>
            <span>Free Blocks: </span>
            <span className="text-white font-medium">{stats.freeBlocks}</span>
          </div>
          <div>
            <span>Allocated Blocks: </span>
            <span className="text-white font-medium">{stats.allocatedBlocks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryStats;