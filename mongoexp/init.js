const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [{
    from: "aryan",
    to: "amba",
    message: "hey",
    created: new Date(),
},
{
    from: "henry",
    to: "john",
    message: "dude",
    created: new Date(),
},
{
    from: "mark",
    to: "tom",
    message: "bro",
    created: new Date(),
},
{
    from: "rony",
    to: "jony",
    message: "whats up",
    created: new Date(),
},
{
    from: "thomas",
    to: "cheng",
    message: "yea buddy",
    created: new Date(),
},
{
    from: "smoke",
    to: "carl",
    message: "stop the train",
    created: new Date(),
},
];
Chat.insertMany(chats);