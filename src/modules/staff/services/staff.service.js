import StaffModel from '../models/staff.schema.js'

const StaffService = {
  create: (payload) => {
    return new StaffModel(payload).save()
  },
  getAll: (query = {}) => {
    return StaffModel.find(query)
  },
  getOne: (id) => {
    return StaffModel.findOne({ _id: id })
  },
  updateOne: (id, payload) => {
    return StaffModel.findOneAndUpdate({ _id: id }, { $set: payload })
  },
  deleteOne: (id, payload) => {
    return StaffModel.findOneAndDelete({ _id: id }, { $set: payload })
  }
}

export default StaffService