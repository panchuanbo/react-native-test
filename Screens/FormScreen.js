import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {Button} from 'react-native-material-ui';
import {withApollo} from 'react-apollo';

import EmployeeInput from '../Components/EmployeeInput';
import AddressInput from '../Components/AddressInput';
import SkillInput from '../Components/SkillInput';

import ListEmployee from '../Queries/ListEmployees';

import AddEmployee from '../Queries/AddEmployee';
import EditEmployee from '../Queries/EditEmployee';

import AddAddress from '../Queries/AddAddress';

import AddSkill from '../Queries/AddSkill';
import EditSkill from '../Queries/EditSkill';

class FormView extends React.Component {
  static navigationOptions = {
    title: 'Edit Details',
  };

  formCallback = inputs => {
    this.setState({inputs: inputs});
  };

  getFormType = () => {
    const formType = this.props.navigation.getParam('formType', null);
    const status = this.props.navigation.getParam('status', 'edit');
    const data = this.props.navigation.getParam('formData', {});

    switch (formType) {
      case 'employee':
        return (
          <EmployeeInput
            data={data}
            status={status}
            callback={this.formCallback}
          />
        );
      case 'address':
        return (
          <AddressInput
            data={data}
            status={status}
            callback={this.formCallback}
          />
        );
      case 'skill':
        return (
          <SkillInput
            data={data}
            status={status}
            callback={this.formCallback}
          />
        );
      default:
        return (
          <EmployeeInput
            data={data}
            status={status}
            callback={this.formCallback}
          />
        );
    }
  };

  getDeleteButton = () => {
    const formType = this.props.navigation.getParam('formType', null);
    const status = this.props.navigation.getParam('status', 'edit');

    if (formType !== 'employee' && status === 'edit') {
      return <Button raised accent text="Delete" />;
    }
  };

  validateInputs = inputs => {
    if (!inputs) {
      return false;
    }

    let keys = Object.keys(inputs);
    for (let i = 0; i < keys.length; i++) {
      if (!inputs[keys[i]]) {
        return false;
      }
    }

    return true;
  };

  performMutation = async (mutation, variables) => {
    if (this.validateInputs(variables)) {
      try {
        let data = await this.props.client.mutate({
          mutation: mutation,
          variables: variables,
          options: {
            refetchQueries: [{query: ListEmployee}],
          },
        });
        console.warn(data);
        this.props.navigation.goBack();
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert('The Request Failed. Please make sure all inputs are valid.');
        console.warn(e);
        console.warn(variables);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Invalid Inputs. Please check again.');
      console.warn(variables);
    }
  };

  saveData = () => {
    const formType = this.props.navigation.getParam('formType', null);
    const status = this.props.navigation.getParam('status', 'edit');
    const employeeId = this.props.navigation.getParam('employeeId', null);
    const data = this.props.navigation.getParam('formData', {});

    let {inputs} = this.state;
    if (formType === 'employee') {
      if (status === 'new') {
        this.performMutation(AddEmployee, inputs);
      } else if (status === 'edit') {
        this.performMutation(EditEmployee, {
          id: employeeId,
          employee: {
            firstname: inputs.firstname || data.firstname,
            lastname: inputs.lastname || data.lastname,
          },
        });
      }
    } else if (formType === 'address') {
      if (status === 'new') {
        this.performMutation(AddAddress, {
          id: employeeId,
          address: inputs,
        });
      }
    } else if (formType === 'skill') {
      if (status === 'new') {
        this.performMutation(AddSkill, {
          id: employeeId,
          skill: inputs,
        });
      } else if (status === 'edit') {
        this.performMutation(EditSkill, {
          id: employeeId,
          skillId: data.id,
          skill: {
            id: inputs.id || data.id,
            name: inputs.name || data.name,
          },
        });
      }
    }
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.getFormType()}
        <Divider style={styles.largeDivider} />
        <Button raised primary text="Save" onPress={this.saveData} />
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

export default withApollo(FormView);
