import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인의 mysql user id
    database: 'week8', // 본인이 만든 데이터베이스 이름
    password: 'mfsiha$33', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

const promisePool = pool.promise();

export const selectSql = {
  getEmployee : async () => {
    const [rows] = await promisePool.query(`select * from employee`);
    console.log(rows)
    return rows
  },
  getDepartment : async()=>{
      const [rows] = await promisePool.query(`select * from department`);
      return rows
    },
}

export const insertSql = { 
    setEmployee : async (data) => { //파라미터로 data를 받음
        const sql = `insert into employee values(  
            "${data.Fname}","${data.Minit}","${data.Lname}","${data.Ssn}", "${data.Bdate}",
            "${data.Address}","${data.Sex}","${data.Salary}","${data.Super_ssn}","${data.Dno}" )`;
            //employee에 값을 넣는다. 
            await promisePool.query(sql);
    },
    setDepartment : async (data) => {
        const sql = `insert into department values(
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}","${data.Mgr_start_date}" )`;
            //department에 값을 넣는다. 
            await promisePool.query(sql);
    },
}
//update 질의 

export const updateSql = { //where 조건에 만족하는 행이 update
    updateEmployee : async (data) => { // 조건 설정
        const sql = `update employee set salary = ${data.Salary} where Minit = "F"`;
        await promisePool.query(sql);

    },//where 조건에 만족하는 행이 update
    updateDepartment : async (data) => { //조건 설정 
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql); //sql넘겨주기 
    },
}    