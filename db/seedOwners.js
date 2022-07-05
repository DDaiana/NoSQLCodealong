let db = connect("localhost:27017/shelter");

db.owners.insertMany([
    { name: 'Beth' },
    { name: 'Naz' },
    { name: 'Eric' },
    { name: 'Vesna' }
])