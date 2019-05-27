const http = new EasyHTTP();

// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(data => data)
//   .catch(err => err);

// User data
const data = {
  name: "jhon doe",
  username: "jhond",
  email: "jdoe@gmail.com"
};

// create User
// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// update User
// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then(data => console.log(data))
  .catch(err => console.log(err));
