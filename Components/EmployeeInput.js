import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class EmployeeInput extends React.Component {
  constructor() {
    super();

    this.state = {id: null, firstname: null, lastname: null};
  }

  componentDidMount() {
    const {data} = this.props;
    if (data) {
      this.state = data;
    }
    this.onSubmit();
  }

  onSubmit = () => {
    const {callback} = this.props;
    callback(this.state);
  };

  onChangeFirstName = text => {
    this.setState({firstname: text.length > 0 ? text : null});
  };

  onChangeLastName = text => {
    this.setState({lastname: text.length > 0 ? text : null});
  };

  onChangeId = text => {
    this.setState({id: text.length > 0 ? text : null});
  };

  render() {
    const {data, status} = this.props;

    return (
      <View>
        <TextField
          label="Employee ID"
          defaultValue={data.id}
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeId}
          editable={status === 'new'}
        />
        <TextField
          label="First Name"
          defaultValue={data.firstname}
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeFirstName}
        />
        <TextField
          label="Last Name"
          defaultValue={data.lastname}
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeLastName}
        />
      </View>
    );
  }
}

export default EmployeeInput;
