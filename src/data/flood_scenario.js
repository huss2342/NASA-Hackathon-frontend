export const flood_scenario = {
  // Flood Scenario
  january_intro: {
    id: 'flood_scenario',
    type: 'story',
    text: `The new year has just begun, and your fields stretch close to the coast, just a few feet above sea level. 
The weather has been strange over the last few winters. 
You open the NASA Flooding Analysis Tool to check the projected flooding for January.`,
    next: 'january_params',
  },

  january_params: {
    id: 'january_params',
    type: 'story',
    text: `You set up the parameters for the analysis:
- Location: Monterey, CA
- Flooding Threshold: 1.51 ft above MHHW (at this level, water could start reaching your fields, damaging crops and equipment)
- Scenario: Intermediate U.S. Interagency Sea Level Rise projection (cautious, but not extreme)`,
    next: 'interpret_graph',
  },

  interpret_graph: {
    id: 'interpret_graph',
    type:'story',
    text:'For January, the tool shows a median of 3 flooding days.',
    next:'flood_decision',
  },

  flood_decision: {
    id: 'flood_decision',
    type: 'choice',
    text: `Do you prepare the farm for possible flooding?`,
    choices: [
      {
        text: 'Prepare the farm.',
        next: 'prepare_choice',
      },
      {
        text: 'Conserve resources.',
        next: 'ignore_consequence',
      },
    ],
  },

  prepare_choice: {
    id: 'prepare_choice',
    type: 'choice',
    text: 'Are you moving your equipment, tools, and seedlings to an elevated area to avoid water damage?',
    choices: [
        {
            text:'Yes',
            next:'prepare_outcome',
        },
        {
            text:'No',
            next:'ignore_consequence',
        },
    ],
    next: 'prepare_outcome',
  },

  prepare_outcome: {
    id: 'prepare_outcome',
    type: 'story',
    text: `On January 14th, the rains come. Your preparations pay off: the fields stay mostly dry, and your crops survive.
NASA’s prediction was right.`,
    next: 'NEXTLEVEL',
  },

  ignore_consequence: {
    id: 'ignore_consequence',
    type: 'story',
    text: `You decide it's not worth the expense. On January 14th, a storm hits the coast. The fields flood, damaging equipment, tools, and seedling.`,
    effects: {
      score: -1,
    },
    next: 'REPLAYLEVEL',
  },
};