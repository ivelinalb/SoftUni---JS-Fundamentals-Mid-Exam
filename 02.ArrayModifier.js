function arrayModifier(input) {

    let numbers = input.shift().split(' ');
    let command;
    let action;
    let sum = 0;

    for (let element of input) {
        command = element.split(' ');
        action = command[0];
        i1 = command[1];
        i2 = command[2];

        if (action === 'swap') {
            [ numbers[i1], numbers[i2] ] = [ numbers[i2], numbers[i1] ];
        } else if (action === 'multiply') {
            sum = Number(numbers[i1]) * Number(numbers[i2]);
            numbers.splice(i1, 1, sum);
        } else if (action === 'decrease') {
            numbers = numbers.map( x => x - 1);
        } else if (action === 'end') {
            break;
        }
    }

    console.log(numbers.join(', '));

}

arrayModifier();