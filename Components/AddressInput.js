import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class AddressInput extends React.Component {
  constructor() {
    super();
    this.state = {
      line1: null,
      city: null,
      state: null,
      zipcode: null,
    };
  }

  onSubmit = () => {
    const {callback} = this.props;
    if (this.state.line2 === null) {
      delete this.state.line2;
    }

    callback(this.state);
  };

  onChangeLine1 = text => {
    this.setState({line1: text.length > 0 ? text : null});
  };

  onChangeLine2 = text => {
    this.setState({line2: text.length > 0 ? text : null});
  };

  onChangeCity = text => {
    this.setState({city: text.length > 0 ? text : null});
  };

  onChangeState = text => {
    this.setState({state: text.length > 0 ? text : null});
  };

  onChangeZipCode = text => {
    this.setState({zipcode: text.length > 0 ? text : null});
  };

  render() {
    const {data} = this.props;

    return (
      <View>
        <TextField
          label="Line 1"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeLine1}
          defaultValue={data.line1}
        />
        <TextField
          label="Line 2"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeLine2}
          defaultValue={data.line2}
        />
        <TextField
          label="City"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeCity}
          defaultValue={data.city}
        />
        <TextField
          label="State"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeState}
          defaultValue={data.state}
        />
        <TextField
          label="Zip Code"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeZipCode}
          defaultValue={data.zipcode}
        />
      </View>
    );
  }
}

export default AddressInput;
