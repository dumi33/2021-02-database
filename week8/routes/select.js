import express  from "express";
import {selectSql} from "../database/sql";
//모듈 사용 

const router = express.Router();


router.get('/',async function(req,res) { //'/'는 '/select'를 의미
    const employee = await selectSql.getEmployee(); 
    const department = await selectSql.getDepartment();

    res.render('select',{ //select.hbs를 호출
        title : '직원 테이블',
        title2 : '부서 테이블',
        employee,
        department
    });
});

module.exports = router;