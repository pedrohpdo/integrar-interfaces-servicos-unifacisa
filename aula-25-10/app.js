const express = require('express');
require('./src/database/Database.js')

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(process.env.MONGODB_CONNECT_URL)
    console.log('Server Initiated. Listening on port 3000');
});

const checkList = require("./src/models/Checklist.js");
const task = require("./src/models/Task.js");

// async function createCheckList() {
//     await checkList.create({
//         name : "New CheckList"
//     })
// }

async function createTask() {
    await task.create({
        name: "Limpar banheiro",
        done : false,
        checkList: "6539c25d49a9adbbf45127a1"
    })
}

// createCheckList();
createTask();
