const User = require('../model/User');
const userController = {};

userController.register = async(req,res) => {
  try {
    const {formData} = req.body;
    delete formData.checkPassword;
    console.log(formData);
    
    const newUser = new User(formData);
    await newUser.save();
    res.status(200).json({status: "Ok", newUser});
  } catch (error) {
    res.status(400).json({status: "Fail", message: error.message})
  }
}

userController.checkUserId = async(req,res) => {
  try {
    const {userId} = req.body;
    const check = await User.findOne({userId});
    if(check) throw new Error("사용할 수 없는 아이디입니다.");
    res.status(200).json({status: "Ok", message: "사용 가능한 아이디입니다."});
  } catch (error) {
    res.status(400).json({status: "Fail", message: error.message})
  }
}

userController.login = async(req,res) => {
    try {
      
    } catch (error) {
      res.status(400).json({status: "Fail", message: error.message})
    }
}
userController.getUserInfo = async(req,res) => {
    try {
      
    } catch (error) {
      res.status(400).json({status: "Fail", message: error.message})
    }
}
userController.updateUserInfo = async(req,res) => {
  try {
    
  } catch (error) {
    res.status(400).json({status: "Fail", message: error.message})
  }
}
userController.delete = async(req,res) => {
  try {
    
  } catch (error) {
    res.status(400).json({status: "Fail", message: error.message})
  }
}

module.exports = userController;