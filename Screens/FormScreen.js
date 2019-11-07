import React from 'react';
import {StyleSheet, ScrollView, Button} from 'react-native';

import EmployeeInput from '../Components/EmployeeInput';
import AddressInput from '../Components/AddressInput';
import SkillInput from '../Components/SkillInput';

class FormView extends React.Component {
  static navigationOptions = {
    title: 'Edit Details',
    headerRight: () => <Button onPress={() => {}} title="✓" />,
  };

  formCallback = inputs => {
    console.warn(JSON.stringify(inputs));
  };

  getFormType = () => {
    const formType = this.props.navigation.getParam('formType', null);
    const data = this.props.navigation.getParam('formData', {});

    switch (formType) {
      case 'employee':
        return <EmployeeInput data={data} callback={this.formCallback} />;
      case 'address':
        return <AddressInput data={data} callback={this.formCallback} />;
      case 'skill':
        return <SkillInput data={data} callback={this.formCallback} />;
      default:
        return <EmployeeInput data={data} callback={this.formCallback} />;
    }
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>{this.getFormType()}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fafafa',
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  sectionDivider: {
    backgroundColor: '#f0f0f0',
    height: 16,
  },
});

export default FormView;
