import gql from 'graphql-tag';

const ListEmployees = gql`
  query ListEmployees {
    employeeList {
      items {
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
  }
`;

export default ListEmployees;
