import gql from 'graphql-tag';

const EditAddress = gql`
  mutation EditAddress(
    $id: String
    $oldAddr: AddressInput
    $newAddr: AddressInput
  ) {
    updateEmployeeAddress(id: $id, oldAddr: $oldAddr, newAddr: $newAddr) {
      id
    }
  }
`;

export default EditAddress;
