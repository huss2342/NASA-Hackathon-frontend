const PixelBackground = ({ opacity = 1 }) => {
  return (
    <div 
      className="absolute w-full h-full bg-cover bg-center"
      style={{
        opacity: opacity,
        backgroundImage: 'url(/sprites/start_screen.jpg)',
        imageRendering: 'pixelated',
      }}
    />
  );
};

export default PixelBackground;
