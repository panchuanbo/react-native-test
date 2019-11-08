import gql from 'graphql-tag';

const AddAddress = gql`
  mutation AddAddress($id: String, $address: AddressInput) {
    addEmployeeAddress(id: $id, address: $address) {
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

export default AddAddress;
