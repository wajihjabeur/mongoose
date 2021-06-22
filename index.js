const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config()
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },

      (err) => {
        if (err) {
          console.log(err);
        } else console.log("database connected");
      }
    )

    let person =require('./models/person')

/* let person1=new person({
    name:'"wajih',
    age:18,
    favouriteFoods:['sandwitch'],
})
person1.save()
.then(doc => {
  console.log(doc)
})
.catch(err => {
  console.error(err)
}) */

// person.create([{name:'wajih',age:25,favouriteFoods:['healthy food','mloukhia']},{name:'ahmed',age:5,favouriteFoods:['shawarma','escalope']},{name:'wajih',age:5,favouriteFoods:['chorba']},{name:'gmc',age:10,favouriteFoods:['pizza','glace']},{name:'gmc1',age:3,favouriteFoods:['pizza']},{name:'gmc2',age:6,favouriteFoods:['pizza']}])
// person.find({name:'ahmed'},function (err, docs) {
//   if (err) {console.log(err) }else {console.log(docs)}
// })

// person.findOne({favouriteFoods:'mloukhia'},function (err, docs) {
//     if (err) {console.log(err) }else {console.log(docs)}
//   })

// person.findById('60d1f9a919548e2ea040c646',function (err, docs) {
//       if (err) {console.log(err) }else {console.log(docs)}
//     })
    

// person.findById('60d20a4f9f898f1074a35f64',(err,docs)=>{
//   if (err) {console.log(err) }else {console.log(docs.favouriteFoods.push('hamburger'));docs.save();console.log(docs)}
// })

// person.findOneAndUpdate({name:'wajih'},{$set:{age:18}},{ new: true },(err,docs)=>{
//      if (err) {console.log(err)}else {console.log(docs)}})

// person.findByIdAndRemove('60d20a4f9f898f1074a35f64',(err,docs)=>{
//      if (err) {console.log(err) }else {console.log(docs)}
//   })


// person.remove({name:'wajih'},(err,docs)=>{
//         if (err) {console.log(err) }else {console.log(docs)}
//     })


person.find({favouriteFoods:'pizza'}).sort({name:1}).limit(2).select({age:0}).exec(done=(err,docs)=>{
           if (err) {console.log(err) }else {console.log(docs)}
  })




