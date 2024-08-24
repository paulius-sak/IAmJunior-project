"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const category_1 = __importDefault(require("./routes/category"));
const business_1 = __importDefault(require("./routes/business"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default
    .connect(process.env.MONGO_CONNECTION)
    .then(() => console.log('MongoDb Connected!'))
    .catch((err) => {
    console.log('err: ', err);
});
app.use(category_1.default);
app.use(business_1.default);
app.use(user_1.default);
app.get('/', (req, res) => {
    return res.status(200).json({ status: 'Hello world' });
});
app.use((req, res) => {
    return res.status(404).json({ status: "Endpoint doesn't exist" });
});
app.listen(process.env.PORT, () => {
    console.log(`app started - port ${process.env.PORT}`);
});
