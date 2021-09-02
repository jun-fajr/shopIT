const express = require('express')
const router = express.Router()

const {
    registerUser, 
    loginUser, 
    forgotPassword, 
    resetPassword, 
    getUserProfile, 
    logout,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails,
    updateUserProfile,
    deleteUser 
} = require('../controllers/authController')

const { isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)

router.route('/password/forgot').post(forgotPassword)
router.route('/password/reset/:token').put(resetPassword)

router.route('/me').get(isAuthenticatedUser, getUserProfile)
router.route('/me/update').put(isAuthenticatedUser, updateProfile)

router.route('/password/update').put(isAuthenticatedUser, updatePassword)

router.route('/logout').get(logout)

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers)
router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateUserProfile)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser)

module.exports = router


// admin: 
// {
//     "email": "jun.fajr@gmail.com",
//     "password": "210688"
// }

// user:
// {
//     "email": "jun.akatsuki88@gmail.com",
//     "password": "21061988"
// }