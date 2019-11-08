import gql from 'graphql-tag';

const EditEmployee = gql`
  mutation EditEmployee($id: String, $employee: EmployeeInput) {
    updateEmployee(id: $id, employee: $employee) {
      id
      firstname
      lastname
      address {
        line1
        line2
        city
        state
        zipcode
      }
      skills {
        id
        name
      }
    }
  }
`;

export default EditEmployee;
