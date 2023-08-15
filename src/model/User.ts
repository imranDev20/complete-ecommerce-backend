import { Schema, model, Types } from "mongoose";
import validator from "validator";
import cardValidator from "card-validator";
import { UserDocument } from "../@types/user.js";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => validator.default.isEmail(value),
        message: "Invalid email address",
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) =>
          validator.default.isMobilePhone(value, "any"),
        message: "Invalid phone number",
      },
    },
    firstName: {
      type: String,
      default: "John",
    },
    lastName: {
      type: String,
      default: "Doe",
    },

    birthDate: {
      type: String,
      validate: {
        validator: (value: string) => validator.default.isISO8601(value), // Validate ISO 8601 date format
        message: "Invalid birthdate format (ISO 8601)",
      },
    },

    paymentMethods: [
      {
        type: {
          type: String,
          required: true,
        },
        cardNumber: {
          type: String,
          required: true,
          validate: {
            validator: (value: string) => cardValidator.number(value).isValid,
            message: "Invalid credit card number",
          },
        },
        expirationDate: {
          type: String,
          required: true,
        },
        cardholderName: {
          type: String,
          required: true,
        },
      },
    ],
    wishlist: [
      {
        type: Types.ObjectId,
        ref: "Product",
        default: [],
      },
    ],
    addresses: [
      {
        type: {
          type: String,
          enum: ["billing", "shipping"],
          required: true,
        },
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        postalCode: {
          type: String,
          required: true,
          validate: {
            validator: (value: string) =>
              validator.default.isPostalCode(value, "any"), // Validate postal code
            message: "Invalid postal code",
          },
        },
      },
    ],
    supportTicket: [
      {
        type: Types.ObjectId,
        ref: "SupportTicket",
        default: [],
      },
    ],

    orders: [
      {
        type: Types.ObjectId,
        ref: "Order",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const User = model<UserDocument>("User", userSchema);

export default User;
