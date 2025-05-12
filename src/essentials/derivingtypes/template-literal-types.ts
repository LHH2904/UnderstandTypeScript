const mainUserName = 'Max';

const greeting = `Hi there, ${mainUserName}.`;// "Hi there, Max."

/**
 * Định nghĩa kiểu quyền đọc (ReadPermissions), với hai giá trị:
 * - 'no-read': không có quyền đọc
 * - 'read': có quyền đọc
 */
type ReadPermissions = 'no-read' | 'read';

/**
 * Định nghĩa kiểu quyền ghi (WritePermissions), với hai giá trị:
 * - 'no-write': không có quyền ghi
 * - 'write': có quyền ghi
 */
type WritePermissions = 'no-write' | 'write';

/**
 * Dùng template literal types để kết hợp quyền đọc và quyền ghi thành một kiểu
 * Ví dụ: 'read-write', 'no-read-no-write', v.v.
 * Mỗi kết quả là một chuỗi kết hợp giữa `ReadPermissions` và `WritePermissions`
 */
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

/**
 * Định nghĩa kiểu `DataFile`, đại diện cho một tệp dữ liệu với hai thuộc tính:
 * - `data`: chuỗi chứa dữ liệu của tệp
 * - `permissions`: quyền truy cập tệp, có thể là một trong các giá trị của `FilePermissions`
 */
type DataFile = {
    data: string; // Dữ liệu dưới dạng chuỗi
    permissions: FilePermissions; // Quyền truy cập tệp
};

/**
 * Định nghĩa kiểu `DataFileEventNames` sử dụng template literal types
 * Tạo ra các tên sự kiện từ các thuộc tính của `DataFile` và thêm hậu tố 'Changed'.
 * Kết quả sẽ là các sự kiện: 'dataChanged', 'permissionsChanged'
 */
type DataFileEventNames = `${keyof DataFile}Changed`;

/**
 * Dùng mapped type để tạo ra một kiểu `DataFileEvents`, trong đó mỗi thuộc tính
 * là một tên sự kiện được tạo từ `DataFileEventNames` và mỗi sự kiện là một hàm không tham số, không trả về gì.
 * Ví dụ: `dataChanged: () => void` và `permissionsChanged: () => void`
 */
type DataFileEvents = {
    [Key in DataFileEventNames]: () => void; // Mỗi thuộc tính có giá trị là một hàm không tham số và không trả về gì
};

// Ví dụ về việc sử dụng kiểu `DataFileEvents`
const fileEvents: DataFileEvents = {
    dataChanged: () => {
        console.log("Data has changed!");
    },
    permissionsChanged: () => {
        console.log("Permissions have changed!");
    }
};

// Gọi sự kiện 'dataChanged'
fileEvents.dataChanged(); // In ra: "Data has changed!"

// Gọi sự kiện 'permissionsChanged'
fileEvents.permissionsChanged(); // In ra: "Permissions have changed!"
