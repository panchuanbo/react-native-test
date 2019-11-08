import gql from 'graphql-tag';

const AddSkill = gql`
  mutation AddSkill($id: String, $skill: SkillInput) {
    addEmployeeSkill(id: $id, skill: $skill) {
      id
    }
  }
`;

export default AddSkill;
