import express  from "express";
import {selectSql} from "../database/sql";
//모듈 사용 

const router = express.Router();

router.get('/',async function(req,res) { //'/'는 '/select'를 의미 
    const department = await selectSql.getDepartment();

    res.render('select',{ //select.hbs를 호출
        title : 'IT 공대',
        department
        
    });
});

module.exports = router;