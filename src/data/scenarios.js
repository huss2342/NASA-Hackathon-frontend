/**
 * Game Scenarios Configuration
 * Each scenario can have multiple choices that lead to different outcomes
 */

// Story introduction
export const scenarios = {
  story1: {
    id: 'story1',
    type: 'story',
    text: `It's been a long year. In the mail you receive rusty key and a note: "The farm is yours now, dear. I know you'll bring it back to life."`,
    next: 'story2',
  },
  story2: {
    id: 'story2',
    type: 'story',
    text: 'You have a job in New York City. A life. You can\'t just leave that behind.',
    next: 'story3',
  },
  story3: {
    id: 'story3',
    type: 'story',
    text: 'But you remember the summers at the farm as a child...the smell of fresh soil, the satisfaction of harvest. But that was a long time ago.',
    next: 'story4',
  },
  story4: {
    id: 'story4',
    type: 'story',
    text: '"What if...?" You think to yourself. You have a chance to start over, to build something real... <br><br>Welcome home, <span style="color: #4ecca3;">{playerName}</span>.',
    next: 'gameScreen',
  },
  gameScreen: {
    id: 'gameScreen',
    type: 'story',
    text: 'Welcome, <span style="color: #4ecca3;">{playerName}</span>! <br><br>This is where your farming adventure begins...',
    next: null,
  }, 
};
//   // Tutorial/Introduction to mechanics
//   tutorial: {
//     id: 'tutorial',
//     type: 'story',
//     text: 'The farm is in rough shape. You have limited resources: water, money, and time. Every decision matters. NASA satellite data can help you make informed choices.',
//     next: 'scenario_irrigation',
//   },

//   // Scenario 1: Irrigation Decision
//   scenario_irrigation: {
//     id: 'scenario_irrigation',
//     type: 'decision',
//     title: 'Day 1: Irrigation Decision',
//     description: 'Your crops need water, but the well is running low. NASA soil moisture data shows the ground is at 30% saturation.',
//     nasaData: {
//       soilMoisture: 30,
//       precipitation: 20,
//       temperature: 85,
//     },
//     choices: [
//       {
//         id: 'irrigate_heavy',
//         text: 'Irrigate heavily (Use 40 water units)',
//         feedback: 'You used too much water! While crops are hydrated, you\'ve depleted your reserves. NASA data suggested lighter irrigation would suffice.',
//         outcome: {
//           water: -40,
//           money: 0,
//           time: -10,
//           success: false,
//         },
//         next: 'scenario_irrigation_fail',
//       },
//       {
//         id: 'irrigate_moderate',
//         text: 'Irrigate moderately (Use 20 water units)',
//         feedback: 'Perfect! You used NASA soil moisture data wisely. Your crops are healthy and you conserved water.',
//         outcome: {
//           water: -20,
//           money: 50,
//           time: -5,
//           success: true,
//         },
//         next: 'scenario_flood_warning',
//       },
//       {
//         id: 'no_irrigate',
//         text: 'Don\'t irrigate, wait for rain',
//         feedback: 'Risky move! With only 20% chance of rain, your crops started wilting. You lost valuable growing time.',
//         outcome: {
//           water: 0,
//           money: -100,
//           time: -15,
//           success: false,
//         },
//         next: 'scenario_irrigation_fail',
//       },
//     ],
//   },

//   // Failure path from irrigation
//   scenario_irrigation_fail: {
//     id: 'scenario_irrigation_fail',
//     type: 'story',
//     text: 'The crops are struggling. The bank is watching closely. You need to make better decisions using the satellite data available to you.',
//     next: 'scenario_flood_warning',
//   },

//   // Scenario 2: Flood Management
//   scenario_flood_warning: {
//     id: 'scenario_flood_warning',
//     type: 'decision',
//     title: 'Day 5: Storm Warning',
//     description: 'NASA satellites show a storm system approaching. Precipitation forecast: 70% chance of heavy rain. Your low-lying fields could flood.',
//     nasaData: {
//       precipitation: 70,
//       temperature: 72,
//       windSpeed: 25,
//     },
//     choices: [
//       {
//         id: 'prepare_drainage',
//         text: 'Prepare drainage systems ($300, 15 time)',
//         feedback: 'Smart investment! When the storm hit, your drainage systems saved your crops. NASA data helped you prepare.',
//         outcome: {
//           water: 10,
//           money: -300,
//           time: -15,
//           success: true,
//         },
//         next: 'scenario_heat_stress',
//       },
//       {
//         id: 'do_nothing',
//         text: 'Do nothing - storms might miss us',
//         feedback: 'The storm hit hard! Your fields flooded, destroying 30% of your crops. You lost significant money and time recovering.',
//         outcome: {
//           water: -20,
//           money: -400,
//           time: -25,
//           success: false,
//         },
//         next: 'scenario_crisis',
//       },
//       {
//         id: 'harvest_early',
//         text: 'Emergency early harvest (20 time, -$100)',
//         feedback: 'You harvested early before the storm. Crops weren\'t fully mature, but you saved most of them. A reasonable compromise.',
//         outcome: {
//           water: 0,
//           money: -100,
//           time: -20,
//           success: true,
//         },
//         next: 'scenario_heat_stress',
//       },
//     ],
//   },

//   // Crisis scenario (potential death path)
//   scenario_crisis: {
//     id: 'scenario_crisis',
//     type: 'story',
//     text: 'Things are looking dire. Your resources are running low. The bank loan payment is due soon. One more major mistake could cost you everything.',
//     next: 'scenario_heat_stress',
//   },

//   // Scenario 3: Heat Stress
//   scenario_heat_stress: {
//     id: 'scenario_heat_stress',
//     type: 'decision',
//     title: 'Day 15: Heat Wave',
//     description: 'NASA surface temperature data shows an incoming heat wave: 102°F for the next 5 days. Your crops are vulnerable to heat stress.',
//     nasaData: {
//       temperature: 102,
//       soilMoisture: 25,
//       vegetation: 60,
//     },
//     choices: [
//       {
//         id: 'shade_cloth',
//         text: 'Install shade cloth ($400, 20 time)',
//         feedback: 'Excellent protection! The shade cloth reduced heat stress significantly. Your crops survived the heat wave with minimal damage.',
//         outcome: {
//           water: -15,
//           money: -400,
//           time: -20,
//           success: true,
//         },
//         next: 'scenario_pest_control',
//       },
//       {
//         id: 'extra_water',
//         text: 'Increase irrigation (40 water units)',
//         feedback: 'You used too much water trying to combat heat. While plants survived, you\'ve severely depleted your water reserves.',
//         outcome: {
//           water: -40,
//           money: 0,
//           time: -10,
//           success: false,
//         },
//         next: 'scenario_pest_control',
//       },
//       {
//         id: 'ignore_heat',
//         text: 'Do nothing, plants are resilient',
//         feedback: 'Catastrophic choice! 50% of your crops died from heat stress. NASA data clearly showed the danger. Your farm is in serious trouble.',
//         outcome: {
//           water: 0,
//           money: -600,
//           time: -30,
//           success: false,
//         },
//         next: 'game_over_heat',
//       },
//     ],
//   },

//   // Death scenario from heat
//   game_over_heat: {
//     id: 'game_over_heat',
//     type: 'game_over',
//     title: 'Game Over',
//     text: 'The heat wave devastated your farm. With more than half your crops lost and no money to replant, the bank foreclosed on the property. <br><br>Perhaps if you had heeded the NASA satellite data...',
//     canRetry: true,
//   },

//   // Scenario 4: Pest Control
//   scenario_pest_control: {
//     id: 'scenario_pest_control',
//     type: 'decision',
//     title: 'Day 25: Vegetation Health Alert',
//     description: 'NASA vegetation indices show unusual patterns in your crops. NDVI readings suggest possible pest infestation in the east field.',
//     nasaData: {
//       vegetation: 45,
//       temperature: 78,
//       soilMoisture: 55,
//     },
//     choices: [
//       {
//         id: 'targeted_treatment',
//         text: 'Targeted treatment on east field ($200)',
//         feedback: 'Perfect diagnosis! You used NASA vegetation data to identify the exact problem area. Minimal pesticide use, maximum effect.',
//         outcome: {
//           water: -5,
//           money: -200,
//           time: -10,
//           success: true,
//         },
//         next: 'final_evaluation',
//       },
//       {
//         id: 'spray_all',
//         text: 'Spray entire farm with pesticide ($500)',
//         feedback: 'Overkill! You spent too much money treating areas that weren\'t affected. NASA data could have saved you money.',
//         outcome: {
//           water: -10,
//           money: -500,
//           time: -20,
//           success: false,
//         },
//         next: 'final_evaluation',
//       },
//       {
//         id: 'ignore_pests',
//         text: 'Ignore the readings, looks fine to me',
//         feedback: 'Disaster! The pest infestation spread across your entire farm. You lost most of your harvest. The bank is calling.',
//         outcome: {
//           water: 0,
//           money: -800,
//           time: -40,
//           success: false,
//         },
//         next: 'game_over_pests',
//       },
//     ],
//   },

//   // Death scenario from pests
//   game_over_pests: {
//     id: 'game_over_pests',
//     type: 'game_over',
//     title: 'Game Over',
//     text: 'The pest infestation destroyed your harvest. Unable to make the loan payment, you lost the farm. <br><br>NASA satellite data showed the early warning signs, but you ignored them.',
//     canRetry: true,
//   },

//   // Final Evaluation
//   final_evaluation: {
//     id: 'final_evaluation',
//     type: 'evaluation',
//     title: 'Harvest Season - Bank Review',
//     text: 'The growing season is over. The bank is reviewing your farm\'s performance to decide on the loan...',
//     next: 'check_win_condition', // Special flag to trigger win/lose check
//   },

//   // Victory scenario
//   game_victory: {
//     id: 'game_victory',
//     type: 'victory',
//     title: 'Success!',
//     text: 'Congratulations, {playerName}! Your wise use of NASA Earth Science data saved the farm. The bank approved your loan, and your harvest was profitable. <br><br>The farm is yours, and it\'s thriving!',
//     canReplay: true,
//   },

//   // Loss scenario
//   game_over_poor: {
//     id: 'game_over_poor',
//     type: 'game_over',
//     title: 'Game Over',
//     text: 'Despite your efforts, the farm didn\'t perform well enough. The bank denied your loan application. <br><br>Better use of NASA satellite data could have helped you make more informed decisions.',
//     canRetry: true,
//   },
// };

// // Helper function to get scenario by ID
// export const getScenario = (scenarioId) => {
//   return scenarios[scenarioId] || null;
// };

// // Helper function to check if scenario is a decision point
// export const isDecisionScenario = (scenario) => {
//   return scenario?.type === 'decision';
// };

// // Helper function to check if scenario is game over
// export const isGameOver = (scenario) => {
//   return scenario?.type === 'game_over' || scenario?.type === 'victory';
// };
