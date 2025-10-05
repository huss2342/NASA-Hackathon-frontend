import React from 'react';

const ResultsModal = ({ moneyChange, sustainabilityChange, description, decision, onNext }) => {
  const moneyGif = moneyChange >= 0 ? '/money_increase.gif' : '/money_decrease.gif';
  
  // Decision-specific descriptions
  const getDecisionDescription = () => {
    // Summer decisions (passed via description prop)
    if (decision === 'shade_infrastructure') {
      return 'You identified the critical heat stress and chose the efficient solution: shade cloth infrastructure.';
    }
    
    if (decision === 'overcooked') {
      return 'The 99.77°F LST is above the critical stress threshold of approximately 95°F for almond trees during peak summer. At this temperature, trees experience photosynthetic shutdown, accelerated fruit drop, and potential permanent damage to tree physiology. Research from UC Davis shows that sustained LST above 95°F during July causes significant yield losses and can compromise tree health for subsequent seasons.';
    }
    
    if (decision === 'overhead_water') {
      return 'You correctly identified that the 99.77°F LST exceeds the critical ~95°F threshold, but overhead watering during peak heat creates major problems: 40-60% of water evaporates before providing benefit, wet canopy during hot afternoon increases disease risk (fungal/mold growth), water droplets can intensify sunlight causing leaf scald, and massive water consumption during peak drought provides only temporary temperature reduction.';
    }
    
    // Winter decisions
    if (decision === 'do_nothing') {
      return 'You chose not to raise the beds. The predicted 3 flooding days caused minor crop damage and field erosion. While you saved money upfront, the flood damage resulted in a net loss. The undisturbed soil did provide some sustainability benefit.';
    }
    
    if (decision === 'not_enough') {
      return 'The bed elevation wasn\'t sufficient to protect against the predicted flooding. You incurred both the cost of raising beds and flood losses.';
    }
    
    if (decision === 'enough') {
      return 'Raising the beds successfully protected your crops from flooding. The investment paid off by preventing flood damage entirely. The minimal raise kept soil disruption low, earning a sustainability bonus.';
    }
    
    // Spring decisions
    if (decision === 'keep') {
      return 'After 14 inches of rain in the past week and no flooding predicted, the soil moisture is optimal. By avoiding unnecessary irrigation, you conserved water resources, saved money on water costs, and earned sustainability points for efficient resource management.';
    }
    
    if (decision === 'low_irrigation') {
      return 'The soil already had adequate moisture from recent rainfall. This low-level irrigation was unnecessary and wasted water during a period when natural precipitation was sufficient. The water usage negatively impacted your sustainability score.';
    }
    
    if (decision === 'med_irrigation') {
      return 'With 14 inches of recent rain, medium irrigation was excessive and wasteful. The already-saturated soil couldn\'t absorb this additional water efficiently, leading to runoff and higher costs with no agricultural benefit.';
    }
    
    if (decision === 'high_irrigation') {
      return 'High irrigation after 14 inches of rain was highly unnecessary. This excessive water application caused significant waste, potential nutrient leaching from oversaturated soil, and the highest cost with zero benefit to crop health.';
    }
    
    return 'Decision outcome recorded.';
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[200]">
      <div className="bg-white rounded-[15px] p-8 max-w-[600px] w-full mx-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-black text-center">Results</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
            <span className="text-black font-bold">Money:</span>
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-bold ${moneyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {moneyChange >= 0 ? '+' : ''}{moneyChange}
              </span>
              <img src={moneyGif} alt="Money change" className="w-12 h-12" />
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
            <span className="text-black font-bold">Sustainability:</span>
            <span className={`text-2xl font-bold ${sustainabilityChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {sustainabilityChange >= 0 ? '+' : ''}{sustainabilityChange}
            </span>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-100 rounded text-black text-sm leading-relaxed">
          {getDecisionDescription()}
        </div>

        <button
          onClick={onNext}
          className="w-full bg-[#e94560] text-white px-6 py-3 rounded hover:bg-[#ff5277] font-bold"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ResultsModal;