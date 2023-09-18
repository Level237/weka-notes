const level={
    name:"martin",
    age:23,
    live:10
}

const test=[
    "name",
    "age",
    "sexe",
]
  


const updates=Object.keys(level)

const isValidated=updates.every((key)=>test.includes(key))

console.log(isValidated);