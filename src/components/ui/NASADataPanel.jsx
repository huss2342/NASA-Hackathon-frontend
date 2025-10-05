const NASADataPanel = ({ data }) => {
  if (!data) return null;

  const dataItems = [
    { key: 'soilMoisture', label: 'Soil Moisture', unit: '%', icon: '💧' },
    { key: 'precipitation', label: 'Precipitation Chance', unit: '%', icon: '🌧️' },
    { key: 'temperature', label: 'Temperature', unit: '°F', icon: '🌡️' },
    { key: 'vegetation', label: 'Vegetation Index', unit: '', icon: '🌱' },
    { key: 'windSpeed', label: 'Wind Speed', unit: ' mph', icon: '💨' },
  ];

  return (
    <div className="bg-[rgba(22,33,62,0.95)] border-4 border-[#4ecca3] p-4 mb-4 z-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">🛰️</span>
        <h3 className="text-[#4ecca3] text-lg font-['Courier_New',_monospace] font-bold">
          NASA SATELLITE DATA
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {dataItems.map(item => {
          if (data[item.key] === undefined) return null;
          
          return (
            <div 
              key={item.key}
              className="flex justify-between items-center text-[#f1f1f1] font-['Courier_New',_monospace] text-sm"
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.label}:</span>
              </span>
              <span className="text-[#4ecca3] font-bold">
                {data[item.key]}{item.unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NASADataPanel;
