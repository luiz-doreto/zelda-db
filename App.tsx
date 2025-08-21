import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import store from '~/store/store';
import Navigation from '~/navigation';

export default function App() {
  const [loaded] = useFonts({
    Hylia: require('./src/assets/fonts/HyliaSerifBeta-Regular.otf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigation />
    </Provider>
  );
}
