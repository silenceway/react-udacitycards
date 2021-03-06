import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CreateStore, createStore } from 'redux';
import { Provider } from 'react-redux';
import { TabNavigator , StackNavigator, DrawerNavigator} from 'react-navigation'
import reducer from './reducers';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import DeckAdd from './components/DeckAdd';
import QuestionsView from './components/QuestionsView';
import QuestionAdd from './components/QuestionAdd';
import { setLocalNotification } from './utils/notifications';

const TabsNavigator = TabNavigator({
  Decks: {
    screen: DeckList,
    title: "Decks",
    navigationOptions: {
      tabBarLabel: "Decks",
    }
  },
  DeckAdd: {
    screen: DeckAdd,
    title: "Add a Deck",
    navigationOptions: {
      header: null,
    }
  },
},
{
  tabBarOptions: {
    showIcon: true,
    style: {
      height : 60,
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: TabsNavigator,
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
  QuestionsView: {
    screen: QuestionsView,
    navigationOptions: ({ navigation }) => ({
      headerMode: 'screen',
      title: `${navigation.state.params.title}`,
    }),
  },
  QuestionAdd: {
    screen: QuestionAdd,
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
  componentDidMount() {
    setLocalNotification();
  }
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
