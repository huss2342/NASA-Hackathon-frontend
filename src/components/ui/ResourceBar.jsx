const ResourceBar = ({ label, value, max, icon, color }) => {
  const percentage = (value / max) * 100;
  
  const getColorClass = () => {
    if (percentage > 66) return color || 'bg-[#4ecca3]';
    if (percentage > 33) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[#f1f1f1] text-sm font-['Courier_New',_monospace] flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {label}
        </span>
        <span className="text-[#f1f1f1] text-sm font-['Courier_New',_monospace]">
          {value}/{max}
        </span>
      </div>
      <div className="w-full h-4 bg-[#16213e] border-2 border-[#0f3460]">
        <div 
          className={`h-full transition-all duration-500 ${getColorClass()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ResourceBar;
