/**
 * Biến `a` có thể chứa một chuỗi hoặc null
 * Sử dụng Union Type: `string | null`
 *
 * @type {null | string}
 */
let a: null | string;

/**
 * Gán giá trị chuỗi cho biến `a`
 */
a = 'Hi';

// ... có thể có các đoạn xử lý khác ở đây

/**
 * Gán lại giá trị null cho biến `a`
 * (ví dụ: để reset hoặc biểu thị giá trị không còn tồn tại)
 */
a = null;


/**
 * Biến `a` có thể chứa một chuỗi hoặc undefined
 * Sử dụng Union Type: `string | undefined`
 *
 * @type {undefined | string}
 */
let b: undefined | string;

/**
 * Gán giá trị chuỗi cho biến `a`
 */
b = 'Hi';

// ... có thể có các đoạn xử lý khác ở đây

/**
 * Gán lại giá trị undefined cho biến `a`
 * (ví dụ: để biểu thị rằng biến chưa có giá trị)
 */
b = undefined;

/**
 * **null**: Là một giá trị "đặc biệt" được sử dụng để biểu thị rằng một biến không có giá trị.
 * **undefined**: Là giá trị mặc định của một biến chưa được gán giá trị. Khi bạn khai báo một biến mà không gán giá trị, nó tự động có giá trị là `undefined`.
 *
 * **Cách sử dụng trong TypeScript**:
 * - `undefined` thường được dùng khi bạn muốn biểu thị rằng một biến chưa được khởi tạo hoặc chưa có giá trị rõ ràng.
 * - `null` dùng để biểu thị rằng một giá trị đã được gán nhưng không còn bất kỳ giá trị hợp lệ nào (ví dụ: một object có thể bị "nullified").
 */
