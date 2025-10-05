const PixelBackground = ({ opacity = 1, welcomeScreen = false }) => {
  return (
    <>
      <div 
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          opacity: welcomeScreen ? 0.15 : 1,
          backgroundImage: 'url(/sprites/start_screen.png)',
        }}
      />
      {/* White overlay */}
      <div 
        className="absolute w-full h-full bg-white"
        style={{
          opacity: welcomeScreen ? 0.1 : 0.2,
        }}
      />
    </>
  );
};

export default PixelBackground;
