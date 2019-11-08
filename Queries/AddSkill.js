import gql from 'graphql-tag';

const AddSkill = gql`
  mutation AddSkill($id: String, $skill: SkillInput) {
    addEmployeeSkill(id: $id, skill: $skill) {
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

export default AddSkill;
