import Sequelize, { DataTypes, Model } from 'sequelize';
import util from 'util';

const sequelize = new Sequelize('postgresql:///book-app', {
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true,
    timestamps: false
  }
});

class User extends Model {} 

User.init(
    {
        id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        UserName: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    },
  {
    modelName: 'user', 
    sequelize: sequelize, 
  },
);

class Goal extends Model {}

Goal.init(
    {
        id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        goal: {
        type: DataTypes.TEXT(),
        allowNull: false,
        },
    },
    {
        modelName: 'goal',
        sequelize: sequelize,
    },
);

class Book extends Model {}

Book.init(
    {
        id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
        title: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        completed: {
        type: DataTypes.BOOLEAN,
        },
        note: {
        type: DataTypes.TEXT,
        },
        rating: {
        type: DataTypes.INTEGER,
        },
    },
    {
        modelName: 'book',
        sequelize: sequelize,
    },
)

User.hasMany(Goal, { foreignKey: 'userId' });
Goal.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Book, { foreignKey: 'userId' });
Book.belongsTo(User, { foreignKey: 'userId' });

await sequelize.sync({force: true});
await sequelize.close()

export default sequelize;
export { sequelize, User, Goal, Book };