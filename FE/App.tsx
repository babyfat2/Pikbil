import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AnimatedSplashScreen } from 'screen/animatedSplashScreen';
import Test from 'test';

export default function App() {
  return (
    <Provider store={store}>
      <AnimatedSplashScreen>
        <Test width={10} />
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
