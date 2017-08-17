// For mocking data when we don't have any data in the database

const mocks = {
  // If anyone asks for something of type String then run this function
  String: () => 'It works!',
};

export default mocks;
