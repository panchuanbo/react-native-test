import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class SkillInput extends React.Component {
  onSubmit = () => {
    const {callback} = this.props;
    callback(this.state);
  };

  onChangeSkill = text => {
    this.setState({skill: text});
  };

  render() {
    const {data} = this.props;

    return (
      <View>
        <TextField
          label="Skill"
          onSubmitEditing={this.onSubmit}
          onChangeText={this.onChangeSkill}
          defaultValue={data.name}
        />
      </View>
    );
  }
}

export default SkillInput;
