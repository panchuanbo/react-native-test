import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Button,
  Image,
} from 'react-native';

import {withApollo} from 'react-apollo';

import ListEmployees from '../Queries/ListEmployees';
import BasicCell from '../Components/BasicCell.js';

const LogoPath = '../Resources/logo-name.png';

class HomeView extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;

    return {
      headerTitle: (
        <Image style={styles.titleStyle} source={require(LogoPath)} />
      ),
      headerRight: () => (
        <Button
          onPress={() =>
            navigation.navigate('FormView', {
              formType: 'employee',
              status: 'new',
              refresh: params.onAdd,
            })
          }
          title="Add"
        />
      ),
    };
  };

  setupData = async () => {
    const result = await this.props.client.query({
      query: ListEmployees,
    });

    let data = result.data.employeeList.items;
    data.sort((e1, e2) => e1.id > e2.id);
    this.setState({data: data});
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
    navigate('EmployeeDetailView', {
      employee: employee,
      onDelete: this.onDelete,
      onUpdate: this.onUpdate,
    });
  };

  onDelete = id => {
    let newData = this.getData().filter(e => e.id !== id);
    this.setState({data: newData});
  };

  onAdd = employee => {
    if (employee) {
      employee.skills = [];
      employee.address = [];
      let newData = this.getData();
      newData.push(employee);
      newData.sort((e1, e2) => e1.id > e2.id);
      this.setState({data: newData});
    }
  };

  onUpdate = employee => {
    let newData = this.getData()
      .map(e => (e.id === employee.id ? employee : e))
      .sort((e1, e2) => e1.id > e2.id);
    this.setState({data: newData});
  };

  componentDidMount() {
    const {navigation} = this.props;
    this.setupData();
    navigation.setParams({
      onAdd: this.onAdd,
    });
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
  titleStyle: {
    width: 80,
    height: 30,
  },
});

export default withApollo(HomeView);
