import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class SkillInput extends React.Component {
  constructor() {
    super();
    this.state = {id: null, name: null};
  }
  onSubmit = () => {
    const {callback} = this.props;
    callback(this.state);
  };

  onChangeSkillId = text => {
    this.setState({id: text.length > 0 ? text : null});
  };

  onChangeSkill = text => {
    this.setState({name: text.length > 0 ? text : null});
  };

  render() {
    const {data, status} = this.props;

    return (
      <View>
        <TextField
          label="Skill ID"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeSkillId}
          defaultValue={data.id}
          editable={status === 'new'}
        />
        <TextField
          label="Skill Name"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeSkill}
          defaultValue={data.name}
        />
      </View>
    );
  }
}

export default SkillInput;
