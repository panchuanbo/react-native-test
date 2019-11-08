import gql from 'graphql-tag';

const DeleteEmployee = gql`
  mutation DeleteEmployee($id: String) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;

export default DeleteEmployee;
