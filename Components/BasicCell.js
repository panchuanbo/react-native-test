import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

class BasicCell extends React.Component {
  render() {
    const {mainText, subText} = this.props;

    return (
      <View>
        <View style={styles.cell}>
          <Text style={styles.mainText}>{`${mainText}`}</Text>
          {subText ? <Text style={styles.subText}>{`${subText}`}</Text> : <></>}
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
  mainText: {
    fontSize: 18,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default BasicCell;
