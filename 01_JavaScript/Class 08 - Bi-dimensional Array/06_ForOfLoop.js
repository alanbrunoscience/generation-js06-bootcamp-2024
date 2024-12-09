/* For of Loop

- The For of loop, briefly explained, is used to iterate lists and collections. Its main feature is the simplification of the For loop, making the code simpler and easier to read by developers.

- The For of repetition loop is used to traverse (iterate) the entire Array, avoiding problems related to manipulating the positions occupied by the elements of an Array, such as starting the repetition loop counter with the number 1 and not 0, for example.

*/

console.log("=== Version without 'For of' ===\n");
let students = [ "Felipe", "Jonas", "Julia", "Marcos" ];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("\n=== Version with 'For of' ===\n");
let students2 = [ "Felipe", "Jonas", "Julia", "Marcos" ];

for (let student of students2) {
  console.log(student);
}
