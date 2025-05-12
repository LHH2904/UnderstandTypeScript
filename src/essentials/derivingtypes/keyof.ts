// 🔸 Định nghĩa một kiểu object `User` với hai thuộc tính:
// - name: kiểu string
// - age: kiểu number
type User = { name: string; age: number };

// 🔸 `UserKeys` là một union type chứa tên các key của `User`
// => tương đương: 'name' | 'age'
type UserKeys = keyof User;

// 🔸 `validKey` chỉ có thể nhận một trong hai chuỗi: 'name' hoặc 'age'
let validKey: UserKeys;

validKey = 'name'; // ✅ hợp lệ
validKey = 'age';  // ✅ hợp lệ
// validKey = 'id';  // ❌ lỗi vì 'id' không phải là key trong kiểu `User`

/**
 * 🔹 Hàm `getProp` là một hàm generic, dùng để truy cập thuộc tính an toàn từ một object.
 *
 * @param obj - đối tượng đầu vào, có kiểu `T`, là một object bất kỳ
 * @param key - tên thuộc tính muốn truy cập, có kiểu `U`, nhưng U bị ràng buộc: `U extends keyof T`
 *              => đảm bảo `key` phải là một key hợp lệ của object `obj`
 *
 * @returns giá trị của thuộc tính `obj[key]`, đảm bảo type-safe
 */
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key]; // Truy cập thuộc tính với key động

    // Kiểm tra tránh trường hợp null hoặc undefined
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value');
    }

    return val; // Trả về giá trị đã kiểm tra
}

// 🔹 Sử dụng hàm `getProp` với một object cụ thể
const data = {
    id: 1,
    isStored: false,
    value: [1, -5, 10]
};

// 👉 getProp sẽ suy luận: T = typeof data, U = 'isStored'
// => trả về giá trị: false (kiểu boolean)
const isStored = getProp(data, 'isStored'); // ✅ OK

// 🔹 Dữ liệu kiểu User
const user = { name: 'John', age: 12 };

// 👉 getProp sẽ suy luận: T = typeof user, U = 'age'
// => trả về số: 12
const val = getProp(user, 'age'); // ✅ OK
