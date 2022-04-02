const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(source, element) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === element.toLowerCase()
    );
}

function fuzzyMatch(arr, testString) {
    return arr.filter(
        (possibleMatch) =>
            possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
}

function matchName(arr2, strings) {
    return arr2.filter((record) => record.name === strings);
}
