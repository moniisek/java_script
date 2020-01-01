// module.exports = () => {
//   console.log("Hello");
// };

// now everytime you require myModule.js you get back a function
// it will just cash the function reference


// or we could export an object

// module.exports = {
//   f1: () => {
//     console.log("hello")
//   }
// }


export default () => {
  console.log("hello");
}
