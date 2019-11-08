import gql from 'graphql-tag';

const DeleteSkill = gql`
  mutation DeleteSkill($id: String, $skillId: String) {
    deleteEmployeeSkill(id: $id, skillId: $skillId) {
      id
    }
  }
`;

export default DeleteSkill;
