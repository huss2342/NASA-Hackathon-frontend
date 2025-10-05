# 🚀 Quick Start Guide - Modular React Structure

## What Changed?

Your game has been refactored from a single HTML file into a modular React application with proper component separation and state management.

## Key Benefits

✅ **Modular Components** - Easy to maintain and extend
✅ **Reusable UI Elements** - DRY principle throughout
✅ **State Management** - Context API for global state
✅ **Tailwind CSS** - Fast styling with utility classes
✅ **Type-Safe Ready** - Easy to migrate to TypeScript
✅ **Better Organization** - Clear separation of concerns

## How to Use

### Running the App

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Making Changes

#### 1. Modify Existing Screens

Edit files in `src/components/screens/`:
```jsx
// src/components/screens/WelcomeScreen.jsx
// Change the title, input fields, or layout
```

#### 2. Add New UI Components

Create new components in `src/components/ui/`:
```jsx
// src/components/ui/NewComponent.jsx
const NewComponent = ({ children, ...props }) => {
  return (
    <div className="your-tailwind-classes">
      {children}
    </div>
  );
};

export default NewComponent;
```

#### 3. Update Game State

Modify `src/context/GameContext.jsx`:
```jsx
// Add new state variables
const [newFeature, setNewFeature] = useState(false);

// Add to context value
const value = {
  playerName,
  currentScreen,
  musicPlaying,
  newFeature,        // Add here
  setNewFeature,     // And here
  // ... existing methods
};
```

#### 4. Access State in Components

```jsx
import { useGame } from '../../context/GameContext';

function MyComponent() {
  const { playerName, currentScreen, nextScreen } = useGame();
  
  return (
    <div>Player: {playerName}</div>
  );
}
```

## Component Examples

### Creating a New Screen

```jsx
// src/components/screens/NewScreen.jsx
import { useGame } from '../../context/GameContext';
import Screen from '../ui/Screen';
import Button from '../ui/Button';

const NewScreen = () => {
  const { currentScreen, nextScreen } = useGame();

  return (
    <Screen active={currentScreen === 'newScreen'}>
      <h2>New Screen</h2>
      <Button onClick={() => nextScreen('nextScreen')}>
        Continue
      </Button>
    </Screen>
  );
};

export default NewScreen;
```

Then add to `App.jsx`:
```jsx
import NewScreen from './components/screens/NewScreen';

// Inside GameContent component:
<NewScreen />
```

### Creating a Custom Hook

```jsx
// src/hooks/useCustomHook.js
import { useState, useEffect } from 'react';

export const useCustomHook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Your logic here
  }, []);

  return { data, setData };
};
```

## Styling with Tailwind

### Using Utility Classes

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  Content
</div>
```

### Custom Colors (from your design)

```jsx
<div className="bg-[#1a1a2e] text-[#e94560] border-[#16213e]">
  Custom colors
</div>
```

### Responsive Design

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
```

## File Organization Tips

### When to Create New Files

- **New Screen**: `src/components/screens/ScreenName.jsx`
- **Reusable UI**: `src/components/ui/ComponentName.jsx`
- **Business Logic**: `src/hooks/useFeatureName.js`
- **Global State**: Extend `src/context/GameContext.jsx`
- **Utilities**: `src/utils/helperName.js`

### Import Organization

```jsx
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import someLibrary from 'some-library';

// 3. Context/Hooks
import { useGame } from '../../context/GameContext';

// 4. Components
import Button from '../ui/Button';

// 5. Assets/Styles
import './styles.css';
```

## Common Tasks

### Add Background Music

Already implemented! The `AudioManager` component handles this.

### Navigate Between Screens

```jsx
const { nextScreen } = useGame();
nextScreen('screenName'); // e.g., 'welcome', 'story1', 'game'
```

### Access Player Name

```jsx
const { playerName } = useGame();
```

### Toggle Music

Extend `GameContext.jsx` to add music controls:
```jsx
const toggleMusic = () => setMusicPlaying(!musicPlaying);
```

## Debugging Tips

1. **Check Console**: Open DevTools (F12) for errors
2. **React DevTools**: Install browser extension for component inspection
3. **Context Issues**: Ensure components are wrapped in `GameProvider`
4. **Tailwind Not Working**: Check `tailwind.config.js` and `postcss.config.js`

## Next Steps

1. ✅ Project is organized and modular
2. 🎮 Implement game mechanics in `GameScreen.jsx`
3. 🎨 Enhance UI components as needed
4. 🔊 Add sound effects using the `useAudio` hook pattern
5. 💾 Add save/load functionality with localStorage
6. 📱 Make responsive for mobile devices

## Need Help?

- Check `PROJECT_STRUCTURE.md` for architecture overview
- Review existing components for patterns
- Tailwind Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev

---

Happy Coding! 🚀
