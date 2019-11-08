import gql from 'graphql-tag';

const GetEmployee = gql`
  query GetEmployee($id: String) {
    employee(id: $id) {
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

export default GetEmployee;
