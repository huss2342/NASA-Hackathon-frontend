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

  // Interactive January scenario
  january_intro: {
    id: 'january_intro',
    type: 'interactive',
    background: '/winter.png',
    header: '/winter_header.png',
    text: `It's January in Monterey, California. The new year has just begun, and your fields stretch close to the coast, just a few feet above sea level. The weather has been strange over the last few winters.`,
    showComputer: true,
    showInitialPopup: true,
    next: 'spring_intro',
  },

  // Interactive Spring scenario
  spring_intro: {
    id: 'spring_intro',
    type: 'interactive',
    background: '/spring.png',
    header: '/spring_header.png',
    overlay: 'rain.gif',
    bottomLeftImage: 'rock.png',
    text: `It's mid-spring—April—and your almond trees are waking up from their winter sleep. They're entering their critical bloom and early fruit development stage, which means they're hungry for water. Problem is, the winter rains were pretty weak this year. Drought is always lurking in California, and you need to know what's actually happening beneath the surface.`,
    showComputer: true,
    showInitialPopup: true,
    next: null,
  },
};
