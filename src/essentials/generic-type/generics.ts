/**
 * Khai báo một mảng kiểu `Array<string>`
 * - Mảng chỉ chứa các phần tử kiểu chuỗi.
 * - Tương đương với cách viết `string[]`
 */
let names: Array<string> = ['Max', 'Anna'];

/**
 * Định nghĩa một kiểu dữ liệu tổng quát (generic) `DataStore<T>`.
 * - `T` là một biến kiểu (type variable) đại diện cho kiểu giá trị sẽ được truyền vào.
 * - `[key: string]: T`:
 *   + Đối tượng có thể có nhiều thuộc tính tên là chuỗi (string)
 *   + Mỗi thuộc tính có giá trị thuộc kiểu T
 */
type DataStore<T> = {
    [key: string]: T;
}

/**
 * Khởi tạo một biến `store` thuộc kiểu `DataStore<string | boolean>`.
 * - Tức là: `store` có thể có nhiều thuộc tính chuỗi,
 * - Và mỗi thuộc tính đó có thể chứa giá trị là `string` hoặc `boolean`.
 */
let store: DataStore<string | boolean> = {};
// ✅ Thêm thuộc tính có giá trị là chuỗi
store.name = 'Max';
// ✅ Thêm thuộc tính có giá trị là boolean
store.isInstructor = true;

let storeNumber: DataStore<number> = {};
storeNumber.age = 25; // hợp lệ
storeNumber.salary = 5000; // hợp lệ

/**
 * Hàm `merge` là một hàm generic với 2 type parameter: `T` và `U`.
 * - `T` đại diện cho kiểu của đối số `a`
 * - `U` đại diện cho kiểu của đối số `b`
 * - Hàm trả về một mảng gồm 2 phần tử: phần tử đầu là kiểu `T`, phần tử sau là kiểu `U`
 * => Điều này cho phép `merge` kết hợp 2 giá trị có thể có kiểu khác nhau.
 */
function merge<T, U>(a: T, b: U) {
    return [a, b]; // Trả về mảng [T, U]
}

/**
 * Gọi hàm `merge` với cả hai tham số đều là `number`.
 * - `T = number`, `U = number`
 * - Trả về: [1, 2] (kiểu: [number, number])
 */
const ids = merge<number, number>(1, 2); // ✅ [1, 2]

/**
 * Gọi hàm `merge` với kiểu kết hợp `number` và `string`.
 * - `T = number`, `U = string`
 * - Trả về: [1, 'max'] (kiểu: [number, string])
 */
const ids1 = merge<number, string>(1, 'max'); // ✅ [1, 'max']

/**
 * Hàm `mergeObj` là một hàm generic dùng để gộp (merge) hai object có thể khác kiểu.
 *
 * @typeParam T - Kiểu của object đầu tiên (a)
 * @typeParam U - Kiểu của object thứ hai (b)
 *
 * - `T extends object` và `U extends object`: đảm bảo cả hai tham số đều phải là object.
 * - Sử dụng cú pháp spread `{...a, ...b}` để tạo object mới chứa tất cả thuộc tính của cả `a` và `b`.
 * - Kết quả trả về có kiểu `T & U` (intersection type) – kết hợp kiểu của cả hai object.
 */
function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b }; // Trả về object mới chứa các key/value từ cả a và b
}


/**
 * Gọi hàm `mergeObj` với hai object có kiểu khác nhau:
 *
 * - `{ userName: 'Max' }` có kiểu `{ userName: string }`
 * - `{ age: 36 }` có kiểu `{ age: number }`
 *
 * Khi gọi, TypeScript tự suy ra kiểu kết quả là:
 * {
 *   userName: string;
 * } & {
 *   age: number;
 * }
 *
 * 👉 Kết quả là một object chứa cả 2 thuộc tính: `userName` và `age`
 */
const merged = mergeObj({ userName: 'Max' }, { age: 36 });

// ✅ In ra object kết quả đã merge:
// 👉 { userName: 'Max', age: 36 }
console.log(merged);

/**
 * Định nghĩa lớp `User` với kiểu generic `T`.
 * - Kiểu `T` đại diện cho kiểu dữ liệu của thuộc tính `id`.
 * - Cho phép tạo user với `id` là string, number, hoặc bất kỳ kiểu nào khác.
 */
class User<T> {
    public id: T; // Thuộc tính `id` có kiểu T (do người dùng định nghĩa)

    /**
     * Hàm khởi tạo (constructor)
     * @param id - Giá trị định danh cho user, kiểu T
     */
    constructor(id: T) {
        this.id = id; // Gán giá trị tham số id cho thuộc tính id của class
    }
}

/**
 * Tạo một instance mới của `User` với `T = string`.
 * - Tức là `id` có kiểu string.
 */
const user = new User('i1'); // user: User<string>

// Truy cập thuộc tính `id`, kết quả: "i1"
console.log(user.id); // 👉 Output: i1