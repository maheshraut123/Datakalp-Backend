const Last10= require("../models/recordSchema")
const Users = require("../models/userSchema");

exports.createRecords =(req,  res)=>{
         const{
          id ,results ,Date_Time, videoid, algover
    
        } = req.body;
    
        Users.findById(id).then(async(user)=>{

            const _user = new Last10({
                p_id : id,Date_Time,results ,videoid, algover
              
            });
            const savedUser = await _user.save();
            if(savedUser){
    
            return res.status(201).json({
             message : "Record created successfully",
             data : _user
                })
            }
        })
         
        .catch ((err)=>{
          if(err)
          {
               res.status(400).send("No User found");
          }

        })

}

exports.getRecords = async(req,  res)=>{
const {id} = req.body;
let answer =[];  
  // Sort by the "name" field in descending order
try {
    const result = await Last10.find({p_id: id}).sort('-Date_Time').exec();
    // console.log(result.length);
    const length = result.length >= 10 ? 10 : result.length
    
    for(let i=0; i<length; i++){
       console.log(result[i].Date_Time)
answer.push(result[i])
    }
    console.log("--------------")
    res.status(200).json({message : "Result", data  :answer})
  } catch (err) {
    console.error("No such user exists");
  }
}


// exports.createRecords =async(req,  res)=>{
//     try {
//          const{
//           email,Date_Time,Handwash_duration_seconds,HAIgenie_Score,HAIgenie_confidence_index
    
//         } = req.body;
        
//         const _user = new Last10({
//             email,Date_Time,Handwash_duration_seconds,HAIgenie_Score,HAIgenie_confidence_index
//            // username:shortid.generate()
//         });
//         //console.log("USER :: ",_user)

//         const savedUser = await _user.save();
//         if(savedUser){

//         return res.status(201).json({
//          message : "User created successfully",
//          data : _user
//             })
//         }
//       } catch (error) {
//         return res.status(400).json({
//             message : error
//         });
//       }
// }

// exports.getRecords = async(req,  res)=>{
// const {email} = req.body;
// let answer =[];  
//   // Sort by the "name" field in descending order
// try {
//     const result = await Last10.find({email}).sort('-Date_Time').exec();
//     console.log(result.length);
//     const length = result.length >= 10 ? 10 : result.length
    
//     for(let i=0; i<length; i++){
//        console.log(result[i].Date_Time)
// answer.push(result[i])
//     }
//     res.status(200).json({message : "Result", data  :answer})
//   } catch (err) {
//     console.error(err);
//   }
// }