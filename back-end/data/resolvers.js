// consists of all the resolvers

/* Resolvers are nothing but methods which define how the left-hand side will be resolved to the 
right-hand side. */
 
// Resolvers are mainly defined for Query's field, but you can define it for any type's field.

import { Author, Post } from './connectors';

const resolvers = {
    Query: {
        author(_, args) {
            return Author.find({ where: args });
        },
    },
    Author: {
        posts(author) {
            return author.getPosts();
        }
    },
    Post: {
        author(post) {
            return post.getAuthor();
        }
    }
}


export default resolvers;