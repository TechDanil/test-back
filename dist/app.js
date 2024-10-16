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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./src/shared/configs/db"));
const user_router_1 = __importDefault(require("./src/routers/user.router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3001;
app.use(body_parser_1.default.json());
app.use('/api', user_router_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
function start() {
    app.listen(port, () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_1.default.sync();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        console.log(`Server is running at http://localhost:${port}`);
    }));
}
start();
module.exports = app;
//# sourceMappingURL=app.js.map