# Farm Navigators - React Project Structure

## 📁 Project Structure

```
src/
├── components/
│   ├── screens/           # Full-screen game views
│   │   ├── WelcomeScreen.jsx
│   │   ├── StoryScreen.jsx
│   │   └── GameScreen.jsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── StoryText.jsx
│   │   ├── PixelBackground.jsx
│   │   ├── GameContainer.jsx
│   │   └── Screen.jsx
│   └── AudioManager.jsx   # Audio playback management
├── context/
│   └── GameContext.jsx    # Global game state management
├── hooks/
│   └── useAudio.js        # Custom hook for audio functionality
├── assets/
├── App.jsx                # Main app component
├── App.css
├── main.jsx               # React entry point
└── index.css              # Global styles with Tailwind
```

## 🎯 Architecture Overview

### Context API (GameContext)
- Manages global game state (player name, current screen, music state)
- Provides easy access to game state across all components
- Located in `src/context/GameContext.jsx`

### Component Organization

#### Screens (`src/components/screens/`)
- **WelcomeScreen**: Initial screen with player name input
- **StoryScreen**: Reusable component for story segments (1-4)
- **GameScreen**: Main game interface (placeholder for game logic)

#### UI Components (`src/components/ui/`)
- **Button**: Styled game button with pixel-art aesthetic
- **StoryText**: Text container for story content
- **PixelBackground**: Background image component
- **GameContainer**: Main game window wrapper
- **Screen**: Reusable screen layout component

#### Utilities
- **AudioManager**: Handles background music playback
- **useAudio**: Custom React hook for audio control

### Styling Approach
- **Tailwind CSS**: Utility-first styling
- **Custom Classes**: Maintains pixel-art game aesthetic
- **Inline Styles**: Used sparingly for dynamic values

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Tailwind Configuration

The project uses Tailwind CSS with custom color values matching the original design:
- Background: `#1a1a2e`
- Primary: `#e94560`
- Secondary: `#0f3460`
- Accent: `#4ecca3`

## 📝 Key Features

- **Modular Component Structure**: Easy to extend and maintain
- **Context-based State Management**: Clean data flow
- **Reusable Components**: DRY principle throughout
- **Tailwind Integration**: Rapid styling with utility classes
- **Audio Management**: Separated concern for music playback
- **Type-safe**: Ready for TypeScript migration if needed

## 🔧 Adding New Features

### Adding a New Screen
1. Create component in `src/components/screens/`
2. Import and add to App.jsx
3. Update GameContext if needed for navigation

### Adding New UI Components
1. Create in `src/components/ui/`
2. Use Tailwind for styling
3. Make components reusable with props

### Extending Game Logic
- Add new context providers for specific features
- Create custom hooks for complex logic
- Keep business logic separate from UI components

## 🎮 Next Steps

- Implement actual game mechanics
- Add more screens/levels
- Enhance animations
- Add sound effects
- Implement save/load functionality
- Add settings menu

## 📦 Dependencies

- **React**: UI library
- **Tailwind CSS**: Styling framework
- **Vite**: Build tool and dev server

---

Built with ❤️ for the NASA Hackathon
