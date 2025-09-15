import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import Navigation from '~/navigation';
import store from '~/store/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'HyliaSerifBeta-Regular': require('./src/assets/fonts/HyliaSerifBeta-Regular.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 500 }}
        style={{ flex: 1 }}
      >
        <StatusBar style="light" />
        <Navigation />
      </MotiView>
    </Provider>
  );
}
