// For mocking data when we don't have any data in the database
import casual from 'casual';

const mocks = {
  // If anyone asks for something of type String then run this function
  String: () => 'It works!',
  Query: () => ({
    author: (root, args) => ({
      firstName: args.firstName, lastName: args.lastName
    })
  }),
  Author: () => ({
    firstName: casual.first_name, lastName: casual.last_name
  })
};

export default mocks;
