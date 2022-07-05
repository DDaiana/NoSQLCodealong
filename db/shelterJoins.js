function getAllOwnersAndDogs(){
    return db.owners.aggregate([
        { $lookup:
            {
                from: 'dogs',
                as: 'pets',
                let: { owner: '$name' },
                pipeline: [{ $match: { $expr: { $eq: ['$ownerName', '$$owner'] } } }]
            }
        }
    ]).pretty()
}

function getDogsFor(ownerName){
    return db.owners.aggregate([
        { $match: { name: ownerName} },
        { 
             $lookup: {
                  from: 'dogs',
                  as: 'pets',
                  let: { owner: '$name' },
                  pipeline: [{ $match: { $expr: { $eq: ['$ownerName', '$$owner'] } } }]
             }
         },
     ]).pretty()
}