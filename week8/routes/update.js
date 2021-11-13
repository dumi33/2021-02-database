import express from "express";
import { selectSql,updateSql } from "../database/sql";

const router = express.Router();
//update/employee
router.get('/employee',async(req,res)=>{// get -> 데이터를 보여준다. 
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title : "직원 테이블 갱신",
        emp_res
    });
});

router.get('/department',async(req,res) => { // get -> 데이터를 보여준다. 
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment',{
        title : "부서 테이블 갱신",
        dept_res
    })
});
router.post ('/employee', async (req,res)=> { // post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.salary);

    const data = {  // 입력받은 salary을 data에 저장
        Salary : vars.salary
    }

    await updateSql.updateEmployee(data);
    res.redirect ('/select');
});

router.post ('/department', async (req,res)=> {// post -> data를 받아 기능을 수행 
    const vars = req.body;
    console.log(vars.dname);
    
    const data = {  // 입력받은 name을 data에 저장
        Dname : vars.dname
    }
    await updateSql.updateDepartment(data); //data를 인수로 보내 update 
    res.redirect ('/select'); //localhost:3000/select  // 반영되었는지 바로 확인 가능
});

module.exports = router;