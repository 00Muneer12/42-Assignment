/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
let magician_array = ["Magician_1", "Magician_2", "Magician_3"];
function make_great(arr) {
    for (let i = 0; i < arr.length; i++) {
        magician_array[i] = "The Great + arr{i}";
    }
}
'make_great{magician_array}';
console.log(magician_array);
export {};
