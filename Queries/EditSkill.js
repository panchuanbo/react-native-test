import gql from 'graphql-tag';

const EditSkill = gql`
  mutation EditSkill($id: String, $skillId: String, $skill: SkillInput) {
    updateEmployeeSkill(id: $id, skillId: $skillId, skill: $skill) {
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

export default EditSkill;
