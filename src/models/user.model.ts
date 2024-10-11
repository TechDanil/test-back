import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../shared/configs/db';
import {EFFICIENCY, IUser, ROLE} from "../shared/interfaces/user.interface";

export interface UserCreationAttributes extends Optional<IUser, 'id'> {}

class User extends Model<IUser, UserCreationAttributes> implements IUser {
    public id!: number;
    public full_name!: string;
    public role!: ROLE;
    public efficiency!: EFFICIENCY;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        efficiency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
    }
);

export default User;
