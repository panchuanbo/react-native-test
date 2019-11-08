import gql from 'graphql-tag';

const AddAddress = gql`
  mutation AddAddress($id: String, $address: AddressInput) {
    addEmployeeAddress(id: $id, address: $address) {
      id
    }
  }
`;

export default AddAddress;
