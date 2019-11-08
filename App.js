import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeView from './Screens/HomeScreen';
import EmployeeDetailView from './Screens/EmployeeDetailScreen';
import FormView from './Screens/FormScreen';

import AWSAppSyncClient from 'aws-appsync';
import awsmobile from './aws-exports';
//import {Rehydrated} from 'aws-appsync-react';
import {ApolloProvider} from 'react-apollo';

const appSyncClient = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    type: awsmobile.aws_appsync_authenticationType,
    apiKey: awsmobile.aws_appsync_apiKey,
  },
});

const MainNavigator = createStackNavigator({
  HomeView: {screen: HomeView},
  EmployeeDetailView: {screen: EmployeeDetailView},
  FormView: {screen: FormView},
});

const App = createAppContainer(MainNavigator);

const AppWithProvider = () => (
  <ApolloProvider client={appSyncClient}>
    <App />
  </ApolloProvider>
);

export default AppWithProvider;
