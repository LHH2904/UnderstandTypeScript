/**
 * Kiểu `DataStore` dùng để đại diện cho một đối tượng có nhiều thuộc tính.
 * - Tên thuộc tính: bất kỳ chuỗi nào.
 * - Giá trị của mỗi thuộc tính: phải là `number` hoặc `boolean`.
 *
 * Đây là cách sử dụng **index signature** trong TypeScript.
 */
type DataStore = {
    [prop: string]: number | boolean;
};

/**
 * Cách viết tương đương với `DataStore` ở trên,
 * nhưng sử dụng utility type `Record<K, T>`.
 * - `Record<string, number | boolean>` nghĩa là:
 *   đối tượng có các key là chuỗi và value là `number | boolean`.
 */
const someObj: Record<string, number| boolean>;

/**
 * Gán giá trị cho `someObj` theo đúng kiểu.
 */
someObj = {
    views: 500,
    isPublished: false,
    // title: 'News' // ❌ Error: string không hợp lệ
};

/**
 * Khởi tạo một đối tượng `store` theo kiểu `DataStore`.
 * Ban đầu rỗng, nhưng có thể thêm bất kỳ thuộc tính nào về sau,
 * miễn là thỏa mãn kiểu: tên là chuỗi, giá trị là số hoặc boolean.
 */
const store: DataStore = {};

/**
 * Thêm thuộc tính `id` vào `store`, với giá trị là số.
 * Hợp lệ vì `id: number` đúng với quy định trong `DataStore`.
 */
store.id = 5;

/**
 * Thêm thuộc tính `isOpen` vào `store`, với giá trị là boolean.
 * Cũng hợp lệ vì boolean nằm trong `number | boolean`.
 */
store.isOpen = false;

// ❌ Nếu thử thêm thuộc tính có giá trị là chuỗi:
// store.name = 'test'; // ❌ Error: Type 'string' is not assignable to type 'number | boolean'


/**
 * Khai báo mảng `roles` gồm các vai trò cụ thể: 'admin', 'guest', 'editor'.
 * - `as const` giúp:
 *   1. Mỗi phần tử có kiểu **literal type** ('admin' chứ không phải string).
 *   2. Biến `roles` trở thành **readonly tuple**, không thể thay đổi nội dung (push/pop bị cấm).
 */
let roles = ['admin', 'guest', 'editor'] as const;

// ❌ Dòng sau sẽ gây lỗi:
// - Vì `roles` là readonly do `as const`
// - `push` không được phép trên `readonly` tuple
// roles.push('max'); // ⛔ Error: Property 'push' does not exist on type 'readonly [...]'

/**
 * Lấy phần tử đầu tiên trong mảng.
 * - `roles[0]` có kiểu `"admin"` (literal type), chứ không phải `string`.
 */
const firstRole = roles[0]; // 👉 kiểu của firstRole là "admin"
// ------------------------------------------------------------------------

/**
 * `satisfies` trong TypeScript được sử dụng để kiểm tra xem một giá trị có thỏa mãn kiểu dữ liệu đã định nghĩa hay không.
 * Điều này không thay đổi kiểu của đối tượng, nhưng đảm bảo rằng đối tượng tuân thủ đúng cấu trúc của kiểu dữ liệu.
 *
 * Ví dụ dưới đây:
 * - `Record<string, number>` có nghĩa là một đối tượng có các key là chuỗi (string) và value là số (number).
 * - `dataEntries` phải tuân theo kiểu này.
 */

const dataEntries = {
    entry1: 0.51,  // entry1 là một số
    entry2: -1.23, // entry2 là một số
} satisfies Record<string, number>;

// `satisfies` giúp kiểm tra nếu `dataEntries` có đúng kiểu `Record<string, number>` không.
// Tuy nhiên, `satisfies` chỉ kiểm tra và không thay đổi kiểu của đối tượng. Nó không ảnh hưởng đến logic bên ngoài.

// ❌ Dòng sau sẽ gây lỗi:
// - `entry3` không được định nghĩa trong `dataEntries` nhưng lại được truy cập
// - Điều này sẽ tạo ra lỗi vì `dataEntries` không có `entry3` (mặc dù TypeScript không cảnh báo khi truy cập thuộc tính không tồn tại).
dataEntries.entry3; // ⛔ Error: Property 'entry3' does not exist on type 'Record<string, number>'
