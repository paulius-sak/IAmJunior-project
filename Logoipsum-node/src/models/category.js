import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    id: { type: String, required: true },
    name: {type: String, required: true},
    color: {type: String, required: true},
    url: {type: String, required: true},
    user_id: { type: String, required: true },
})

export default mongoose.model("Category", categorySchema);