import React from 'react';

const MemoryBlock = ({ block, onClick, index }) => {
  const getBlockClass = () => {
    if (block.allocated) {
      return 'memory-block memory-block-allocated border-2';
    } else if (block.size < 50) {
      return 'memory-block memory-block-fragmented border-2';
    } else {
      return 'memory-block memory-block-free border-2';
    }
  };

  const getBlockStyle = () => {
    const minWidth = Math.max(block.size * 2, 40); // Minimum width of 40px
    return {
      width: `${minWidth}px`,
      minHeight: '60px',
    };
  };

  return (
    <div
      className={`${getBlockClass()} rounded-lg p-2 m-1 flex flex-col items-center justify-center text-white text-xs font-medium shadow-lg animate-fade-in`}
      style={getBlockStyle()}
      onClick={() => onClick && onClick(block)}
      title={`${block.allocated ? 'Allocated' : 'Free'} - Size: ${block.size}KB${block.processId ? ` - Process: ${block.processId}` : ''}`}
    >
      <div className="text-center">
        <div className="font-bold">{block.size}KB</div>
        {block.allocated && block.processId && (
          <div className="text-xs mt-1 opacity-90">P{block.processId}</div>
        )}
        {!block.allocated && block.size < 50 && (
          <div className="text-xs mt-1 opacity-90">Frag</div>
        )}
      </div>
    </div>
  );
};

export default MemoryBlock;