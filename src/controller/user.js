
const User =require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");


exports.create_user_account =async(req,  res)=>{
    try {
        const user = await User.findOne({ email: req.body.email }).exec();
        if(user) return res.status(400).json({
            message:' User already registered'
        });
    
        const{
            User_Name,
            Contact_No,
            Entity_name,
            Entity_Address,
            User_Role,
            User_Department,
            User_Shift,
            email,
            password
        } = req.body;

        console.log(password)
        
        const _user = new User({
          User_Name,
            Contact_No,
            Entity_name,
            Entity_Address,
            User_Role,
            User_Department,
            User_Shift,
            email,
            password
        });

        _user.password = await bcrypt.hash(password, 10,)
  
        //console.log("USER :: ",_user)
  
        const savedUser = await _user.save();
        if(savedUser){
  
        return res.status(201).json({
         message : "User created successfully",
         data : _user
            })
        }
  
      } catch (error) {
        return res.status(400).json({
            message : error
        });
      }
  }
  
  
  exports.authenticate_user = async (req, res) => {

    try {
      const { email, password } = req.body;
      // Check if user exists
  
       await User.findOne({  email }).then((user) => {
        // console.log("EMAIL :: ", user)
        if (!user) {
          return res.status(400).json({ error: "Invalid email or password" });
        }
        bcrypt.compare(password,user.password,function(error,isMatch){
         // console.log("MATCH :: ", isMatch)
          if(isMatch){
            const payload = {
              id: user.id,
              email : user.email
            }
            jwt.sign(payload,process.env.JWT_SECRET,{expiresIn : 31556926},(err,token) => {
              return res.status(200).json({message : "Sign In success", data : token})
            })
          }
          else{
            return res.status(400).json({ error: "Invalid email or password" }); 
          }
  
        } )
       });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Semething Went Wrong" });
    }
  };


  exports.update_user_metadata = async(req, res) => {

   try {
    const filter = { email: req.body.email }
    let update ={Entity_name : "GO Goa Gone" ,User_Name : "mahesh"}
    let updatedUser = await User.findOneAndUpdate(filter,update,{new:true})
     
return res.status(200).send({message : "User updated successfully" , data : updatedUser})
   }
   catch{
    res.status(400).json({message : "Something went wrong"})
   } 
  
        
        
  };
  



