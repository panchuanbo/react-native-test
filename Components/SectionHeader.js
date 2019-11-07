import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

class SectionHeader extends React.Component {
  render() {
    const {text} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.cell}>
          <Text style={styles.text}>{`${text}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SectionHeader;
