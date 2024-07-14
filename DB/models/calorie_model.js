import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const { Schema, model } = mongoose;
const AutoIncrement = AutoIncrementFactory(mongoose);

const calorieSchema = new Schema({
  // No need to define the id field here, it will be added by mongoose-sequence
  user_id: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
  },
  month: {
    type: Number,
    min: 1,
    max: 12
  },
  day: {
    type: Number,
    min: 1,
    max: 31
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner', 'other'],
    required: true
  }
});

// Apply the autoIncrement plugin to the schema and specify the field name
calorieSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Calorie = model('Calorie', calorieSchema);

export default Calorie;
