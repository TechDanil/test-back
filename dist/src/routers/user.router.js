"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.post('/create', user_controller_1.createUser);
router.get('/get/:id?', user_controller_1.getUsers);
router.patch('/update/:id', user_controller_1.updateUser);
router.delete('/delete/:id?', user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.router.js.map