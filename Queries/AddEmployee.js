import gql from 'graphql-tag';

const AddEmployee = gql`
  mutation AddEmployee($id: String, $firstname: String, $lastname: String) {
    addEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
      id
    }
  }
`;

export default AddEmployee;
