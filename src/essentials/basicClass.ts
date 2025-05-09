/**
 * Lớp `User` đại diện cho một người dùng với tên, tuổi, sở thích và mật khẩu.
 */
class User {
    /**
     * Tên của người dùng.
     * @type {string}
     */
    public name: string;

    /**
     * Tuổi của người dùng, chỉ có thể truy cập từ trong class hoặc class con.
     * @type {number}
     */
    protected age: number;

    /**
     * Mật khẩu của người dùng (chỉ truy cập từ bên trong class).
     * @type {string}
     */
    private password: string;

    /**
     * Mảng các sở thích của người dùng.
     * @type {string[]}
     */
    public hobbies: string[] = [];

    /**
     * Hàm khởi tạo (constructor) tạo ra một đối tượng User mới.
     *
     * @param {string} name - Tên người dùng.
     * @param {number} age - Tuổi người dùng.
     * @param {string} password - Mật khẩu người dùng.
     */
    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password; // Mật khẩu được lưu trữ trong `private` và không thể truy cập từ bên ngoài.
    }

    /**
     * Gửi lời chào và hiển thị tuổi của người dùng.
     */
    public greet(): void {
        console.log('My age: ' + this.age);
    }

    /**
     * Lấy tuổi hiện tại của người dùng.
     * @returns {number} Tuổi của người dùng.
     */
    public getAge(): number {
        return this.age;
    }

    /**
     * Cập nhật tuổi người dùng nếu hợp lệ.
     * @param {number} newAge - Tuổi mới cần được cập nhật.
     */
    public setAge(newAge: number): void {
        if (newAge > 0) {
            this.age = newAge;
        }
    }

    /**
     * Xác thực mật khẩu người dùng.
     * @param {string} enteredPassword - Mật khẩu được nhập vào.
     * @returns {boolean} Trả về true nếu mật khẩu khớp.
     */
    public checkPassword(enteredPassword: string): boolean {
        return enteredPassword === this.password;
    }
}

/**
 * Lớp `Admin` kế thừa từ `User` và có thể truy cập thuộc tính protected `age`.
 */
class Admin extends User {
    /**
     * Danh sách quyền của admin.
     * @type {string[]}
     */
    public permissions: string[];

    /**
     * @param {string} name - Tên admin.
     * @param {number} age - Tuổi admin.
     * @param {string[]} permissions - Quyền của admin.
     * @param {string} password - Mật khẩu admin.
     */
    constructor(name: string, age: number, permissions: string[], password: string) {
        super(name, age, password);
        this.permissions = permissions;
    }

    /**
     * Hiển thị thông tin chi tiết của admin.
     */
    public showDetails(): void {
        console.log(`${this.name} is ${this.age} years old and has permissions: ${this.permissions.join(', ')}`);
    }

    /**
     * Admin xác thực mật khẩu của mình.
     * @param {string} enteredPassword - Mật khẩu nhập vào.
     * @returns {boolean} Trả về true nếu mật khẩu của admin khớp.
     */
    public checkAdminPassword(enteredPassword: string): boolean {
        return this.checkPassword(enteredPassword); // Sử dụng phương thức của class cha để kiểm tra mật khẩu
    }
}

// =======================
// 🧪 Sử dụng class
// =======================

const max = new User('Max', 36, 'password123');
const fred = new User('Fred', 39, '1234password');

// ✅ In ra danh sách sở thích (mảng hobbies)
max.hobbies = ['Reading', 'Travelling']; // Thêm sở thích cho Max
fred.hobbies = ['Gaming', 'Cooking']; // Thêm sở thích cho Fred

console.log(max.hobbies);  // In ra sở thích của Max
console.log(fred.hobbies); // In ra sở thích của Fred

// ✅ Gọi phương thức greet để in tuổi
max.greet();  // Gọi greet của Max, sẽ in "My age: 36"
fred.greet(); // Gọi greet của Fred, sẽ in "My age: 39"

// ✅ Sử dụng setter để thay đổi tuổi vì age là protected
max.setAge(37);
console.log('Max tuổi mới là: ' + max.getAge());

// ✅ Xác thực mật khẩu người dùng
console.log(max.checkPassword('password123')); // true
console.log(fred.checkPassword('wrongpassword')); // false

// ✅ Sử dụng admin class
const admin = new Admin('Alice', 40, ['edit', 'delete'], 'admin123');
admin.showDetails(); // ✅ Truy cập được `age` vì nó là `protected`
console.log(admin.checkAdminPassword('admin123')); // true
console.log(admin.checkAdminPassword('wrongpass')); // false
