import User from '../models/user.model';
import {IUser} from "../shared/interfaces/user.interface";

class UserService {
    async createUser(data: Omit<IUser, 'id'>) {
        try {
            const user = await User.create(data);
            return { success: true, result: { id: user.id } };
        } catch (error: any) {
            return { success: false, result: { error: error.message } };
        }
    }

    async getUsers(id?: number, role?: string) {
        try {
            let users;
            if (id) {
                users = await User.findAll({ where: { id } });
                if (!users.length) throw new Error('Пользователь не найден');
            } else {
                users = role ? await User.findAll({ where: { role } }) : await User.findAll();
            }
            return { success: true, result: { users } };
        } catch (error: any) {
            return { success: false, result: { error: error.message } };
        }
    }

    async updateUser(id: number, data: Partial<Omit<IUser, 'id'>>) {
        try {
            const updatedUser = await User.update(data, { where: { id }, returning: true });
            if (!updatedUser[0]) throw new Error('Пользователь не найден');
            return { success: true, result: updatedUser[1][0] };
        } catch (error: any) {
            return { success: false, result: { error: error.message } };
        }
    }

    async deleteUser(id?: number) {
        try {
            if (id) {
                const user = await User.findOne({ where: { id } });
                if (!user) throw new Error('Пользователь не найден');
                await user.destroy();
                return { success: true, result: user };
            } else {
                await User.destroy({ where: {}, truncate: true });
                return { success: true };
            }
        } catch (error: any) {
            return { success: false, result: { error: error.message } };
        }
    }
}

export default new UserService();
