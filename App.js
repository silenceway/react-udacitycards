import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreateStore, createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator , StackNavigator, DrawerNavigator} from 'react-navigation'
import reducer from './reducers';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      headerMode: 'none',
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      title: `${navigation.state.params.title}`,
    }),
  },
},
{
  mode: 'modal',
  headerMode: 'screen',
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
