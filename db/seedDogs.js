db = connect("localhost:27017/shelter"); //mongo has the port number 27017 by default

db.dogs.insertMany([ 
    { name: 'Mochi', breed: 'shi-pu', ownerName: 'Naz' },
    { name: 'Masha', breed: 'shih-tzu', ownerName: 'Vesna' },
    { name: 'Hendon', breed: 'golden retriever', ownerName: 'Vesna' },
    { name: 'Zola', breed: 'golden retriever', ownerName: 'Beth' },
    { name: 'Snip', breed: 'greyhound' }
])