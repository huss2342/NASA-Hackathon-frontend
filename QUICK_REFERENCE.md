# 🎮 NASA Farm Navigators - Quick Reference

## What You Have Now

A **fully functional choice-based narrative game** with:

### ✅ Core Systems
- **Branching narrative** with multiple paths
- **Resource management** (water, money, time)
- **Multiple failure states** (4+ death scenarios)
- **NASA data integration** in every decision
- **Victory conditions** based on performance
- **Retry/replay** functionality

### ✅ Game Flow
```
Welcome Screen
  ↓
Story Introduction (4 screens)
  ↓
Tutorial
  ↓
Decision Point 1: Irrigation
  ├─ Good → Continue
  ├─ Poor → Warning → Continue
  └─ Bad → Continue (resource loss)
      ↓
Decision Point 2: Flood Warning
  ├─ Good → Continue
  ├─ Poor → Crisis → Continue
  └─ Bad → Crisis (heavy loss)
      ↓
Decision Point 3: Heat Wave
  ├─ Good → Continue
  ├─ Poor → Continue
  └─ Bad → DEATH (game over)
      ↓
Decision Point 4: Pest Control
  ├─ Good → Evaluation
  ├─ Poor → Evaluation
  └─ Bad → DEATH (game over)
      ↓
Final Evaluation
  ├─ Success → VICTORY
  └─ Failure → GAME OVER
```

## File Structure

```
src/
├── components/
│   ├── screens/
│   │   ├── WelcomeScreen.jsx       # Name entry
│   │   ├── StoryScreen.jsx          # Narrative text
│   │   ├── DecisionScreen.jsx       # Choice-based gameplay
│   │   ├── GameOverScreen.jsx       # Death/victory screens
│   │   └── EvaluationScreen.jsx     # Final judgment
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── ChoiceButton.jsx         # For choices
│   │   ├── ResourceBar.jsx          # Resource display
│   │   ├── NASADataPanel.jsx        # Satellite data
│   │   └── ... (other UI)
│   └── AudioManager.jsx
├── context/
│   └── GameStateContext.jsx         # Global game state
├── data/
│   └── scenarios.js                 # ALL GAME CONTENT HERE
└── App.jsx                          # Main orchestration
```

## How to Add Content

### Add a New Decision Scenario

Edit `src/data/scenarios.js`:

```javascript
scenario_new_challenge: {
  id: 'scenario_new_challenge',
  type: 'decision',
  title: 'Your Challenge Title',
  description: 'What is happening?',
  nasaData: {
    soilMoisture: 40,
    temperature: 85,
    precipitation: 30,
  },
  choices: [
    {
      id: 'safe_choice',
      text: 'Safe option with NASA data',
      feedback: 'You made a wise decision!',
      outcome: {
        water: -10,
        money: 50,
        time: -5,
        success: true,
      },
      next: 'next_scenario',
    },
    {
      id: 'risky_choice',
      text: 'Risky option ignoring data',
      feedback: 'That was dangerous!',
      outcome: {
        water: -30,
        money: -200,
        time: -20,
        success: false,
      },
      next: 'game_over_disaster',
    },
  ],
},
```

### Add a Death Scenario

```javascript
game_over_disaster: {
  id: 'game_over_disaster',
  type: 'game_over',
  title: 'Game Over',
  text: 'What went wrong and why you failed...',
  canRetry: true,
},
```

### Link Scenarios Together

In a previous scenario's choice:
```javascript
next: 'scenario_new_challenge'  // ID of your new scenario
```

## Key Concepts

### 1. Resources
- **Water**: 0-100 (irrigation, plant needs)
- **Money**: Starting $1000 (investments, purchases)
- **Time**: 0-100 (growing season duration)

Any resource hitting 0 = Game Over

### 2. Decision Types
- **Story**: Linear narrative, no choices
- **Decision**: Multiple choices with consequences
- **Evaluation**: Calculate win/loss
- **Game Over**: Death/failure screen
- **Victory**: Win screen

### 3. Branching Logic
Every choice has a `next` property pointing to the next scenario ID.
Different choices can lead to different scenarios.

### 4. NASA Data
Displayed in decisions to help inform player choices:
- Soil Moisture %
- Precipitation Chance %
- Temperature °F
- Vegetation Index
- Wind Speed mph

### 5. Success/Failure
Each choice has `success: true/false`:
- Used for feedback color (green/red)
- Can track decision quality
- Doesn't directly cause game over (resources do)

## Testing Your Game

```bash
npm run dev
```

Then play through:
1. ✅ Make all good choices → Should WIN
2. ✅ Make some bad choices → Resources deplete
3. ✅ Make catastrophic choice → Immediate death
4. ✅ Try retry after game over

## Current Scenarios

1. **story1-4**: Introduction narrative
2. **tutorial**: Mechanics explanation
3. **scenario_irrigation**: Water management decision
4. **scenario_flood_warning**: Storm preparation
5. **scenario_heat_stress**: Temperature crisis
6. **scenario_pest_control**: Crop health management
7. **final_evaluation**: Win/lose calculation
8. **game_victory**: Win screen
9. **game_over_heat**: Death from heat wave
10. **game_over_pests**: Death from pest infestation
11. **game_over_poor**: Death from poor performance

## Customization

### Change Win Conditions
Edit `src/components/screens/EvaluationScreen.jsx`:
```javascript
if (resources.money >= 1500 && resources.water >= 30 && resources.time >= 30) {
  // WIN
}
```

### Adjust Starting Resources
Edit `src/context/GameStateContext.jsx`:
```javascript
const [resources, setResources] = useState({
  water: 100,
  money: 1000,  // Change this
  time: 100,
});
```

### Add New Resource
1. Add to state in `GameStateContext.jsx`
2. Add ResourceBar in `DecisionScreen.jsx`
3. Update in choice outcomes

### Change Colors/Theme
Edit Tailwind classes in components:
- `bg-[#color]` for backgrounds
- `text-[#color]` for text
- `border-[#color]` for borders

## Common Issues

**Q: Choice doesn't navigate?**
- Check `next` property has valid scenario ID
- Verify scenario exists in `scenarios.js`

**Q: Resources not updating?**
- Check `outcome` object has correct properties
- Verify negative values use `-` prefix

**Q: Screen not showing?**
- Check `currentScenario` matches scenario `id`
- Verify scenario type is correct

**Q: Game over not triggering?**
- Check resource values in state
- Verify scenario `type` is `'game_over'`

## Pro Tips

💡 **Educational Feedback**: Make failures teachable moments
💡 **NASA Integration**: Always relate data to the decision
💡 **Progressive Difficulty**: Start easy, get harder
💡 **Multiple Paths**: Same endpoint, different routes
💡 **Resource Balance**: Don't make it too punishing early

## Documentation

- `CHOICE_GAME_ARCHITECTURE.md` - Detailed technical docs
- `PROJECT_STRUCTURE.md` - File organization
- `USAGE_GUIDE.md` - General React patterns

---

**You're ready to build your NASA farming game!** 🚀🌾

The architecture supports everything from your README:
✅ Interactive narrative gameplay
✅ Branching decision points  
✅ Real-time NASA data visualizations
✅ Educational feedback system
✅ Progressive difficulty
✅ Pass/fail mechanics with retry

Just add more scenarios to `scenarios.js` and they'll automatically work! 🎮
