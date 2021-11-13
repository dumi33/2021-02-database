import express  from "express";
import {selectSql} from "../database/sql";
//삽입관련 모듈 (insertSql)

const router = express.Router();

router.get('/',(req,res)=> {
    res.render('login'); //login.hbs를 웹브라우져에 출력
});

router.post('/',async(req,res)=>{
    const vars = req.body;
    const users = await selectSql.getUsers();
    let whoAmI = '' // let은 변경 가능 //빈 스트링 
    let checklogin = false; // 처음은 로그인 안한 상태

     users.map((user)=>{
         console.log(user.id);
            if(vars.id===user.Id && vars.password === user.Password){ // DB에 있는 것과 동일
                checklogin = true;
                if(vars.id === 'admin'){ 
                    whoAmI = 'admin';
                }else{
                    whoAmI = 'users';
                }
            }
     })

     console.log('whoAmI : ',whoAmI);

     if(checklogin && whoAmI=='admin'){ // 로그인 했는데 admin이면 delete로 리디렉트
         res.redirect('/delete');
     }
     else if(checklogin && whoAmI=='users'){// 로그인 했는데 users이면 select로 리디렉트
        res.redirect('/select');
     }
     else { // 로그인 실패
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
     }
})
module.exports = router;