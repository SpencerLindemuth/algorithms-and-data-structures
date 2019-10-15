let reverseString = (string) => {
    let reversed = "";
    string.split("").forEach(letter => {
        reversed = letter + reversed;
    });

    return reversed;
}

console.log(reverseString("This is a more complicated string 0-43090909"))