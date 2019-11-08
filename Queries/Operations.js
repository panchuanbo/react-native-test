import ListEmployees from './ListEmployees';

export const validateInputs = inputs => {
  if (!inputs || inputs === {}) {
    return false;
  }

  let keys = Object.keys(inputs);
  for (let i = 0; i < keys.length; i++) {
    let obj = inputs[keys[i]];
    if (!obj) {
      return false;
    }
    if (typeof obj === 'object' && Object.keys(obj).length === 0) {
      return false;
    }
  }

  return true;
};

export const performMutation = async (obj, mutation, variables) => {
  if (validateInputs(variables)) {
    try {
      let data = await obj.props.client.mutate({
        mutation: mutation,
        variables: variables,
        options: {
          refetchQueries: [{query: ListEmployees}],
        },
      });
      obj.props.navigation.goBack();
      return Object.values(data.data)[0];
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('The Request Failed. Please make sure all inputs are valid.');
      return false;
    }
  } else {
    // eslint-disable-next-line no-alert
    alert('Invalid Inputs. Please check again.');
    return false;
  }
};
