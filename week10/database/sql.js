import mysql from "mysql2";

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인의 mysql user id
    database: 'week10', // 본인이 만든 데이터베이스 이름
    password: 'mfsiha$33', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);

const promisePool = pool.promise();

export const selectSql = {
  getUsers : async () => {
    const [rows] = await promisePool.query(`select * from user`);
    return rows
  },
  getDepartment : async()=>{
      const [rows] = await promisePool.query(`select * from department`);
      return rows
    },
  getStudent : async()=>{
      const [rows] = await promisePool.query(`select * from student`);
      return rows
  },
}


//delete 질의 

export const deleteSql = { 
   //where 조건에 만족하는 행이 update
    deleteDepartment : async (data) => { //조건 설정 
      console.log(`deleteSql.deleteDepartment :`,data.Dnumber);
        const sql = `delete from department where Dnumber = "${data.Dnumber}" `;
        await promisePool.query(sql); //sql넘겨주기 
    },
    deleteStudent : async (data) => { //조건 설정 
      console.log(`deleteSql.deleteStudent :`,data.Ssn); 
        const sql = `delete from student where Ssn = "${data.Ssn}" `; // data의 ssn을 기존의 ssn 과 비교해서 동일한 것은 삭제하는 구문 
        await promisePool.query(sql); //sql넘겨주기 
    },
}    