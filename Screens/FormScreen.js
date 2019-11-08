import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {ListItem, Divider} from 'react-native-elements';
import {Button} from 'react-native-material-ui';

import EmployeeInput from '../Components/EmployeeInput';
import AddressInput from '../Components/AddressInput';
import SkillInput from '../Components/SkillInput';

class FormView extends React.Component {
  static navigationOptions = {
    title: 'Edit Details',
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

  getDeleteButton = () => {
    const formType = this.props.navigation.getParam('formType', null);
    const status = this.props.navigation.getParam('status', 'edit');

    if (formType !== 'employee' && status === 'edit') {
      return <Button raised accent text="Delete" />;
    }
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.getFormType()}
        <Divider style={styles.largeDivider} />
        <Button raised primary text="Save" />
        <Divider style={styles.divider} />
        {this.getDeleteButton()}
      </ScrollView>
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
  divider: {
    backgroundColor: '#fafafa',
    height: 16,
  },
  largeDivider: {
    backgroundColor: '#fafafa',
    height: 32,
  },
  deleteStyle: {
    color: 'red',
  },
});

export default FormView;
