import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { NavigationContainer } from '@react-navigation/native';
import { AnimatedSplashScreen } from 'animatedSplashScreen';
import Navigation from 'navigation';

const persistor = persistStore(store);

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AnimatedSplashScreen>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </AnimatedSplashScreen>
      </PersistGate>
    </Provider>
  );
}