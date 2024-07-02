const palindromes = function (string) {
    const validChar = "0123456789abcdefghijklmnopqrstuvwxyz";
    const inputString = string
        .toLowerCase()
        .split("")
        .filter((char) => validChar.includes(char))
        .join("");
                    
    const reverseString = Array.from(inputString)
        .reverse()
        .join("");

    return inputString === reverseString
};

// Do not edit below this line
module.exports = palindromes;
