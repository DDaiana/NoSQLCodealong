let db = connect("localhost:27017/shelter")

function getAdultCats () {
    return db.cats.find({ age: { $gt: 3 }})
} 

function getDogByBreed () {
    return db.dogs.find({ breed: { $ep: b }})
}