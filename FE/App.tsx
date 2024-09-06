import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AnimatedSplashScreen } from 'screen/animatedSplashScreen';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Navigation from 'screen/navigation';

const persistor = persistStore(store);

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AnimatedSplashScreen>
          <Navigation />
        </AnimatedSplashScreen>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
