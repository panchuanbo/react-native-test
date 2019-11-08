import React from 'react';

import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';

class SkillInput extends React.Component {
  constructor() {
    super();
    this.state = {skill: null};
  }
  onSubmit = () => {
    const {callback} = this.props;
    callback(this.state);
  };

  onChangeSkill = text => {
    this.setState({skill: text.length > 0 ? text : null});
  };

  render() {
    const {data} = this.props;

    return (
      <View>
        <TextField
          label="Skill"
          onEndEditing={this.onSubmit}
          onChangeText={this.onChangeSkill}
          defaultValue={data.name}
        />
      </View>
    );
  }
}

export default SkillInput;
