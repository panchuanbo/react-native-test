import gql from 'graphql-tag';

const EditEmployee = gql`
  mutation EditEmployee($id: String, $employee: EmployeeInput) {
    updateEmployee(id: $id, employee: $employee) {
      id
    }
  }
`;

export default EditEmployee;
