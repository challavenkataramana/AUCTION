import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
