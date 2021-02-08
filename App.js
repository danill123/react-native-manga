/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// redux setup & config
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combine_store from './redux/combine_store';

const store = createStore(combine_store, applyMiddleware(thunk));

// import screen
import Home from './screens/Home';
import Detail from './screens/Detail';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Provider store={store}>
        <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'List Manga' }} />
                <Stack.Screen name="Detail" component={Detail} options={{ title: 'Detail' }} />
              </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider> 
      </Provider>
    );
  }
};

export default App;
