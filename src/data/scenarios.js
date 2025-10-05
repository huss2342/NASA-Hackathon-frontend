export const scenarios = {
  story1: {
    id: 'story1',
    type: 'story',
    text: "It's been a long year. In the mail you receive a rusty key and a note: \"The farm is yours now, dear. We had to leave in a hurry, but we believe you can bring it back to life. - Grandma & Grandpa\"",
    image:'/public/letter.gif',
    splitLayout: true,
    next: 'story2',
  },
  story2: {
    id: 'story2',
    type: 'story',
    text: 'You have a job in New York City. A life. An apartment. Friends. You can\'t just leave that behind... can you?',
    image:'city.gif',
    imageBottom: 1,    // 20px from bottom
    imageRight: 1,     // 20px from right
    imageWidth: 1000,    // adjust size as needed
    next: 'story3',
  },
  story3: {
    id: 'story3',
    type: 'story',
    text: 'But you remember those magical summers at the farm as a child—the smell of fresh soil, your grandmother\'s laughter in the kitchen, helping grandpa repair the old tractor. That connection to the land... to them.',
    images: ['grandma.gif', 'grandpa.webp'],  // Array of images to crossfade
    fadeDuration: 2,  // seconds per image (optional, defaults to 4)
    imageBottom: 50,
    imageRight: 50,
    imageWidth: 300,
    imageHeight:300,
    next: 'story4',
  },
  story4: {
    id: 'story4',
    type: 'story',
    text: 'The note didn\'t say where they went or why. Just that they trusted you to make the farm thrive again—sustainably, the way they always did. <br><br>"What if...?" you whisper to yourself. A chance to start over. To build something real. To maybe understand what happened...',
    next: 'story5',
  },
  story5: {
    id: 'story5',
    type: 'story',
    text: 'Welcome home, <span style="color: #4ecca3;">{playerName}</span>. <br><br>The farm awaits. And perhaps, if you restore it to its former glory, your grandparents will find their way back too.',
    image:'grandparents.gif',
    imageBottom: 1,    // 20px from bottom
    imageRight: 1,     // 20px from right
    imageWidth: 500,    // adjust size as needed
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
    text: `It's mid-spring—April—and your almond trees are waking up from their winter sleep. They're entering their critical bloom and early fruit development stage, which means they're hungry for water. Problem is, the winter rains were pretty weak this year. Drought is always lurking in California, and you need to know what's actually happening beneath the surface.`,
    showComputer: true,
    showInitialPopup: true,
    next: "summer_intro",
  },

summer_intro: {
  id: 'summer_intro',
  type: 'interactive',
  background: '/summer.png',
  header: '/summer_header.png',
  topRightImage: '/sun.png',
  rotateTopRight: true,
  text: `It's peak summer, July—and the heat is relentless. Walking through your almond orchard, you can feel the warmth radiating from the soil itself. The air feels thick, and you're worried about heat stress damaging the trees during this critical fruit development period.\n\nLocal air temperature readings don't tell the whole story. What matters is the Land Surface Temperature (LST)—the actual temperature of the canopy and soil surface where your trees are working hardest.`,
  showComputer: true,
  showInitialPopup: true,
  next: 'game_over',
},

  // Game Over Screen
  game_over: {
    id: 'game_over',
    type: 'game_over',
    title: 'Season Complete',
    text: 'Your first growing season has come to an end, {playerName}. Let\'s see how your decisions shaped the farm\'s future...',
    canRetry: true,
  },
}