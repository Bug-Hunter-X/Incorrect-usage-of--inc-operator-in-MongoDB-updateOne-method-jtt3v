```javascript
//Incorrect usage of $inc operator in updateOne method
db.collection('myCollection').updateOne({"_id":ObjectId("65383617a21a47466e687863")},{$inc:{counter:1}});
```