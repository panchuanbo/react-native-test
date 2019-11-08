import {graphql} from 'react-apollo';

import ListEmployees from './ListEmployees';

const Operations = {
  ListEmployees: graphql(ListEmployees, {
    options: {
      fetchPolicy: 'network-only',
    },
    props: ({data}) => {
      return {loading: data.loading, employeeList: data.employeeList};
    },
  }),
};

export default Operations;
