# Zelda Database App (W.I.P)

A React Native mobile application that provides a database of The Legend of Zelda: Breath of the Wild content, including monsters, materials, and equipment.

An app created to explore recent lib versions and implementations. 

## Features

- **Monsters Database**: Browse and view details of all monsters from Breath of the Wild
- **Materials Database**: Explore materials and their properties
- **Equipment Database**: View weapons, armor, and equipment with their stats
- **Modern UI**: Clean, intuitive interface with Zelda-themed styling
- **Offline Support**: Cached data for offline viewing

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **Redux Toolkit** with RTK Query for state management and API calls
- **React Navigation** for screen navigation
- **Custom Components** with Zelda-themed styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

## Project Structure

```
src/
├── app/
│   ├── api/           # RTK Query API configuration
│   ├── components/    # Reusable UI components
│   ├── models/        # TypeScript data models
│   ├── screens/       # Screen components
│   └── viewModels/    # Business logic and state management
├── assets/            # Images, fonts, and static assets
├── constants/         # App constants and colors
├── navigation/        # Navigation configuration
├── store/            # Redux store setup
└── utils/            # Utility functions
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## API

The app uses the [BotW Compendium API](https://botw-compendium.herokuapp.com/) to fetch game data including:
- Monsters and their properties
- Materials and their effects
- Equipment with attack/defense stats

## Acknowledgments

- Data provided by the BotW Compendium API
- The Legend of Zelda: Breath of the Wild by Nintendo
