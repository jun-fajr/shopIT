// const DB_USER = 'jun';
// const PASSWORD = encodeURIComponent('210688');

// const database = `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.if5o7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// const connectDatabase = () => {
//     mongoose.connect(database, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: true
//     })
//     .then(con => {
//         console.log(`MongoDB Database Connected with HOST: ${con.connection.host}`)
//     })
//     .catch((err)=>{
//     console.log('Connection failed !!'+ err.message);
//   });
// }

const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(con => {
        console.log(`MongoDB Database Connected with HOST: ${con.connection.host}`)
    })
    .catch((err)=>{
        console.log('Connection failed !!'+ err.message);
    });
}

module.exports = connectDatabase