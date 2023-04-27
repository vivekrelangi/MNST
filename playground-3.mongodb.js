use("thirdCse")
//db.createCollection("csedata")
/*db.csedata.insertMany(
    [
        {
            _id: 501,
            name: "Prasad",
            mobile:123,
            email: "prasad@abc.com",
            percentage: 70,
            location:"RJY"
        },
        {
            _id: 502,
            name: "Pavan",
            mobile:1234,
            email: "pavan@abc.com",
            percentage: 75,
            location:"KKD"
        },{
            _id: 503,
            name: "Kalyan",
            mobile:1235,
            email: "kalyan@abc.com",
            percentage: 80,
            location:"HYD"
        },
        {
            _id: 504,
            name: "Prasnth",
            mobile:1236,
            email: "prasanth@abc.com",
            percentage: 70,
            location:"VSKP"
        },
        {
            _id: 505,
            name: "Siva",
            mobile:1237,
            email: "siva@abc.com",
            percentage: 80,
            location:"GOA"
        },
        {
            _id: 506,
            name: "Vedanth",
            mobile:1238,
            email: "vedanth@abc.com",
            percentage: 78,
            location:"VSKP"
        },
        {
            _id: 507,
            name: "Prasanna",
            mobile:1239,
            email: "prasanna@abc.com",
            percentage: 87,
            location:"HYD"
        }
    ]
)
db.csedata.find({name: "Prasad"},{name:1,percentage:1,_id:0})
db.csedata.find({percentage:{$gt:75}},{name:1,percentage:1,_id:0})
db.csedata.find({$and:[{location:"RJY"},{percentage:{$gte:70}}]})
db.csedata.find({$and:[{location:"RJY"},{percentage:70}]})
db.csedata.find({$and:[{location:"RJY"},{percentage:{$lt:70}}]})
$in
$eq
CRUD:Create,Read,Update,Delete
for Creation
of Database
use("database_name")
of collection
db.createCollection("collection_name")
for Reading
db.collection.find()
db.collection.findOne()
db.collection.findMany()
for Updation
db.collection.updateOne()
db.collection.updateMany()
for Deletion
db.collection.deleteOne()
db.collection.deleteMany()
*/
//db.csedata.updateOne({_id:502},{$set:{name:"Pawan"}})
//db.csedata.findOne({_id:502})
//db.csedata.updateOne({_id:507},{$set:{email:"prassu@abc.com"}})
//db.csedata.findOne({_id:507})
//db.csedata.updateMany({},{$set:{salary :7000}})//{} indicates to update every field in the collection 
//db.csedata.find()
//db.csedata.updateMany({location:"RJY"},{$inc:{salary:1000}})
//db.csedata.find()
//db.csedata.updateMany({percentage:{$gt:80}},{$inc:{salary:1000}})
//db.csedata.find()
