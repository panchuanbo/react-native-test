import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class EmployeeInput extends React.Component {
  onSubmit = () => {
    const {callback} = this.props;
    callback(this.state);
  };

  onChangeLine1 = text => {
    this.setState({line1: text});
  };

  onChangeLine2 = text => {
    this.setState({line2: text});
  };

  onChangeCity = text => {
    this.setState({city: text});
  };

  onChangeState = text => {
    this.setState({state: text});
  };

  onChangeZipCode = text => {
    this.setState({zipcode: text});
  };

  render() {
    const {data} = this.props;

    return (
      <View>
        <TextField
          label="Line 1"
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeLine1}
          defaultValue={data.line1}
        />
        <TextField
          label="Line 2"
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeLine2}
          defaultValue={data.line2}
        />
        <TextField
          label="City"
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeCity}
          defaultValue={data.city}
        />
        <TextField
          label="State"
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeState}
          defaultValue={data.state}
        />
        <TextField
          label="Zip Code"
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeZipCode}
          defaultValue={data.zipcode}
        />
      </View>
    );
  }
}

export default EmployeeInput;
