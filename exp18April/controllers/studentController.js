const Student = require('../models/StudentModel')


const getHome = (req,res)=> {
    try {
        res.render('home.ejs')
    } catch (error) {
        console.log(error);
    }
}

const createStudent = async (req, res)=>{
    try {
        let student = new Student(req.body)
        await student.save()
        res.end('<h1> Data saved successfully ... </h1>')
    } catch (err) {
        console.log(err);
    }
}   

const getStudents = async (req, res)=>{
    try {
        let students = await Student.find({})
        res.render('studentdetail' , {
            students : students
        })
    } catch (error) {
        console.log(error);
    }
}


const getStudentForEdit = async (req,res) => {
    try {
        let id = req.params._id
        console.log(id , 'id');
        // res.end('<h1> work in progress </h1>')
        let student = await Student.findOne({ _id : id });
        console.log(student , 'student');
        res.render('studentDetailForEdit' , {
            student: student
        })
    } catch (error) {
        console.log(error);
    }
}

const updateStudent = async(req,res)=>{
    try {
        let id = req.params._id;
        let student = await Student.findOne({ _id : id})
        student.rollNo = req.body.rollNo
        student.name = req.body.name
        student.fatherName = req.body.fatherName
        student.address = req.body.address
        student.mobileNo = req.body.mobileNo
        student = await student.save()
        let students = await Student.find({})
        res.render('studentdetail' , {
            students : students
        })
    } catch (error) {
        console.log(error);
    }
}


const deleteStudent = async(req,res) => {
    try {
        let id= req.params._id;
        await Student.deleteOne({ _id : id })
        let students = await Student.find({})
        res.render('studentdetail' , {
            students : students
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHome,
    createStudent,
    getStudents,
    getStudentForEdit,
    updateStudent,
    deleteStudent
}