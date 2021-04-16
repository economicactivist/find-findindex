/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {
  const foundUserByUsername = usersArray.find(val => val.username === username)
  return foundUserByUsername
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, 
and a string. 
The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let removedObj;
  const idxToDelete = usersArray.findIndex(val => val.username === username)
  if(idxToDelete !== -1){
    removedObj = usersArray.splice(idxToDelete, 1)
  }
  console.log(removedObj)
  console.log(idxToDelete)
  return idxToDelete !== -1 ? removedObj[0] : undefined
}
