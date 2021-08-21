const User = require('../models/user')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')

// register a user > /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body
    const user = await User.create({
        name, 
        email, 
        password, 
        avatar: {
            public_id: 'avatars/kccvibpsuiusmwfepb3m',
            url: 'sdsdd'
        }
    })

    // const token = user.getJwtToken()

    // res.status(201).json({
    //     success: true,
    //     token
    // })

    sendToken(user, 200, res)
    

    
})

// login user => v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next)=> {
    const { email, password } = req.body
    
    // check if email and password are valid by user
    if (!email||!password){
        return next(new ErrorHandler('Please enter email & password', 400))
    }

    // finding user in db
    const user = await User.findOne({email}).select('+password')

    if (!user) {
        return next(new ErrorHandler('invalid email or password', 401))
    }

    // check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password)

    if(!isPasswordMatched){
        return next(new ErrorHandler('invalid email or password',401))
    }

    // const token = user.getJwtToken()

    // res.status(200).json({
    //     success: true,
    //     token
    // })

    sendToken(user, 200, res)

})

// logout user => /api/v1/logout

exports.logout = catchAsyncErrors (async (req, res, next) => {
    res.cookie('token', null, { 
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'Logged Out'
    })
})

