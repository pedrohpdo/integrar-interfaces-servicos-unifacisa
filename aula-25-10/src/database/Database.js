const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pedrohpdo_master:d0c3d19403@cluster0.yhcp71b.mongodb.net/unifacisa?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Database connection established')
    })
    .catch((err) => {
        console.error("Error connecting to Database: " + err.message);
    });
