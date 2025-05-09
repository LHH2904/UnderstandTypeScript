function add(a:number, b:number) {
    return a + b;
}

add(4,6)


// arrow function
const add1 = (a:number, b:number) => {
    return a + b;
}

// nếu chỉ có 1 biểu thức
const add2 = (a:number, b:number) => a + b;

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}