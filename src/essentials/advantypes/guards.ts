// ==========================================
// Ví dụ 1: Union type với discriminated union
// ==========================================

/**
 * Định nghĩa kiểu dữ liệu cho nguồn là file.
 * - `type: 'file'`: literal type để phân biệt trong union
 * - `path`: đường dẫn đến file
 */
type FileSource = {
    type: 'file';
    path: string;
};

/**
 * Định nghĩa kiểu dữ liệu cho nguồn là database.
 * - `type: 'db'`: literal type
 * - `connectionUrl`: chuỗi kết nối cơ sở dữ liệu
 */
type DBSource = {
    type: 'db';
    connectionUrl: string;
};

/**
 * Union type kết hợp cả hai loại nguồn: file hoặc database
 */
type Source = FileSource | DBSource;

/**
 * Type guard giúp kiểm tra nếu Source là FileSource
 * TypeScript sẽ tự động narrow kiểu bên trong hàm if
 */
function isFile(source: Source): source is FileSource {
    return source.type === 'file';
}

/**
 * Hàm xử lý dữ liệu từ nguồn đầu vào.
 * Tùy theo loại nguồn (file hoặc db), xử lý khác nhau.
 */
function loadData(source: Source) {
    if (isFile(source)) {
        // TypeScript biết source là FileSource ở đây
        console.log(`📁 Đang mở file: ${source.path}`);
    } else {
        // source còn lại chắc chắn là DBSource
        console.log(`🗄️  Kết nối DB tại: ${source.connectionUrl}`);
    }
}

// Demo gọi hàm với từng loại nguồn
const fileSource: FileSource = { type: 'file', path: 'some/path/to/file.csv' };
const dbSource: DBSource = { type: 'db', connectionUrl: 'some-connection-url' };

loadData(fileSource); // 👉 📁 Đang mở file: some/path/to/file.csv
loadData(dbSource);   // 👉 🗄️  Kết nối DB tại: some-connection-url


// ==========================================
// Ví dụ 2: Union type giữa hai class (User | Admin)
// ==========================================

/**
 * Lớp mô tả người dùng thường.
 */
class User {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    join() {
        console.log(`${this.name} đã tham gia hệ thống.`);
    }
}

/**
 * Lớp mô tả admin với danh sách quyền.
 */
class Admin {
    public permissions: string[];
    constructor( permissions: string[] ) {
        this.permissions = permissions;
    }

    scan() {
        console.log(`🔍 Admin đang quét hệ thống với quyền: ${this.permissions.join(', ')}`);
    }
}

/**
 * Union type giữa 2 lớp: User hoặc Admin
 */
type Entity = User | Admin;

/**
 * Hàm xử lý `Entity` bằng cách phân biệt theo `instanceof`
 * Dùng được vì đây là class-based type
 */
function init(entity: Entity) {
    if (entity instanceof User) {
        entity.join(); // TypeScript biết là User
    } else {
        entity.scan(); // Mặc định còn lại là Admin
    }
}

// Demo:
const user = new User('Max');
const admin = new Admin(['read', 'restore']);

init(user);   // 👉 Max đã tham gia hệ thống.
init(admin);  // 👉 🔍 Admin đang quét hệ thống với quyền: read, restore
