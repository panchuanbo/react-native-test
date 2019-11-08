import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
import {Button} from 'react-native-material-ui';
import {withApollo} from 'react-apollo';

import SectionHeader from '../Components/SectionHeader.js';

import {performMutation} from '../Queries/Operations';
import DeleteEmployee from '../Queries/DeleteEmployee';

class EmployeeDetailView extends React.Component {
  static navigationOptions = {
    title: 'Employee Details',
  };

  formatAddress = addr => {
    const {line1, line2, city, state, zipcode} = addr;
    let line3 = city + ', ' + state + ' ' + zipcode;
    let addrList = [line1, line2, line3];
    return addrList.filter(itm => itm && itm.length > 0).join('\n');
  };

  onEntryPress = (formType, formData) => {
    const employee = this.props.navigation.getParam('employee', null);
    const {navigate} = this.props.navigation;
    navigate('FormView', {
      formType: formType,
      formData: formData,
      employeeId: employee.id,
    });
  };

  onAddPress = formType => {
    const employee = this.props.navigation.getParam('employee', null);
    const {navigate} = this.props.navigation;
    navigate('FormView', {
      formType: formType,
      status: 'new',
      employeeId: employee.id,
    });
  };

  deleteEmployee = () => {
    const employee = this.props.navigation.getParam('employee', null);
    performMutation(this, DeleteEmployee, {id: employee.id});
  };

  render() {
    const employee = this.props.navigation.getParam('employee', null);

    return employee ? (
      <ScrollView style={styles.scrollView}>
        <ListItem
          key="employee"
          title={`${employee.firstname} ${employee.lastname}`}
          onPress={() => this.onEntryPress('employee', employee)}
        />
        <Divider style={styles.sectionDivider} />
        <SectionHeader text="Skills" />
        {employee.skills.map((item, i) => (
          <ListItem
            key={`skills-${i}`}
            title={item.name}
            onPress={() => this.onEntryPress('skill', item)}
            bottomDivider
          />
        ))}
        <ListItem
          key="skill-add"
          title="+ Add Skill"
          onPress={() => this.onAddPress('skill')}
        />
        <Divider style={styles.sectionDivider} />
        <SectionHeader text="Address" />
        {employee.address.map((item, i) => (
          <ListItem
            key={`address-${i}`}
            title={this.formatAddress(item)}
            onPress={() => this.onEntryPress('address', item)}
            bottomDivider
          />
        ))}
        <ListItem
          key="address-add"
          title="+ Add Address"
          onPress={() => this.onAddPress('address')}
        />
        <Divider style={styles.largeDivider} />
        <Button
          style={styles.deleteStyle}
          onPress={this.deleteEmployee}
          raised
          accent
          text="Delete Employee"
        />
      </ScrollView>
    ) : (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 16,
    backgroundColor: '#fafafa',
  },
  sectionDivider: {
    backgroundColor: '#fafafa',
    height: 16,
  },
  largeDivider: {
    backgroundColor: '#fafafa',
    height: 32,
  },
  deleteStyle: {
    left: 16,
    paddingRight: 16,
  },
});

export default withApollo(EmployeeDetailView);
