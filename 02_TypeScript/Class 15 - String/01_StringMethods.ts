console.log("========================== STRING METHODS ==========================\n");

console.log("1) charAt(index):\n\n- Returns a character at a specific index (position):");

let text = "Generation";

console.log(`\n-> text = ${text};`);
console.log(`\n-> text.charAt(2) = ${text.charAt(2)}.`);

console.log("\n====================================================================\n");

console.log("2) concat(string):\n\n- Returns the union of 2 or more strings:");

let text01 = "Generation";
let text02 = "Brasil";

console.log(`\n-> text01 = ${text01};`);
console.log(`\n-> text02 = ${text02};`);
console.log(`\n-> text01.concat(text02) = ${text01.concat(text02)}.`);

console.log("\n====================================================================\n");

console.log("3) startsWith(string):\n\n- Returns 'true' or 'false' if a string starts with a specific\nvalue:");

let text03 = "Generation";

console.log(`\n-> text03 = ${text03};`);
console.log(`\n-> text03.startsWith("G") = ${text03.startsWith("G")}.`);

console.log("\n====================================================================\n");

console.log("4) endsWith(string):\n\n- Returns 'true' or 'false' if a string ends with a specific value:");

let text04 = "Generation";

console.log(`\n-> text04 = ${text04};`);
console.log(`\n-> text04.endsWith("n") = ${text04.endsWith("n")}.`);

console.log("\n====================================================================\n");

console.log("5) includes(string):\n\n- Returns 'true' or 'false' if a string contains a specific value:");

let text05 = "Generation";

console.log(`\n-> text05 = ${text05};`);
console.log(`\n-> text05.includes("ra") = ${text05.includes("ra")}.`);

console.log("\n====================================================================\n");

console.log("6) indexOf(string):\n\n- Returns the index (position) of the first occurrence of a specific\nvalue in the string:");

let text06 = "Generation";

console.log(`\n-> text06 = ${text06};`);
console.log(`\n-> text06.indexOf("a") = ${text06.indexOf("a")}.`);

console.log("\n====================================================================\n");

console.log("7) lastIndexOf(string):\n\n- Returns the index (position) of the last occurrence of a specific\nvalue in the string:");

let text07 = "Generation";

console.log(`\n-> text07 = ${text07};`);
console.log(`\n-> text07.lastIndexOf("e") = ${text07.lastIndexOf("e")}.`);

console.log("\n====================================================================\n");

console.log("8) length:\n\n- Returns the length of a string:");

let text08 = "Generation";

console.log(`\n-> text08 = ${text08};`);
console.log(`\n-> text08.length = ${text08.length}.`);

console.log("\n====================================================================\n");

console.log("9) replace(search_string, replacement_string):\n\n- Searches for a string according to a search pattern and returns a\nstring where the first occurrence is replaced by a new value:");

let text09 = "Generation";

console.log(`\n-> text09 = ${text09};`);
console.log(`\n-> text09.replace("tion", "l") = ${text09.replace("tion", "l")}.`);

console.log("\n====================================================================\n");

console.log("10) replaceAll(search_string, replacement_string):\n\n- Searches for a string according to a search pattern and returns\na string where all occurrences are replaced with a new value:");

let text10 = "Brazil Brasil Brazil";

console.log(`\n-> text10 = ${text10};`);
console.log(`\n-> text10.replaceAll("Brazil", "Brasil") = ${text10.replaceAll("Brazil", "Brasil")}.`);

console.log("\n====================================================================\n");

console.log("11) search(string):\n\n- Searches a string for the value, or regular expression, and\nreturns the index (position) of the found value:");

let text11 = "Brazil Brasil Brazil";

console.log(`\n-> text11 = ${text11};`);
console.log(`\n-> text11.replaceAll("Brazil", "Brasil") = ${text11.replaceAll("Brazil", "Brasil")}.`);

console.log("\n====================================================================\n");

console.log("12) slice(start_index, end_index):\n\n- Extracts a portion of a string and returns a new string:");

let text12 = "Brazil Brasil Brazil";

console.log(`\n-> text12 = ${text12};`);
console.log(`\n-> text12.slice(7, 13) = ${text12.slice(7, 13)}.`);

console.log("\n====================================================================\n");

console.log("13) split(separator_string):\n\n- Splits a string into an array of substrings:");

let text13 = "Brazil Brasil Brazil";

console.log(`\n-> text13 = ${text13};`);
console.log(`\n-> text13.split(" ") = [ ${text13.split(" ").map(word => `'${word}'`).join(", ")} ]`);

console.log("\n====================================================================\n");

console.log("14) substring(start_index, end_index):\n\n- Extracts characters from a string, between two specified indices\n(positions). If you only enter the starting index, all characters\nfrom the starting index will be extracted:");

let text14 = "Generation";

console.log(`\n-> text14 = ${text14};`);
console.log(`\n-> text14.substring(1,3) = ${text14.substring(1,3)}.`);

console.log("\n====================================================================\n");

console.log("15) toLowerCase():\n\n- Returns the string converted to lowercase letters:");

let text15 = "Brasil";

console.log(`\n-> text15 = ${text15};`);
console.log(`\n-> text15.toLowerCase() = ${text15.toLowerCase()}.`);

console.log("\n====================================================================\n");

console.log("16) toUpperCase():\n\n- Returns the string converted to uppercase letters:");

let text16 = "Brasil";

console.log(`\n-> text16 = ${text16};`);
console.log(`\n-> text16.toUpperCase() = ${text16.toUpperCase()}.`);

console.log("\n====================================================================\n");

console.log("17) trim():\n\n- Returns a string with no leading or trailing whitespace:");

let text17 = " Generation ";

console.log(`\n-> text17 = ${text17};`);
console.log(`\n-> text17.trim() = '${text17.trim()}'.`);

console.log("\n====================================================================\n");

console.log("18) trimStart():\n\n- Returns a string with no leading whitespace:");

let text18 = " Generation ";

console.log(`\n-> text18 = ${text18};`);
console.log(`\n-> text18.trimStart() = '${text18.trimStart()}'.`);

console.log("\n====================================================================\n");

console.log("19) trimEnd():\n\n- Returns a string without trailing whitespace:");

let text19 = " Generation ";

console.log(`\n-> text19 = ${text19};`);
console.log(`\n-> text19.trimEnd() = '${text19.trimEnd()}'.`);
