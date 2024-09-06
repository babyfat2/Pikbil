import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AnimatedSplashScreen } from 'screen/animatedSplashScreen';
import Introduce from 'screen/Introduce/Introduce';

export default function App() {
  return (
    <Provider store={store}>
      <AnimatedSplashScreen>
        <Introduce />
      </AnimatedSplashScreen>
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
