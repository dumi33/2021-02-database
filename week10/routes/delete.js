import express from "express";
import { selectSql,deleteSql } from "../database/sql";

const router = express.Router();
//update/employee

//기존값 불러오기 
router.get('/',async(req,res) => { // get -> 데이터를 보여준다. //localhost:3000/delete
    const department = await selectSql.getDepartment(); 
    const student = await selectSql.getStudent();
    res.render('delete',{
        title : "삭제 가능",
        //department
        student
    })
});


router.post ('/', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const data = {  // 입력받은 name을 data.Dname에 저장
        //Dnumber : req.body.delBtn, //Dnumber값 불러옴 
        Ssn : req.body.delBtn, // 입력받은 Ssn을 data.ssn에 넣는다. 
    };
    //await deleteSql.deleteDepartment(data); //data를 인수로 보내 update 
    await deleteSql.deleteStudent(data);  // data를 인수로 deleteStudent를 실행 
    res.redirect ('/delete'); //localhost:3000/select  // 반영되었는지 바로 확인 가능
});

module.exports = router;