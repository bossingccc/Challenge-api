import StaffService from '../services/staff.service.js'

const StaffController = {
  getStaff: async (req, res) => {
    const staffs = await StaffService.getAll()
    if(staffs === undefined){
      res.status(422).json({
        status: "ERROR",
        code: 422,
        error: [{
          cause: "string",
          code: "string",
          subCode: "string"
        }]
      })
    }else{
  res.status(201).json({
  code: 201,
  status: "OK" ,
  data: saftfs
   })}
  },
  getStaffById: async (req, res) => {
    const { id } = req.params
    const staff = await StaffService.getOne(id)
    if(id===undefined){
        res.status(204).json({
            code: 204,
            status: "" ,
            data: ""
          })  
    }else{
    res.status(200).json({
        code: 200,
        status: "OK" ,
        data: staff
      })
    }
  },
  createStaff: async (req, res) => {
    const { id_card_number, first_name, last_name, address, mobile, weight, height  } = req.body
    console.log("createStaff ", req.body);
    if (id_card_number === '') {
      res.status(422).json({
        status: "ERROR",
        code: 422,
        error: [{
          cause: "string",
          code: "string",
          subCode: "string"
        }]
      })
    } else {
      const created = await StaffService.create({ id_card_number, first_name, last_name, address, mobile, weight, height })
      res.status(201).json({
        code: 201,
        status: "Create data success" ,
        data: created
      })
      }
    },

    updateStaff: async (req, res) => {
      const { id } = req.params
      const { id_card_number, first_name, last_name, address, mobile, weight, height } = req.body
      const updated = await StaffService.updateOne(id, { id_card_number, first_name, last_name, address, mobile, weight, height })
      if (!id) {
        res.status(422).json({
          status: "ERROR",
          code: 422,
          error: [{
            cause: "string",
            code: "string",
            subCode: "string"
          }]
        })
      } else {
        res.status(201).json({
          code: 201,
          status: "OK",
          data: updated
        })
      }

    },
      deleteStaff: async (req, res) => {
        const { id } = req.params
        const staff = await StaffService.deleteOne(id)
        if (req.params === undefined) {
          res.status422json({
            status: "ERROR",
            code: 422,
            data: ""
          })
        } else {
          res.status(200).json({
            code: 200,
            status: "Delete data success",
            data: {}
          })
        }
      }
  }

export default StaffController