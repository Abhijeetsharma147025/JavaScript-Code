// Immediately Invoked Function Expression (IIFE)


// function chai(){
//       console.log(`DB CONNECTED`);

// }
// chai()

(function chai() {
      // named IIFE
      console.log(`db connected`);
}) ();

//unnamed iife
( (name) => {
      console.log(`db connected two ${name}`);
}) ('abhijeet')