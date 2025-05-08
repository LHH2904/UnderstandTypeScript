/**
 * Hàm `generateError` dùng để ném ra một lỗi với thông điệp tùy chỉnh.
 *
 * @param {string} [msg] - Thông điệp lỗi, có thể là một chuỗi hoặc không được cung cấp (undefined).
 * @throws {Error} - Ném ra một lỗi với thông điệp `msg`.
 */
function generateError(msg?: string) {
    // Ném lỗi mới với thông điệp được truyền vào qua `msg`
    throw new Error(msg);
}

/**
 * Ví dụ 1: Gọi hàm `generateError` mà không cung cấp thông điệp lỗi.
 *
 * Kết quả: Lỗi sẽ được ném ra với thông điệp mặc định là "undefined".
 */
generateError();
// => sẽ ném lỗi: Error: undefined

/**
 * Ví dụ 2: Gọi hàm `generateError` và truyền thông điệp lỗi.
 *
 * Kết quả: Lỗi sẽ được ném ra với thông điệp là chuỗi đã được truyền vào.
 */
generateError("Something went wrong");
// => sẽ ném lỗi: Error: Something went wrong

/**
 * Kiểu `User` định nghĩa cấu trúc của đối tượng người dùng.
 *
 * @typedef {Object} User
 * @property {string} name - Tên của người dùng, thuộc tính bắt buộc.
 * @property {number} age - Tuổi của người dùng, thuộc tính bắt buộc.
 * @property {'admin' | 'guest'} [role] - Vai trò của người dùng, thuộc tính tuỳ chọn, có thể là 'admin' hoặc 'guest'.
 */
type User = {
    name: string;  // Tên người dùng, kiểu dữ liệu là string.
    age: number;   // Tuổi người dùng, kiểu dữ liệu là number.
    role?: 'admin' | 'guest';  // Vai trò người dùng, có thể là 'admin' hoặc 'guest', là thuộc tính tuỳ chọn.
}

// Ví dụ về đối tượng người dùng hợp lệ:
const user1: User = {
    name: "Alice",
    age: 30,
    role: "admin"
};

// Ví dụ về đối tượng người dùng hợp lệ mà không có `role`:
const user2: User = {
    name: "Bob",
    age: 25
};

// Đối tượng không hợp lệ (thiếu `name` hoặc `age`):
// const user3: User = { name: "Charlie" };  // Lỗi: thiếu `age`.

/**
 * Biến `input` được gán giá trị chuỗi rỗng.
 *
 * @type {string}
 */
let input = '';

/**
 * Sử dụng toán tử `||` (Logical OR) để kiểm tra giá trị của `input`.
 * Nếu `input` là một giá trị falsy (ví dụ: chuỗi rỗng, `null`, `undefined`, `false`),
 * giá trị mặc định sẽ là `false`.
 *
 * @type {boolean}
 * Giá trị của `didProvideInput` sẽ là `false` vì `input` là một giá trị falsy (chuỗi rỗng).
 */
const didProvideInput = input || false; // Kết quả: false

/**
 * Sử dụng toán tử `??` (Nullish Coalescing) để kiểm tra giá trị của `input`.
 * Toán tử này chỉ kiểm tra xem giá trị của `input` có phải là `null` hoặc `undefined` hay không.
 * Nếu `input` không phải là `null` hoặc `undefined`, nó sẽ trả về giá trị của `input`.
 *
 * @type {string | boolean}
 * Giá trị của `didProvideInput1` sẽ là giá trị của `input` (chuỗi rỗng) vì `input` không phải là `null` hay `undefined`.
 */
const didProvideInput1 = input ?? false; // Kết quả: ''

// Các kết quả:
// didProvideInput = false (do `||` kiểm tra tất cả các giá trị falsy)
// didProvideInput1 = '' (do `??` chỉ kiểm tra `null` và `undefined`)
