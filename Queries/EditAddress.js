import gql from 'graphql-tag';

const EditAddress = gql`
  mutation EditAddress(
    $id: String
    $oldAddr: AddressInput
    $newAddr: AddressInput
  ) {
    updateEmployeeAddress(id: $id, oldAddr: $oldAddr, newAddr: $newAddr) {
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

export default EditAddress;
