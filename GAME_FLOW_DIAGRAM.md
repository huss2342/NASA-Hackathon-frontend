# 🎮 Game Flow Visualization

## Complete Game Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        WELCOME SCREEN                            │
│                     Enter player name                            │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    STORY INTRODUCTION                            │
│  Story 1 → Story 2 → Story 3 → Story 4 → Tutorial               │
│            (Linear narrative sequence)                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│               🌾 DECISION 1: IRRIGATION 💧                       │
│                                                                  │
│  NASA Data: Soil Moisture 30%, Precipitation 20%                │
│                                                                  │
│  ┌──────────────────┬──────────────────┬─────────────────────┐  │
│  │ Irrigate Heavy   │ Irrigate Moderate│ Don't Irrigate      │  │
│  │ -40💧 -10⏰      │ -20💧 +50💰 -5⏰ │ -100💰 -15⏰        │  │
│  │ ❌ BAD          │ ✅ GOOD          │ ❌ RISKY            │  │
│  └────┬─────────────┴────┬─────────────┴──────┬──────────────┘  │
│       │                  │                     │                 │
└───────┼──────────────────┼─────────────────────┼─────────────────┘
        │                  │                     │
        └──────────────────┴─────────────────────┘
                           │
                           ▼
           ┌───────────────────────────────┐
           │     ⚠️  CRISIS WARNING        │
           │   (if bad choices made)       │
           └───────────────┬───────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│              🌧️  DECISION 2: FLOOD WARNING 🌊                  │
│                                                                  │
│  NASA Data: Precipitation 70%, Wind 25mph                       │
│                                                                  │
│  ┌──────────────────┬──────────────────┬─────────────────────┐  │
│  │ Prepare Drainage │ Do Nothing       │ Emergency Harvest   │  │
│  │ -300💰 -15⏰     │ -400💰 -25⏰     │ -100💰 -20⏰        │  │
│  │ +10💧           │ -20💧           │  0💧                │  │
│  │ ✅ SMART        │ ❌ CATASTROPHIC  │ ⚠️  COMPROMISE     │  │
│  └────┬─────────────┴────┬─────────────┴──────┬──────────────┘  │
│       │                  │                     │                 │
└───────┼──────────────────┼─────────────────────┼─────────────────┘
        │                  │                     │
        │                  ▼                     │
        │         ┌──────────────────┐           │
        │         │  SEVERE CRISIS   │           │
        │         │ (Heavy penalties)│           │
        │         └────────┬─────────┘           │
        │                  │                     │
        └──────────────────┴─────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                🌡️  DECISION 3: HEAT WAVE ☀️                    │
│                                                                  │
│  NASA Data: Temperature 102°F, Soil Moisture 25%                │
│                                                                  │
│  ┌──────────────────┬──────────────────┬─────────────────────┐  │
│  │ Shade Cloth      │ Extra Irrigation │ Do Nothing          │  │
│  │ -400💰 -20⏰     │ -40💧 -10⏰      │  0 resources        │  │
│  │ -15💧           │ ❌ WASTEFUL      │ ❌ FATAL            │  │
│  │ ✅ EXCELLENT    │                  │                     │  │
│  └────┬─────────────┴────┬─────────────┴──────┬──────────────┘  │
│       │                  │                     │                 │
└───────┼──────────────────┼─────────────────────┼─────────────────┘
        │                  │                     │
        │                  │                     ▼
        │                  │          ┌──────────────────────┐
        │                  │          │ 💀 GAME OVER: HEAT   │
        │                  │          │  50% crops died!     │
        │                  │          │   [TRY AGAIN]        │
        │                  │          └──────────────────────┘
        │                  │                     │
        └──────────────────┴─────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│             🐛 DECISION 4: PEST CONTROL 🌱                      │
│                                                                  │
│  NASA Data: Vegetation Index 45 (abnormal)                      │
│                                                                  │
│  ┌──────────────────┬──────────────────┬─────────────────────┐  │
│  │ Targeted Spray   │ Spray Everything │ Ignore Pests        │  │
│  │ -200💰 -10⏰     │ -500💰 -20⏰     │ -800💰 -40⏰        │  │
│  │ -5💧            │ -10💧           │ ❌ DISASTER         │  │
│  │ ✅ PERFECT      │ ❌ OVERKILL      │                     │  │
│  └────┬─────────────┴────┬─────────────┴──────┬──────────────┘  │
│       │                  │                     │                 │
└───────┼──────────────────┼─────────────────────┼─────────────────┘
        │                  │                     │
        │                  │                     ▼
        │                  │          ┌──────────────────────┐
        │                  │          │ 💀 GAME OVER: PESTS  │
        │                  │          │ Infestation spread!  │
        │                  │          │   [TRY AGAIN]        │
        │                  │          └──────────────────────┘
        │                  │
        └──────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                  📊 FINAL EVALUATION ⏳                          │
│                                                                  │
│               Calculating season results...                      │
│                    (3 second wait)                               │
│                                                                  │
│             Final Resources Check:                               │
│             💧 Water: ???/100                                    │
│             💰 Money: $???                                       │
│             ⏰ Time:  ???/100                                    │
│                                                                  │
└────────────────────────┬────────────────────────────────────────┘
                         │
        ┌────────────────┴────────────────┐
        │                                  │
        ▼                                  ▼
┌──────────────────────┐      ┌──────────────────────────┐
│  🎉 VICTORY! 🏆     │      │  💀 GAME OVER 📉         │
│                      │      │                          │
│  Money ≥ $1500      │      │  Insufficient resources  │
│  Water ≥ 30         │      │  Bank denies loan        │
│  Time ≥ 30          │      │                          │
│                      │      │                          │
│  Farm saved!        │      │  Farm foreclosed         │
│  Bank loan approved │      │                          │
│                      │      │                          │
│  [PLAY AGAIN]       │      │    [TRY AGAIN]          │
└──────────────────────┘      └──────────────────────────┘
```

## Resource Flow Example

### Starting Resources
```
💧 Water:  100/100  ████████████████████  (Green)
💰 Money:  $1000    
⏰ Time:   100/100  ████████████████████  (Green)
```

### After Bad Irrigation Choice
```
💧 Water:   60/100  ████████████░░░░░░░░  (Yellow) -40
💰 Money:  $1000    ═══════════════════   (Green)   0
⏰ Time:    90/100  ██████████████████░░  (Green)  -10
```

### After Bad Flood Choice
```
💧 Water:   40/100  ████████░░░░░░░░░░░░  (Yellow) -20
💰 Money:   $600    ██████░░░░░░░░░░░░░░  (Red)   -400
⏰ Time:    65/100  █████████████░░░░░░░  (Yellow) -25
```

### Critical State (One More Bad Choice = Death)
```
💧 Water:   25/100  █████░░░░░░░░░░░░░░░  (Red)
💰 Money:   $100    ██░░░░░░░░░░░░░░░░░░  (Red)
⏰ Time:    45/100  █████████░░░░░░░░░░░  (Yellow)
```

## Decision Tree Summary

### Path to Victory (Optimal Choices)
```
1. Irrigate Moderate     (+50💰, -20💧, -5⏰)   ✅
2. Prepare Drainage      (-300💰, +10💧, -15⏰) ✅
3. Shade Cloth           (-400💰, -15💧, -20⏰) ✅
4. Targeted Treatment    (-200💰, -5💧, -10⏰)  ✅
───────────────────────────────────────────────
Final: Water: 60, Money: $1150, Time: 50
Result: 🎉 VICTORY
```

### Path to Defeat (Poor Choices)
```
1. Irrigate Heavy        (-40💧, -10⏰)          ❌
2. Do Nothing (Flood)    (-400💰, -20💧, -25⏰)  ❌
3. Extra Water           (-40💧, -10⏰)          ❌
4. Spray Everything      (-500💰, -10💧, -20⏰)  ❌
───────────────────────────────────────────────
Final: Water: -10 (DEAD), Money: -$300, Time: 25
Result: 💀 GAME OVER (resources depleted)
```

### Instant Death Paths
```
1. Any choice
2. Any choice
3. Do Nothing (Heat) → 💀 IMMEDIATE GAME OVER
   OR
4. Ignore Pests → 💀 IMMEDIATE GAME OVER
```

## NASA Data Integration

Each decision shows relevant satellite data:

```
┌────────────────────────────────────┐
│  🛰️  NASA SATELLITE DATA          │
├────────────────────────────────────┤
│  💧 Soil Moisture:        30%      │
│  🌧️  Precipitation:       70%      │
│  🌡️  Temperature:         102°F    │
│  🌱 Vegetation Index:     45       │
│  💨 Wind Speed:           25 mph   │
└────────────────────────────────────┘
```

Players must interpret this data to make informed choices!

---

**Your game has 8+ unique scenarios, 4+ death states, and multiple paths to victory or defeat!** 🎮
