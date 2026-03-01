let text = "I am working on mern Stack Development";


let arr = Array.from(text);

let arrrev =  arr.reverse();

let result =  arrrev.join();
console.log(result);

//Extracting part of string

let ch = text.slice(6);
console.log(ch);



let pramchk = (str) => {
    str = str.toLowerCase(); // convert to lowercase

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        let letter = String.fromCharCode(i);

        if (!str.includes(letter)) {
            return false;
        }
    }

    return true;
};

let resultt = pramchk("The quick brown fox jumps over the lazy dog");

if (resultt) {
    console.log("Pangram");
} else {
    console.log("Not Pangram");
}
