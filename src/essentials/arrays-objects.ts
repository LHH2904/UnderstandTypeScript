// let hobbies= ['Sport','Cooking'];

// hobbies.push(10)

// cách định nghĩa đơn giản
// let users: ( string | number)[];

// cách nâng cao
let users: Array<string | number> ;

users = [1, 'Max'];
users = [1, 5];
console.log(users);

let possobleResults: number[]; // [1, -1]
possobleResults = [1, -1]
possobleResults = [1, -10, 12]

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'John',
    age: 38,
    hobbies: ['sport','cooking'],
    role: {
        description: 'admin',
        id: 1
    }
}
// Không phải là "object": Trong TypeScript,
// {} không đại diện cho kiểu dữ liệu "object"
// như nhiều người vẫn nghĩ. Thực tế, {} là một
// kiểu cho phép bất kỳ giá trị nào không phải
// null hoặc undefined.
// Điều này bao gồm cả các kiểu nguyên thủy như chuỗi
// (string), số (number), boolean, mảng, hàm, và đối tượng.
let val: {} = 'some test';
const someObj = {};

let data : Record<string, number | string>;

data = {
    entry1: 1,
    entry2: 'some test',
}