import express from "express";
import { deleteSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async(req, res) => {
    const department = await selectSql.getDepartment();

    res.render('delete', {
        title: "삭제 기능",
        department
    })
});

router.post('/', async(req, res)=>{
    console.log('delete router: ', req.body.delBtn);

    const data = {
        Dnumber: req.body.delBtn,
    };

    await deleteSql.deleteDepartment(data);

    res.redirect('/delete');
});

module.exports = router;