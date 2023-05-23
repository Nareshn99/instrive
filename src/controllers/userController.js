const XLSX = require('xlsx');
const path = require('path');
const userModel=require('../models/userModel')


const uploadFile = async (req, res) => {
    try {
        const filePath = path.resolve(__dirname, `../${req.file.path}`);
        let workbook = XLSX.readFile(filePath);
        let userList = workbook.SheetNames;
        let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[userList[0]]);

        xlData.forEach(async (allData) => {
            let { Name, Email, Mobile, Address, Country } = allData;
            console.log(
                { Name, Email, Mobile, Address, Country }
            )
            res.status(201).send({ status: true, message: "User Data Added" })
        });

    }
    catch (e) {
        console.log(e);
        res.status(500).send({ status: false, message: "Getting Error While Upload File" })
    }
}

const getUsers = async (req, res) => {
    try {
        const user=await userModel.find();
        res.status(200).send({status:true,message:"Get User data Successed",data})
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ status: false, message: "Getting Error While Upload File" })
    }
}

module.exports = {
    uploadFile,
    getUsers
}