// ARRAY AND SPREAD
// Ex1:
// Mảng chứa các sở thích cá nhân
const hobbies = ['Sports', 'Cooking'];

// Mảng chứa các sở thích hiện tại đang tham gia
const activeHobbies = ['Hiking'];

// ❗ Thêm từng phần tử một từ `hobbies` vào `activeHobbies` theo cách thủ công
activeHobbies.push(hobbies[0], hobbies[1]);
// ➤ Kết quả: ['Hiking', 'Sports', 'Cooking']

// ✅ Cách viết ngắn gọn hơn bằng spread operator
activeHobbies.push(...hobbies);
// ➤ Tương đương với: activeHobbies.push('Sports', 'Cooking');
// ➤ Kết quả sau dòng này: ['Hiking', 'Sports', 'Cooking', 'Sports', 'Cooking']

// Ex2:
// Một mảng chứa danh sách trái cây
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// ✅ Sử dụng destructuring để tách phần tử đầu tiên và phần còn lại
const [_, ...remainingFruits] = fruits;

/**
 * Giải thích:
 * - `const [_, ...remainingFruits] = fruits`:
 *   - `_` là biến dùng để "giữ tạm" phần tử đầu tiên (ở đây là 'Apple')
 *   - `...remainingFruits` sẽ chứa tất cả các phần tử còn lại trong mảng
 * - Mục đích của dấu `_` là bỏ qua giá trị đầu tiên (không dùng đến)
 */

console.log(remainingFruits);
// 👉 Output: ['Banana', 'Orange', 'Mango']




// OBJECT AND SPREAD
// Ex1:
// Một đối tượng đơn giản chứa thông tin người dùng
const person = {
    name: 'John',
    age: 38
};

// ❌ Gán đối tượng: chỉ là tạo một THAM CHIẾU, không phải bản sao thật
const copiedPerson = person;
// Nếu bạn làm: copiedPerson.age = 40;
// Thì person.age cũng sẽ trở thành 40
// ➤ Vì cả hai biến cùng trỏ đến một vùng nhớ (reference)

// ✅ Dùng toán tử spread để tạo một bản sao mới của đối tượng
const copiedPerson1 = { ...person };
// ➤ Bản sao nông (shallow copy)
// Nếu bạn thay đổi copiedPerson1.age, thì person.age KHÔNG bị ảnh hưởng

// Ex2:
// Một đối tượng đại diện cho người dùng
const person1 = {
    name: 'Alice',
    age: 30,
    city: 'Hanoi'
};

// ✅ Sử dụng destructuring để loại bỏ thuộc tính `age`
const { age, ...personWithoutAge } = person1;

/**
 * Giải thích:
 * - `{ age, ...personWithoutAge } = person`:
 *   - `age` được lấy ra riêng (và không sử dụng nữa → tức là loại bỏ)
 *   - `...personWithoutAge` sẽ chứa tất cả các thuộc tính còn lại của `person`
 * - Kết quả: một object mới không có thuộc tính `age`
 * - Cách này giúp tạo một bản sao "bỏ đi một trường cụ thể"
 */

console.log(personWithoutAge);
// 👉 Output: { name: 'Alice', city: 'Hanoi' }


// hai hàm tái sử dụng tổng quát và mạnh mẽ trong TypeScript:

// 1. Xóa phần tử đầu tiên khỏi mảng
// removeFirst<T>(arr: T[])

/**
 * Trả về một bản sao của mảng đã loại bỏ phần tử đầu tiên.
 *
 * @template T - Kiểu phần tử của mảng
 * @param {T[]} arr - Mảng đầu vào
 * @returns {T[]} - Mảng mới không chứa phần tử đầu tiên
 */
function removeFirst<T>(arr: T[]): T[] {
    const [, ...rest] = arr; // destructuring: bỏ phần tử đầu tiên
    return rest;
}

// Ví dụ sử dụng
const numbers = [1, 2, 3, 4];
console.log(removeFirst(numbers)); // 👉 [2, 3, 4]

// 2. Xóa một thuộc tính khỏi object
// omit<T, K extends keyof T>(obj: T, key: K)

/**
 * Trả về một object mới đã loại bỏ thuộc tính cụ thể.
 *
 * @template T - Kiểu của object
 * @template K - Tên thuộc tính cần loại bỏ
 * @param {T} obj - Object gốc
 * @param {K} key - Tên thuộc tính cần bỏ đi
 * @returns {Omit<T, K>} - Object mới không có thuộc tính đã chỉ định
 */
function omit<T, K extends keyof T>(obj: T, key: K): Omit<T, K> {
    // destructuring để tách key ra và giữ phần còn lại
    const { [key]: _, ...rest } = obj;
    return rest;
}

// Ví dụ sử dụng
const user = { name: 'Bob', age: 25, city: 'Da Nang' };
console.log(omit(user, 'age')); // 👉 { name: 'Bob', city: 'Da Nang' }

/**
 * Hàm tính tổng của một danh sách các số bất kỳ.
 *
 * @param {...number[]} numbers - Danh sách các số được truyền vào (dưới dạng rest parameter).
 * @returns {number} - Tổng của tất cả các số đã truyền.
 */
const add = (...numbers: number[]): number => {
    /**
     * 📌 Phương thức reduce được dùng để gộp mảng `numbers` thành một giá trị duy nhất – ở đây là tổng.
     *
     * Cú pháp tổng quát:
     * array.reduce((accumulator, currentValue) => newAccumulator, initialValue)
     *
     * Trong đó:
     * - accumulator (ở đây là `curResult`): biến tích lũy giá trị qua mỗi lần lặp
     * - currentValue (ở đây là `curValue`): phần tử hiện tại trong quá trình duyệt mảng
     * - initialValue (ở đây là `0`): giá trị khởi đầu cho accumulator
     *
     * ➤ Mỗi bước sẽ cộng dồn như sau:
     *   0 + 1 = 1
     *   1 + 2 = 3
     *   3 + 3 = 6
     *   6 + 4 = 10
     *   10 + 3.7 = 13.7
     */
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue; // Cộng dồn từng giá trị
    }, 0); // Giá trị khởi đầu là 0
};

// Gọi hàm với các số cụ thể
const addedNumbers = add(1, 2, 3, 4, 3.7);

// In ra kết quả: 13.7
console.log(addedNumbers);


// destructuring
/**
 * Mảng ban đầu chứa các số từ 1 đến 5.
 * @type {number[]}
 */
const numberA = [1, 2, 3, 4, 5];

/**
 * Destructuring mảng `numberA` để gán giá trị cho các biến `number1`, `number2`, và phần còn lại vào `remainingNumber`.
 *
 * - `number1`: nhận phần tử đầu tiên từ mảng `numberA`.
 * - `number2`: nhận phần tử thứ hai từ mảng `numberA`.
 * - `remainingNumber`: sử dụng rest operator (`...`) để gom tất cả các phần tử còn lại vào mảng con.
 *
 * @type {[number, number, number[]]} - Mảng có hai số đầu và phần còn lại là mảng.
 */
const [number1, number2, ...remainingNumber] = numberA;

/**
 * In ra mảng ban đầu và giá trị của `number1`, `number2`.
 *
 * @example
 * console.log(numberA, number1, number2); // Output: [1, 2, 3, 4, 5] 1 2
 */
console.log(numberA, number1, number2);

const {name: userN, age} = person;
console.log (userN, age, person)
