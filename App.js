import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './src/screens/Home';
import { PostProvider } from './src/context/PostContext'; //importing!!!
import Search from './src/screens/Search';
import Upload from './src/screens/Upload';
import Activity from './src/screens/Activity';
import Profile from './src/screens/Profile';

import { Ionicons } from '@expo/vector-icons';

const navigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: '',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name="ios-home"
          size={24}
          color={focused ? "black" : "gray"}
        />
      )
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
      tabBarLabel: '',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name="ios-search"
          size={24}
          color={focused ? "black" : "gray"}
        />
      )
    }
  },
  Upload: {
    screen: Upload,
    navigationOptions: {
      title: 'Upload',
      tabBarLabel: '',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name={focused ? "ios-add-circle" : "ios-add-circle-outline"}
          size={24}
          color="black"
        />
      )
    }
  },
  Activity: {
    screen: Activity,
    navigationOptions: {
      title: 'Activity',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name="ios-heart"
          size={24}
          color={focused ? "black" : "gray"}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      tabBarLabel: '',
      tabBarIcon: ({ focused }) => (
        <Ionicons
          name="ios-person"
          size={24}
          color={focused ? "black" : "gray"}
        />
      )
    }
  },
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Images'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (// setting the provider
    <PostProvider>
      <App />
    </PostProvider>
  );
};
