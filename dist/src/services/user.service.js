"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_model_1.default.create(data);
                return { success: true, result: { id: user.id } };
            }
            catch (error) {
                return { success: false, result: { error: error.message } };
            }
        });
    }
    getUsers(id, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users;
                if (id) {
                    users = yield user_model_1.default.findAll({ where: { id } });
                    if (!users.length)
                        throw new Error('Пользователь не найден');
                }
                else {
                    users = role ? yield user_model_1.default.findAll({ where: { role } }) : yield user_model_1.default.findAll();
                }
                return { success: true, result: { users } };
            }
            catch (error) {
                return { success: false, result: { error: error.message } };
            }
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield user_model_1.default.update(data, { where: { id }, returning: true });
                if (!updatedUser[0])
                    throw new Error('Пользователь не найден');
                return { success: true, result: updatedUser[1][0] };
            }
            catch (error) {
                return { success: false, result: { error: error.message } };
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (id) {
                    const user = yield user_model_1.default.findOne({ where: { id } });
                    if (!user)
                        throw new Error('Пользователь не найден');
                    yield user.destroy();
                    return { success: true, result: user };
                }
                else {
                    yield user_model_1.default.destroy({ where: {}, truncate: true });
                    return { success: true };
                }
            }
            catch (error) {
                return { success: false, result: { error: error.message } };
            }
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map