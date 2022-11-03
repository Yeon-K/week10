import express from 'express';
import {selectSql, updateSql} from '../database/sql';

const router = express.Router();

router.get('/employee', async (_req, res) => {  // '/employee'를 하면 
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {  // render : hbs 파일 넘겨줌
        title: '직원 테이블 갱신',
        emp_res,
    });
});

router.get('/department', async (_req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: '부서 테이블 갱신',
        dept_res,
    });
});

router.post('/employee', async (_req, res) => {
    await updateSql.updateEmployee();

    res.redirect('/update/employee');
});

router.post('/department', async (req, res) => {
    const vars = req.body;
    const data = {
        Dname: vars.dname,
    }
    await updateSql.updateDepartment(data); //update 다 될 때까지 기다려

    res.redirect('/update/department');
})

module.exports = router;