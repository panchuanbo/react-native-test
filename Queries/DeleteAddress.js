import gql from 'graphql-tag';

const DeleteAddress = gql`
  mutation DeleteAddress($id: String, $address: AddressInput) {
    deleteEmployeeAddress(id: $id, address: $address) {
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

export default DeleteAddress;
