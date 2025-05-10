/**
 * Sự khác biệt giữa `type` và `interface` trong TypeScript.
 * @summary
 * - `type` và `interface` đều được sử dụng để định nghĩa kiểu dữ liệu, nhưng có sự khác biệt về cách sử dụng và tính linh hoạt.
 */

/**
 * Điểm khác biệt giữa `type` và `interface`.
 *
 * | **Điểm khác biệt**                          | **`type`**                                                   | **`interface`**                                               |
 * |---------------------------------------------|-------------------------------------------------------------|--------------------------------------------------------------|
 * | **Kết hợp các kiểu**                        | Có thể sử dụng phép toán `&` (AND) để kết hợp các kiểu (`type A & B`) | Sử dụng `extends` để kế thừa và kết hợp nhiều interface      |
 * | **Mở rộng sau khi khai báo**                | Không thể mở rộng hoặc thêm thuộc tính sau khi đã định nghĩa | Có thể mở rộng thêm thuộc tính bằng cách kế thừa (`extends`)  |
 * | **Dễ sử dụng cho các sự kết hợp phức tạp**  | Thích hợp hơn với các kiểu kết hợp phức tạp hoặc kiểu sử dụng toán tử `&` hoặc `|` | Thường dùng để mô tả các đối tượng có cấu trúc rõ ràng và có thể mở rộng |
 */

/**
 * `type` là cách đơn giản để kết hợp các kiểu phức tạp thông qua phép toán `&` (AND) hoặc `|` (OR), hoặc thậm chí là sử dụng kiểu hàm, tuple, union, v.v.
 *
 * Ví dụ:
 * ```typescript
 * type FileData = { path: string; content: string };
 * type Status = { isOpen: boolean; errorMsg?: string };
 * type AccessedFileData = FileData & Status; // Kết hợp FileData và Status
 * ```
 *
 * Trong ví dụ trên, `AccessedFileData` sẽ có tất cả các thuộc tính của cả `FileData` và `Status`, nhờ vào phép toán `&`.
 */

/**
 * `interface` là cách để định nghĩa một cấu trúc đối tượng và có thể mở rộng qua kế thừa.
 *
 * Ví dụ:
 * ```typescript
 * interface FileData { path: string; content: string };
 * interface Status { isOpen: boolean; errorMsg?: string };
 * interface AccessedFileData extends FileData, Status {}; // Kế thừa FileData và Status
 * ```
 *
 * Ở đây, `AccessedFileData` sẽ có tất cả các thuộc tính của cả `FileData` và `Status`, nhờ vào từ khóa `extends`.
 */

/**
 * Lưu ý:
 * - `type` thường được sử dụng khi bạn cần kết hợp nhiều kiểu phức tạp mà không cần khả năng kế thừa, hoặc cần một sự kết hợp linh hoạt hơn.
 * - `interface` thích hợp hơn khi bạn cần định nghĩa các đối tượng với cấu trúc rõ ràng và có thể mở rộng trong tương lai.
 */

/**
 * Ví dụ minh họa về sự khác biệt giữa `type` và `interface`:
 *
 * `type` (Kết hợp bằng phép toán `&`):
 * ```typescript
 * type FileData = { path: string; content: string };
 * type Status = { isOpen: boolean; errorMsg?: string };
 * type AccessedFileData = FileData & Status;
 * ```
 *
 * `interface` (Kết hợp bằng `extends`):
 * ```typescript
 * interface FileData { path: string; content: string };
 * interface Status { isOpen: boolean; errorMsg?: string };
 * interface AccessedFileData extends FileData, Status {}
 * ```
 */


type FileData = {
    path: string;
    content: string;
};

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

type Status = {
    isOpen: boolean;
    errorMsg?: string;
}

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

interface FileData1 {
    path: string;
    content: string;
};

interface DatabaseData1  {
    connectionUrl: string;
    credentials: string;
}

interface Status1 {
    isOpen: boolean;
    errorMsg?: string;
}

interface AccessedFileData1 extends FileData1, Status1 {}
interface AccessedDatabaseData1 extends DatabaseData1, Status1 {}