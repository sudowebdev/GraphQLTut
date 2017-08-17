import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('graphqltut', 'graphqladmin', 'graphqlpass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
    }
});

//defining the schema of the table/Model
const AuthorModel = db.define('author', {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
});
  
const PostModel = db.define('post', {
    title: {
      type: Sequelize.STRING,
    },
    text: {
      type: Sequelize.STRING,
    },
    tags: {
      type: Sequelize.STRING,
    }
});



// Relations
AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

casual.seed(123);
db.sync({ force: true }).then(()=> {
  _.times(10, ()=> {
    return AuthorModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
    }).then(author => {
      return author.createPost({
        title: `A post by ${author.firstName} ${author.lastName}`,
        text: casual.sentences(3)
      })
    });
  });
});

const Author = db.models.author;
const Post = db.models.post;


export { Author, Post };