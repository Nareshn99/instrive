const XLSX = require('xlsx');
const path = require('path');
const userModel = require('../models/userModel')


const uploadFile = async (req, res) => {
    try {

        //get file path from local and read data
        const filePath = path.resolve(__dirname, `../../${req.file.path}`);
        let workbook = XLSX.readFile(filePath);
 
        //convert xlsheet data into JSON and read data at 0 index
        let userList = workbook.SheetNames;
        let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[userList[0]]);

        xlData.forEach(async (allData) => {

            //distructure email and mobile
            let { Email, Mobile } = allData;

            //validation for unique Email and Phone
            if (Email&&Email.length!==0) {
                const user = await userModel.findOne({ Email })
                if (user)
                    return res.status(409).send({ status: false, message: "User Email Already Exist" })
            }

            if (Mobile&&Mobile.length!==0) {
                const user = await userModel.findOne({ Mobile })
                if (user)
                    return res.status(409).send({ status: false, message: "User Mobile Number Already Exist" })
            }

            //create user using exel sheet's user data
            await userModel.create({ ...allData })
        });
        return res.status(200).send({ status: true, message: "User Data Added" })
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ status: false, message: "Getting Error While Upload File" })
    }
}


const getUsers = async (req, res) => {
    try {
        //find user from mongo db and return
        const user = await userModel.find();
        res.status(200).send({ status: true, message: "Get User data Successed", data:user })
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