
import mongoose from '../../../common/database/mongoose.db.js'

const { Schema, model } = mongoose

const StaffSchema = new Schema({
  id_card_number: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },last_name: {
    type: String,
    required: true
  },address: {
    type: String,
  },mobile: {
    type: String,
  },weight: {
    type: mongoose.Decimal128,
    required: true
  },height: {
    type: mongoose.Decimal128,
    required: true
  },
}, { timestamps: true })

const StaffModel = model('staffs', StaffSchema)

export default StaffModel