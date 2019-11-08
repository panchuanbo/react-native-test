import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';
import {Button} from 'react-native-material-ui';
import {withApollo} from 'react-apollo';

import EmployeeInput from '../Components/EmployeeInput';
import AddressInput from '../Components/AddressInput';
import SkillInput from '../Components/SkillInput';

import {performMutation} from '../Queries/Operations';

import AddEmployee from '../Queries/AddEmployee';
import EditEmployee from '../Queries/EditEmployee';
import DeleteEmployee from '../Queries/DeleteEmployee';

import AddAddress from '../Queries/AddAddress';
import EditAddress from '../Queries/EditAddress';
import DeleteAddress from '../Queries/DeleteAddress';

import AddSkill from '../Queries/AddSkill';
import EditSkill from '../Queries/EditSkill';
import DeleteSkill from '../Queries/DeleteSkill';

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
      return <Button raised accent text="Delete" onPress={this.deleteData} />;
    }
  };

  saveData = async () => {
    const formType = this.props.navigation.getParam('formType', null);
    const status = this.props.navigation.getParam('status', 'edit');
    const employeeId = this.props.navigation.getParam('employeeId', null);
    const refresh = this.props.navigation.getParam('refresh', () => {});
    let data = this.props.navigation.getParam('formData', {});
    delete data.__typename;

    let {inputs} = this.state;
    if (formType === 'employee') {
      if (status === 'new') {
        data = (await performMutation(this, AddEmployee, inputs)) || data;
      } else if (status === 'edit') {
        data =
          (await performMutation(this, EditEmployee, {
            id: employeeId,
            employee: {
              firstname: inputs.firstname || data.firstname,
              lastname: inputs.lastname || data.lastname,
            },
          })) || data;
      }
    } else if (formType === 'address') {
      if (status === 'new') {
        data =
          (await performMutation(this, AddAddress, {
            id: employeeId,
            address: inputs,
          })) || data;
      } else if (status === 'edit') {
        let newAddr = inputs;
        newAddr.line1 = newAddr.line1 || data.line1;
        newAddr.city = newAddr.city || data.city;
        newAddr.state = newAddr.state || data.state;
        newAddr.zipcode = newAddr.zipcode || data.zipcode;

        data =
          (await performMutation(this, EditAddress, {
            id: employeeId,
            oldAddr: data,
            newAddr: newAddr,
          })) || data;
      }
    } else if (formType === 'skill') {
      if (status === 'new') {
        data =
          (await performMutation(this, AddSkill, {
            id: employeeId,
            skill: inputs,
          })) || data;
      } else if (status === 'edit') {
        data = await performMutation(this, EditSkill, {
          id: employeeId,
          skillId: data.id,
          skill:
            {
              id: inputs.id || data.id,
              name: inputs.name || data.name,
            } || data,
        });
      }
    }

    refresh(data);
  };

  deleteData = async () => {
    const formType = this.props.navigation.getParam('formType', null);
    const employeeId = this.props.navigation.getParam('employeeId', null);
    const refresh = this.props.navigation.getParam('refresh', () => {});
    let data = this.props.navigation.getParam('formData', {});
    delete data.__typename;

    if (formType === 'employee') {
      data =
        (await performMutation(this, DeleteEmployee, {id: employeeId})) || data;
    } else if (formType === 'skill') {
      data =
        (await performMutation(this, DeleteSkill, {
          id: employeeId,
          skillId: data.id,
        })) || data;
    } else if (formType === 'address') {
      data =
        (await performMutation(this, DeleteAddress, {
          id: employeeId,
          address: data,
        })) || data;
    }

    refresh();
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
