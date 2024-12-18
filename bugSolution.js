```javascript
//Correct usage of $inc operator in updateOne method with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("65383617a21a47466e687863")},{
    $set:{
        counter: {
            $inc: 1
        }
    },
    $setOnInsert:{
        counter:1
    }
});
```