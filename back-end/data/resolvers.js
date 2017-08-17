// consists of all the resolvers

/* Resolvers are nothing but methods which define how the left-hand side will be resolved to the 
right-hand side. */
 
// Resolvers are mainly defined for Query's field, but you can define it for any type's field.

const resolvers = {
    Query: {
        author(_, args) {
            return {id: 1, firstName: 'Hey', lastName: 'You'};
        },
    },
    Author: {
        posts(author) {
            return [{id: 111, title: 'The New Title', text: 'Good'}];
        }
    },
    Post: {
        author(post) {
            return {id: 1, firstName: 'Hey', lastName: 'You'};
        }
    }
}


export default resolvers;