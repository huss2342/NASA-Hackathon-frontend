import { useGameState } from '../../context/GameStateContext';
import Screen from '../ui/Screen';
import PixelBackground from '../ui/PixelBackground';
import StoryText from '../ui/StoryText';
import Button from '../ui/Button';
import SeasonHeader from '../ui/SeasonHeader';

const StoryScreen = ({ scenario, storyNumber }) => {
  const { currentScenario, goToScenario, playerName } = useGameState();

  const handleContinue = () => {
    goToScenario(scenario.next);
  };

  const displayText = scenario.text.replace('{playerName}', playerName);

  // Check if this is a split layout (text left, image right)
  const isSplitLayout = scenario.splitLayout;

  return (
    <Screen active={currentScenario === scenario.id}>
      <PixelBackground customBackground={scenario.background} />
      
      {/* Header image if present */}
      {scenario.header && <SeasonHeader imageSrc={scenario.header} />}

      {isSplitLayout ? (
        // Split layout: text on left, image on right
        <>
          <div className="absolute inset-0 flex items-center justify-center gap-8 px-8 z-10">
            {/* Text box on left */}
            <div className="flex-1 max-w-[500px] flex flex-col items-center">
              <div className="bg-white/90 backdrop-blur-sm border-4 border-black rounded-[20px] p-8 text-black text-[18px] leading-relaxed mb-6">
                <span dangerouslySetInnerHTML={{ __html: displayText }} />
                
                {scenario.bulletPoints && (
                  <ul className="list-disc ml-6 mt-4 space-y-2">
                    {scenario.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              <Button onClick={handleContinue}>
                {storyNumber === 4 ? 'START FARMING' : 'CONTINUE'}
              </Button>
            </div>

            {/* Large image on right */}
            {scenario.image && (
              <div className="flex-1 flex items-center justify-center max-w-[500px]">
                <img 
                  src={scenario.image} 
                  alt=""
                  className="max-w-full h-auto"
                  style={{
                    maxHeight: '600px',
                  }}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        // Regular layout: centered text with optional positioned image
        <>
          {scenario.image && !scenario.images && (
            <img 
              src={scenario.image} 
              alt=""
              className="absolute z-[5]"
              style={{
                top: scenario.imageTop ? `${scenario.imageTop}px` : 'auto',
                bottom: scenario.imageBottom ? `${scenario.imageBottom}px` : 'auto',
                left: scenario.imageLeft ? `${scenario.imageLeft}px` : 'auto',
                right: scenario.imageRight ? `${scenario.imageRight}px` : 'auto',
                width: scenario.imageWidth ? `${scenario.imageWidth}px` : 'auto',
                height: scenario.imageHeight ? `${scenario.imageHeight}px` : 'auto',
              }}
            />
          )}
          
          {scenario.images && scenario.images.length > 0 && (
            <div className="absolute z-[5]" style={{
              position: 'absolute',
              top: scenario.imageTop ? `${scenario.imageTop}px` : 'auto',
              bottom: scenario.imageBottom ? `${scenario.imageBottom}px` : 'auto',
              left: scenario.imageLeft ? `${scenario.imageLeft}px` : 'auto',
              right: scenario.imageRight ? `${scenario.imageRight}px` : 'auto',
              width: scenario.imageWidth ? `${scenario.imageWidth}px` : 'auto',
              height: scenario.imageHeight ? `${scenario.imageHeight}px` : 'auto',
            }}>
              {scenario.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{
                    animation: `fadeInOut ${(scenario.fadeDuration || 4) * scenario.images.length}s ease-in-out infinite`,
                    animationDelay: `${index * (scenario.fadeDuration || 4)}s`,
                    opacity: 0,
                  }}
                />
              ))}
              <style>{`
                @keyframes fadeInOut {
                  0%, 100% { opacity: 0; }
                  25%, 75% { opacity: 1; }
                }
              `}</style>
            </div>
          )}

          <StoryText>
            <span dangerouslySetInnerHTML={{ __html: displayText }} />
            
            {scenario.bulletPoints && (
              <ul className="list-disc ml-6 mt-4 space-y-2">
                {scenario.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </StoryText>
          
          <div className="relative z-20">
            <Button onClick={handleContinue}>
              {storyNumber === 4 ? 'START FARMING' : 'CONTINUE'}
            </Button>
            
            
          </div>
        </>
      )}
    </Screen>
  );
};

export default StoryScreen;