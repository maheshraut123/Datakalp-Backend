const express= require('express');
const { create_user_account, authenticate_user, update_user_metadata } = require('../controller/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const {createRecords,getRecords} = require('../controller/records');
const router =express.Router();

// router.post('/create_user_account',validateSignupRequest, isRequestValidated, create_user_account);
// router.post('/authenticate_user',validateSigninRequest, isRequestValidated, authenticate_user);

//Temporary Update
router.post('/create_user_account', create_user_account);
router.post('/authenticate_user', authenticate_user);
router.put('/update_user_metadata',  update_user_metadata);
router.post("/createRecords",createRecords)
router.get("/getrecords",getRecords)

module.exports= router;
  

