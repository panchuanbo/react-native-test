import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Button,
} from 'react-native';

import BasicCell from '../Components/BasicCell.js';

const kData = [
  {
    id: '123',
    firstname: 'Jon',
    lastname: 'Garret',
    skills: [
      {
        id: 'abc',
        name: 'painter',
      },
      {
        id: 'efg',
        name: 'drawer',
      },
    ],
    address: [
      {
        line1: '123 Magic Way',
        line2: null,
        city: 'Magic',
        state: 'Land',
        zipcode: '123456',
      },
    ],
  },
  {
    id: '456',
    firstname: 'Jon',
    lastname: 'Garret2',
    skills: [],
    address: [],
  },
];

class HomeView extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: () => (
      <Button
        onPress={() =>
          navigation.navigate('FormView', {formType: 'employee', status: 'new'})
        }
        title="Add"
      />
    ),
  });

  onAddEmployeePress = () => {
    const {navigate} = this.props.navigation;
    navigate('FormView', {formType: 'employee'});
  };

  onCellPress = employee => {
    const {navigate} = this.props.navigation;
    navigate('EmployeeDetailView', {employee: employee});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatview}
          data={kData}
          renderItem={({item}) => {
            return (
              <TouchableHighlight
                style={styles.highlightStyle}
                underlayColor="lightgray"
                onPress={() => this.onCellPress(item)}>
                <BasicCell
                  mainText={`${item.firstname} ${item.lastname}`}
                  subText={`ID: ${item.id}`}
                />
              </TouchableHighlight>
            );
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separatorStyle} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatview: {
    alignSelf: 'stretch',
  },
  separatorStyle: {
    height: 1,
    backgroundColor: '#CED0CE',
  },
  highlightStyle: {
    backgroundColor: 'white',
  },
});

export default HomeView;
