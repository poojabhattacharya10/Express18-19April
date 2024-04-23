const express = require('express')
const router = express.Router()

const StudentController = require('../controllers/studentController')
// router.use(express.json()) :: used when postman sends data to server
router.use(express.urlencoded({ extended : false })) // :: used when form is sending data to server

router.get('/' , (req,res) => {
    // res.render('home.ejs')
    StudentController.getHome(req,res)

})

router.post('/student/create' , (req,res) =>{
    StudentController.createStudent(req,res)
})


router.get('/students/list' , (req,res) =>{
    StudentController.getStudents(req,res)
})


router.get('/student/edit/show/:_id' , (req,res) =>{
    StudentController.getStudentForEdit(req,res)
})

router.post('/student/update/:_id' , (req,res) =>{
    StudentController.updateStudent(req,res)
})

router.get('/student/delete/:_id' , (req,res) => {
    StudentController.deleteStudent(req,res)
})

module.exports = router