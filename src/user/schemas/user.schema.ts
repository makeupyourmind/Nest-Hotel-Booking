import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  password: {
      type: String,
      required: true
  },
  email: {
      type: String,
      unique: true,
      required: true
  },
  role:{
		type: String,
		required: true,
		default: 'user'
	},

});