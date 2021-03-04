function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// Use object literal to create an object to call calculate function
const arg1 = {
    n1: 3,
    n2: 4,
    op: '+'
}

// Use classes constructor to create an object to call calculate function
class Args {
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}
const arg2 = new Args(7, 4, '-');
const arg3 = new Args(8, 6, '*');

// call calculate function
console.log(calculate(arg1));
console.log(calculate(arg2));
console.log(calculate(arg3));