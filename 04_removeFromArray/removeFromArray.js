const removeFromArray = function(array, item1, item2, item3, item4) {
    let itemArray = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        // Check if array contains the item
        if (itemArray.includes(arguments[i])) {
            do {
                // Remove array item at it's index 
                itemArray.splice(itemArray.indexOf(arguments[i]), 1);
            }
            // Check array to remove multiple of the same item
            while (itemArray.includes(arguments[i]));
        } 
    }
    return itemArray;
};

// Do not edit below this line
module.exports = removeFromArray;
