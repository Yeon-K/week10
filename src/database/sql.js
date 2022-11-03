import mysql from 'mysql2';

const pool = mysql.createPool(
  process.env.JAWSCB_URL ?? {
    host: 'localhost',
    user: 'root',
    password: '12191801',
    database: 'week10',
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0,
    }
);

const promisePool = pool.promise();

// export : 정의한 함수를 내보냄
export const selectSql = {
    getUsers : async () => {  //async - await 는 무조건 둘이 세트, 순서가 엉망이 되는 것을 방지
        const [rows] = await promisePool.query(`select * from user`);  // 동작이 끝날대까지 기다림

        return rows;
    },
    getDepartment: async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows;
    }
};

export const deleteSql = {
    deleteDepartment: async (data) => {
        console.log("deleteSql.deleteDepartment: ", data.Dnumber);
        const sql = `delete from department where Dnumber = ${date.Dnumber}`

        await promisePool.query(sql);
    },
};