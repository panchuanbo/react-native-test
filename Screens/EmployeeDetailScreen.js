import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';

import SectionHeader from '../Components/SectionHeader.js';

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

  render() {
    const employee = this.props.navigation.getParam('employee', null);

    return employee ? (
      <ScrollView style={styles.scrollView}>
        <ListItem
          key="employee"
          title={`${employee.firstname} ${employee.lastname}`}
        />
        <Divider style={styles.sectionDivider} />
        <SectionHeader text="Skills" />
        {employee.skills.map((item, i) => (
          <ListItem key={`skills-${i}`} title={item.name} bottomDivider />
        ))}
        <Divider style={styles.sectionDivider} />
        <SectionHeader text="Address" />
        {employee.address.map((item, i) => (
          <ListItem
            key={`address-${i}`}
            title={this.formatAddress(item)}
            bottomDivider
          />
        ))}
      </ScrollView>
    ) : (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 16,
    backgroundColor: '#f0f0f0',
  },
  sectionDivider: {
    backgroundColor: '#f0f0f0',
    height: 16,
  },
});

export default EmployeeDetailView;
