# 🎮 Choice-Based Game Architecture

## Overview

The app now supports a **full branching narrative system** with:
- ✅ Multiple decision points
- ✅ Resource management (water, money, time)
- ✅ Multiple failure states (death scenarios)
- ✅ Victory conditions
- ✅ NASA data integration
- ✅ Consequence-based gameplay

## How It Works

### 1. Scenario System (`src/data/scenarios.js`)

All game content is defined in a central scenarios object. Each scenario has:

```javascript
{
  id: 'unique_id',
  type: 'decision' | 'story' | 'game_over' | 'victory' | 'evaluation',
  title: 'Scenario Title',
  description: 'What's happening',
  nasaData: { /* satellite data */ },
  choices: [
    {
      id: 'choice_id',
      text: 'Choice description',
      feedback: 'Result explanation',
      outcome: {
        water: -20,    // Resource changes
        money: 50,
        time: -10,
        success: true  // Did player make good choice?
      },
      next: 'next_scenario_id'  // Where to go after this choice
    }
  ]
}
```

### 2. Branching Paths

**Example Flow:**
```
Welcome → Story 1-4 → Tutorial
  ↓
Irrigation Decision
  ├─ Good choice → Flood Warning
  ├─ Poor choice → Crisis → Flood Warning
  └─ Bad choice → Crisis → Flood Warning
     ↓
Flood Warning
  ├─ Good choice → Heat Stress
  ├─ Poor choice → Crisis → Heat Stress
  └─ Bad choice → GAME OVER (death)
     ↓
Heat Stress
  ├─ Good choice → Pest Control
  ├─ Poor choice → Pest Control
  └─ Bad choice → GAME OVER (death from heat)
     ↓
Pest Control
  ├─ Good choice → Final Evaluation
  ├─ Poor choice → Final Evaluation
  └─ Bad choice → GAME OVER (death from pests)
     ↓
Final Evaluation
  ├─ Resources sufficient → VICTORY
  └─ Resources insufficient → GAME OVER (bank foreclosure)
```

### 3. Death/Failure Scenarios

There are **multiple ways to lose:**

1. **Catastrophic Decisions**: Ignoring NASA data leads to immediate failure
   - Example: Ignoring heat wave warning kills 50% of crops
   - Example: Ignoring pest data spreads infestation

2. **Resource Depletion**: Any resource reaching 0
   - Water: 0 → crops die
   - Money: 0 → can't afford operations
   - Time: 0 → season ends without harvest

3. **Final Evaluation**: Poor cumulative performance
   - Bank denies loan if final resources too low

### 4. State Management

**GameStateContext** (`src/context/GameStateContext.jsx`) manages:

```javascript
{
  playerName: string,
  currentScenario: string,        // Current scenario ID
  resources: {
    water: 0-100,
    money: number,
    time: 0-100
  },
  decisions: [],                   // History of choices
  gameStatus: 'playing' | 'won' | 'lost',
  
  // Actions
  makeDecision(),
  updateResources(),
  goToScenario(),
  resetGame(),
  checkWinCondition()
}
```

## Adding New Content

### Adding a New Decision Point

1. **Add to `scenarios.js`:**

```javascript
scenario_new_crisis: {
  id: 'scenario_new_crisis',
  type: 'decision',
  title: 'New Crisis',
  description: 'Something bad is happening!',
  nasaData: {
    soilMoisture: 25,
    temperature: 95,
  },
  choices: [
    {
      id: 'option_a',
      text: 'Do something smart',
      feedback: 'Good job!',
      outcome: {
        water: -10,
        money: 100,
        time: -5,
        success: true,
      },
      next: 'next_scenario',
    },
    {
      id: 'option_b',
      text: 'Do something risky',
      feedback: 'That was dangerous!',
      outcome: {
        water: -30,
        money: -50,
        time: -15,
        success: false,
      },
      next: 'game_over_new_death',
    },
  ],
},
```

2. **Link from previous scenario:**

```javascript
// In the previous scenario's choices
{
  next: 'scenario_new_crisis'  // Points to your new scenario
}
```

That's it! The app automatically renders it.

### Adding a New Death Scenario

```javascript
game_over_new_death: {
  id: 'game_over_new_death',
  type: 'game_over',
  title: 'Game Over',
  text: 'Explanation of what went wrong and why the player failed.',
  canRetry: true,
},
```

### Adding Conditional Branches

You can branch based on previous decisions or resources:

```javascript
// In a choice's outcome, check state
if (resources.water < 30) {
  next: 'drought_crisis'
} else {
  next: 'normal_path'
}
```

For complex conditions, add logic to `DecisionScreen.jsx`.

## Key Features

### Resource Management

Resources display at the top of decision screens:
- **Water**: 💧 (0-100)
- **Money**: 💰 (starts at 1000)
- **Time**: ⏰ (0-100)

Color-coded bars show status:
- Green: >66%
- Yellow: 33-66%
- Red: <33%

### NASA Data Integration

Each decision can show real satellite data:

```javascript
nasaData: {
  soilMoisture: 30,      // %
  precipitation: 70,      // % chance
  temperature: 102,       // °F
  vegetation: 60,         // NDVI index
  windSpeed: 25,          // mph
}
```

Displayed in a special panel with emojis and formatting.

### Decision Feedback

After choosing:
1. Immediate feedback on choice quality
2. Resources update with animation
3. Continue button appears
4. Next scenario loads

### Game Over Handling

Game over screens offer:
- Replay option
- Explanation of failure
- Tips for better choices
- Victory celebration (if won)

## Victory Conditions

Player wins if they:
1. Reach final evaluation with:
   - Money ≥ $1500
   - Water ≥ 30%
   - Time ≥ 30%
2. Successfully navigate major decisions
3. Use NASA data effectively

## Testing Your Changes

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Test different paths:**
   - Play through making all good choices
   - Test each death scenario
   - Verify resource depletion triggers game over
   - Check victory condition

3. **Debug tips:**
   - Check console for state updates
   - React DevTools to inspect GameStateContext
   - Add console.logs in decision handlers

## Best Practices

### Writing Scenarios

✅ **DO:**
- Make NASA data relevant to the choice
- Provide clear feedback on outcomes
- Balance risk/reward
- Give hints about optimal choices
- Make failure scenarios educational

❌ **DON'T:**
- Make choices arbitrary (no data)
- Punish players for using NASA data correctly
- Create impossible situations
- Skip feedback explanations

### Balancing Difficulty

- **Early game**: Forgiving, educational
- **Mid game**: Balanced risk/reward
- **Late game**: High stakes, require good decisions

### Resource Costs

- **Small decisions**: 5-15 resource units
- **Medium decisions**: 20-30 resource units
- **Major decisions**: 40+ resource units or game over

## Example: Full Scenario Flow

```javascript
// 1. Player sees NASA data showing 102°F heat wave
// 2. Three choices offered:
//    - Install shade cloth ($400, 20 time) → SUCCESS → next scenario
//    - Extra irrigation (40 water) → POOR → next scenario
//    - Do nothing → DEATH → game over screen
// 3. If death: Retry option returns to welcome
// 4. If success: Continue to next challenge
// 5. Final eval: Check all resources
// 6. Win or lose based on cumulative performance
```

## Next Steps

Now you can:
1. ✅ Add more decision scenarios
2. ✅ Create additional death paths
3. ✅ Add more complex NASA data visualizations
4. ✅ Implement save/load for long games
5. ✅ Add achievements based on decision history
6. ✅ Create difficulty levels

---

Your choice-based game is fully functional! 🎮
