import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
  type User {
    id: ID!
    email: String
    isMember: Boolean
  }
  type Discount {
    percent: Number,
    type: String,
  }
  type Seat {
    type: String,
    price: Number,
    id: ID!
  }
  type Tshirt {
    color: String,
    price: Number,
    id: ID!
  }
  type Variant {
    type: 'Tshirt' | 'Seat'
    id: ID,
  }
  type Ticket {
    id: ID!
    userID: ID!
    variants: []Variant
  }
  #handle user commands
  type Query {
    getAllTypeTshirt: []Tshirt
    getAllTypeSeat: []Seat
  }

  type Mutation {
    addToCart(tshirtId: Int, seatId: Int, email: String): Ticket
  }
`;
export default Schema;
