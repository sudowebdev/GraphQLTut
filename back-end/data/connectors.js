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
const Post = db.define('post', {
    id: {
	   type: Sequelize.INTEGER,
 	   primaryKey: true,
       autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    text: Sequelize.STRING
});

const Author = db.define('author', {
    id: {
	   type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: Sequelize.STRING
});



Author.hasMany(Post);


db.sync({force: true})
     .then(() => {
         console.log("Database Synchronised");
         _.times(10, () => {
             return Author.create({
                 firstName: casual.first_name,
                 lastName: casual.last_name
             }).then( (author) => {
                return Post.create({
                    title: casual.title,
                    text: casual.sentences(3)
                });
            });
        });
});

const AuthorModel = db.models.Author;
const PostModel = db.models.Post;

export default {AuthorModel, PostModel};