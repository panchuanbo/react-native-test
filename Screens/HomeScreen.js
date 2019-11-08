import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Button,
} from 'react-native';

import {withApollo} from 'react-apollo';

import ListEmployees from '../Queries/ListEmployees';
import BasicCell from '../Components/BasicCell.js';

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

  setupData = async () => {
    const result = await this.props.client.query({
      query: ListEmployees,
    });

    this.setState({data: result.data.employeeList.items});
  };

  getData = () => {
    if (!this.state) {
      return [];
    }
    if (!this.state.data) {
      return [];
    }

    return this.state.data;
  };

  onAddEmployeePress = () => {
    const {navigate} = this.props.navigation;
    navigate('FormView', {formType: 'employee'});
  };

  onCellPress = async employee => {
    const {navigate} = this.props.navigation;
    navigate('EmployeeDetailView', {employee: employee});
  };

  componentDidMount() {
    this.setupData();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatview}
          data={this.getData()}
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

export default withApollo(HomeView);
