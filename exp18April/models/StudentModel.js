const mongoose =  require('mongoose')
const Schema = mongoose.Schema  // Schema :: structure of table

const StudentSchema = new Schema({
    rollNo : { type : String , required : true },
    name : { type : String , required : true },
    fatherName : { type : String , default : '' },
    address : { type : String , default : '' },
    mobileNo : { type : String , default : '' }
})

module.exports = mongoose.model('StudentModel' , StudentSchema)