import {Sequelize, Model, DataTypes, Op} from "sequelize";
import sql from "mssql"

let things = {}
export const sequelize = new Sequelize("lab5","neevkps", "2611",{
    dialect: "mssql",
    host: "localhost",
    port: "1433",
    define: {
        timestamps: false
    }
})
export class User extends Model{}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "User"
});
export class Thing extends Model{}
Thing.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    place: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keyWords: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
        references: {
    model: 'Users',
        key: 'id'
}
    }
}, {
        sequelize,
        modelName: "Thing"
});

User.hasMany(Thing, { foreignKey: 'user_id' });
Thing.belongsTo(User, { foreignKey: 'user_id' });

sequelize.sync().then(result=>{
    console.log(result);
}).catch(err=> console.log(err));


export default class Database {

    static async addThingToDB(data, transaction){
        return Thing.create(data, {transaction});
    }

    static async addUserToDB(data, transaction){
        return User.create(data, {transaction})
    }

    static async deleteThingFromDB(id, transaction){
        return Thing.destroy({where: {id}, transaction})
    }
    static async findByKeyword(keyWord) {
        return Thing.findAll({
            where: {
                keyWords: {
                    [Op.like]: `%${keyWord}%`
                }
            }
        });
    }
    static async updateThing(data, thingId, transaction){
        return Thing.update(data, {
            where: { id:  thingId }, // обов'язкова умова
            transaction
        });
    }

}


