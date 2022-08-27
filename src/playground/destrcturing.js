// const person = {
//     name: 'Aswin',
//     age: 21,
//     location: {
//         city: 'kochi',
//         temp: 28
//     }
// };


// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}.`)

// const { city, temp } = person.location

// if (city && temp) {
//     console.log(`It's ${temp} in ${city} city.`)
// }


// challenge 


// const book = {
//     title: 'Ego is the Enemy',
//     auther: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self published' } = book.publisher
// console.log(publisherName)

// Array destrcturing

const address = ['1299 S Juniper Street', 'Phiadelphia', 'Pennsylvania', '19147']

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`)

// Challenge

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`)
