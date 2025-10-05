const SeasonHeader = ({ imageSrc }) => {
  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-[1]">
      <img 
        src={imageSrc} 
        alt="Season header"
        className="max-h-[120px] w-auto"
      />
    </div>
  );
};

export default SeasonHeader;