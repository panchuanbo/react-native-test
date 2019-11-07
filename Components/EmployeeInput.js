import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class EmployeeInput extends React.Component {
  onSubmit = () => {
    const {callback} = this.props;
    callback(this.state);
  };

  onChangeFirstName = text => {
    this.setState({firstname: text});
  };

  onChangeLastName = text => {
    this.setState({lastname: text});
  };

  onChangeId = text => {
    this.setState({id: text});
  };

  render() {
    const {data} = this.props;

    return (
      <View>
        <TextField
          label="Employee ID"
          defaultValue={data.id}
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeId}
        />
        <TextField
          label="First Name"
          defaultValue={data.firstname}
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeFirstName}
        />
        <TextField
          label="Last Name"
          defaultValue={data.lastname}
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeLastName}
        />
      </View>
    );
  }
}

export default EmployeeInput;
