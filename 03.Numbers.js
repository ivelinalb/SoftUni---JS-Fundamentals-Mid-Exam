function solve(input) {
    let numbers = input.split(' ');
    let numbersLength = numbers.length;
    let sumOfAllNumbers = numbers.reduce((a, b) => Number(a) + Number(b));
    let averageNumber = sumOfAllNumbers / numbersLength;
    let topNumbers = [];

    if (numbersLength >= 5) {
        for (let number of numbers) {
            if (number > averageNumber) {
                topNumbers.push(number);
                topNumbers = topNumbers.sort((a, b) => b - a);
            }
        }
        if (topNumbers.length > 5) {
          topNumbers = topNumbers.slice(0, 5);
        }
        console.log(topNumbers.join(' '));
    } else {
        console.log('No');
    }
}

solve();