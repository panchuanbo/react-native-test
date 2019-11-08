import gql from 'graphql-tag';

const DeleteAddress = gql`
  mutation DeleteAddress($id: String, $address: AddressInput) {
    deleteEmployeeAddress(id: $id, address: $address) {
      id
    }
  }
`;

export default DeleteAddress;
