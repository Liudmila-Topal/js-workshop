const capitalizeArray = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());


console.log(capitalizeArray(['hello', 'JavaScript'])); // Output ['Hello', 'Javascript']