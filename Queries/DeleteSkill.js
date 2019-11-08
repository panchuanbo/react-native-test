import gql from 'graphql-tag';

const DeleteSkill = gql`
  mutation DeleteSkill($id: String, $skillId: String) {
    deleteEmployeeSkill(id: $id, skillId: $skillId) {
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

export default DeleteSkill;
