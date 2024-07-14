// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  }
});

const User = model('User', userSchema);

export default User;
