import React from 'react';
import {StyleSheet, View, TouchableHighlight, FlatList} from 'react-native';

import BasicCell from '../Components/BasicCell.js';

const kData = [
  {
    id: '123',
    firstname: 'Jon',
    lastname: 'Garret',
    skills: [],
    address: [],
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
  static navigationOptions = {
    title: 'Home',
  };

  onPress = () => {
    const {navigate} = this.props.navigation;
    navigate('EmployeeDetailView');
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
                onPress={this.onPress}>
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
