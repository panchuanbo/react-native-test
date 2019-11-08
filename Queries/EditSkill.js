import gql from 'graphql-tag';

const EditSkill = gql`
  mutation EditSkill($id: String, $skillId: String, $skill: SkillInput) {
    updateEmployeeSkill(id: $id, skillId: $skillId, skill: $skill) {
      id
    }
  }
`;

export default EditSkill;
