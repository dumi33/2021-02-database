import express  from "express";
import {insertSql,selectSql} from "../database/sql";
//삽입관련 모듈 (insertSql)

const router = express.Router();

router.get('/',(req,res)=> {
    res.render('home'); //home.hbs를 웹브라우져에 출력
});

router.post('/',(req,res)=>{
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length; //넘어오는 data의 개수로 employee, department구분

    if(var_lenth > 4){ // 4보다 크다면 employee 
        const data ={ // data 객체 
            Fname : vars.fname,
            Minit : vars.minit,
            Lname : vars.lname,
            Ssn : vars.ssn,
            Bdate : vars.bdate,
            Address : vars.address,
            Sex : vars.sex,
            Salary : vars.salary,
            Super_ssn : vars.super_ssn,
            Dno : vars.dno
        };
        insertSql.setEmployee(data); // data를 employee로 설정 
    }
    else{
        const data = { // data 객체 
            Dname : vars.dname,
            Dnumber : vars.dnumber,
            Mgr_ssn : vars.mgr_ssn,
            Mgr_start_date : vars.mgr_start_date
        };
        insertSql.setDepartment(data);
    }
    res.redirect('/'); //입력후 새로고침 (같은 주소로 )
})
module.exports = router;