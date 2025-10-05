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
    text: 'You have a job in New York City. A Life. You can\'t just leave that behind.',
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
    next: 'january_intro',
  },

  // Flood Scenario
  january_intro: {
    id: 'january_intro',
    type: 'story',
    background: '/winter.png',
    header: '/winter_header.png',
    text: `It's January in Monterey, California. The new year has just begun, and your fields stretch close to the coast, just a few feet above sea level. The weather has been strange over the last few winters. You open the NASA Flooding Analysis Tool to check the projected flooding for January.`,
    next: 'january_params',
  },

  january_params: {
    id: 'january_params',
    type: 'story',
    background: '/winter.png',
    header: '/winter_header.png',
    text: `You set up the parameters for the analysis:`,
    bulletPoints: [
      'Location: Monterey, CA',
      'Flooding Threshold: 1.51 ft above MHHW (at this level, water could start reaching your fields, damaging crops and equipment)',
      'Scenario: Intermediate U.S. Interagency Sea Level Rise projection (cautious, but not extreme)'
    ],
    next: 'interpret_graph',
  },

  interpret_graph: {
    id: 'interpret_graph',
    type: 'story',
    background: '/winter.png',
    header: '/winter_header.png',
    text: 'For January, the tool shows a median of 3 flooding days.',
    next: 'flood_decision',
  },

  flood_decision: {
    id: 'flood_decision',
    type: 'decision',
    background: '/winter.png',
    header: '/winter_header.png',
    title: 'Flooding Decision',
    description: 'Do you prepare the farm for possible flooding?',
    choices: [
      {
        id: 'prepare',
        text: 'Prepare the farm',
        next: 'prepare_choice',
      },
      {
        id: 'conserve',
        text: 'Conserve resources',
        next: 'ignore_consequence',
      },
    ],
  },

  prepare_choice: {
    id: 'prepare_choice',
    type: 'decision',
    background: '/winter.png',
    header: '/winter_header.png',
    title: 'Equipment Protection',
    description: 'Are you moving your equipment, tools, and seedlings to an elevated area to avoid water damage?',
    choices: [
      {
        id: 'yes_move',
        text: 'Yes, move everything to safety',
        next: 'prepare_outcome',
      },
      {
        id: 'no_move',
        text: 'No, leave them in place',
        next: 'ignore_consequence',
      },
    ],
  },

  prepare_outcome: {
    id: 'prepare_outcome',
    type: 'story',
    background: '/winter.png',
    header: '/winter_header.png',
    text: `On January 14th, the rains come. Your preparations pay off: the fields stay mostly dry, and your crops survive. NASA's prediction was right.`,
    next: null, // End of scenario for now
  },

  ignore_consequence: {
    id: 'ignore_consequence',
    type: 'story',
    background: '/winter.png',
    header: '/winter_header.png',
    text: `You decide it's not worth the expense. On January 14th, a storm hits the coast. The fields flood, damaging equipment, tools, and seedlings.`,
    next: null, // Could link to retry or next level
  },
};
