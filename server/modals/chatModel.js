const mongoose=require("mongoose");

const chatModel=mongoose.Schema({
    chatName:{type:String},
    isGroupChat:{type:Boolean},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
            ref:"User",
    },
})
const Chat=mongoose.Model("Chat",chatModel);
module.exports=Chat;