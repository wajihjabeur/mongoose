let mongoose = require('mongoose')
let person=new mongoose.Schema({
    name: {type:String,required:true},
    age:Number,
    favouriteFoods:[String]
})

    module.exports = mongoose.model("person",person)
