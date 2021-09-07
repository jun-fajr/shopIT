const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')

// handle uncaught exception
process.on('uncaughtException', err => {
    consol.log(`ERROR: ${err.stack}`)
    consol.log('Shutting down due to uncaught exception')
    process.exit(1)
})

// setting config file
dotenv.config({ path: 'backend/config/config.env'})

// connect Database
connectDatabase()

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

// handle unhandled promise rejection
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`)
    console.log('Shutting down the server due to unhandled Promise rejection')
    server.close(()=> {
        process.exit(1)
    })
})
