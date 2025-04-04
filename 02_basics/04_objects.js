// const tinderUser =new Object();
const tinderUser = {}
tinderUser.id = "12345"
tinderUser.name = "Gaurav"
tinderUser.isLoggedIn = true

console .log(tinderUser) // {}

const regularUser = {
    email : "gauravsingh@gmail.com",
    fullname : {
        userfullname : {
            userName: "Gaurav",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.userName) // Gaurav

const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "c",
    4: "d",
}
const obj3 = {obj1, obj2}
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = {...obj1, ...obj2}
console.log(obj5) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = [
    {
        name: "Gaurav Rana",
        age: 25,
        location: "India"
    },
    {
        name: "Sahili",
        age: 23,
        location: "India"
    },
    {
        name: "Kunali",
        age: 26,
        location: "India"
    }
]

console.log(user) // [ { name: 'Gaurav Rana', age: 25, location: 'India' } ]
console.log(user[0].name) // Gaurav Rana

console.log(tinderUser) // { id: '12345', name: 'Gaurav', isLoggedIn: true }
console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '12345', 'Gaurav', true ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '12345' ], [ 'name', 'Gaurav' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty("id")) // true
console.log(tinderUser.hasOwnProperty("location")) // false


const course = {
    courseName: "JavaScript",
    coursePrice: 199,
    courseInstructor: "Gaurav Singh",
}

// course.courseInstructor

const{courseInstructor: instructor} = course
console.log(instructor) // Gaurav Singh

// {
//     "name": "Gaurav",
//     "location": "India",
//     "isLoggedIn": true
// }

// [
//     {},
//     {},
//     {}
// ]