/**
 * Interface mô tả các thuộc tính và phương thức cần có cho người dùng có thể đăng nhập.
 * @interface Authenticatable
 */
interface Authenticatable {
    /** Địa chỉ email của người dùng */
    email: string;

    /** Mật khẩu của người dùng */
    password: string;

    /** Phương thức để đăng nhập người dùng */
    login(): void;

    /** Phương thức để đăng xuất người dùng */
    logout(): void;
}

/**
 * Interface `Authenticatable` tiếp tục được mở rộng (merged declaration).
 * Thêm thuộc tính `role` cho người dùng.
 */
interface Authenticatable {
    role: string;
}

// ✅ Interface sẽ tự động merge lại thành một interface duy nhất.
const user1: Authenticatable = {
    email: 'test@example.com',
    password: 'abc123',
    role: 'admin',

    login() {
        console.log(`${this.email} logged in with role ${this.role}`);
    },

    logout() {
        console.log(`${this.email} logged out`);
    }
};

user1.login(); // 👉 "test@example.com logged in with role admin"



/**
 * Kiểu cơ bản của người dùng.
 */
type BaseUser = {
    email: string;
    password: string;
    login(): void;
    logout(): void;
};

/**
 * Kiểu mở rộng thêm vai trò.
 */
type WithRole = {
    role: string;
};

/**
 * Kết hợp hai kiểu lại thành một kiểu đầy đủ.
 */
type FullUser = BaseUser & WithRole;

const user2: FullUser = {
    email: 'admin@example.com',
    password: 'securePass',
    role: 'superadmin',

    login() {
        console.log(`${this.email} logged in as ${this.role}`);
    },

    logout() {
        console.log(`${this.email} logged out`);
    }
};

user2.login(); // 👉 "admin@example.com logged in as superadmin"


/**
 * Lớp `AuthenticatableUser` triển khai interface `Authenticatable`.
 */
class AuthenticatableUser implements Authenticatable {
    // Khai báo thuộc tính theo interface
    email: string;
    password: string;
    role: string;

    /**
     * Khởi tạo người dùng có thể xác thực.
     * @param userName - tên người dùng (không nằm trong interface nhưng có thể dùng thêm).
     * @param email - địa chỉ email.
     * @param password - mật khẩu.
     * @param role - vai trò người dùng.
     */
    constructor(public userName: string, email: string, password: string, role: string) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    /**
     * Đăng nhập người dùng.
     */
    login(): void {
        console.log(`${this.userName} (${this.email}) logged in with role: ${this.role}`);
    }

    /**
     * Đăng xuất người dùng.
     */
    logout(): void {
        console.log(`${this.userName} logged out.`);
    }
}

// =======================
// 🧪 Sử dụng class
// =======================

const user = new AuthenticatableUser('Jane', 'jane@example.com', '123456', 'editor');

user.login();  // 👉 "Jane (jane@example.com) logged in with role: editor"
user.logout(); // 👉 "Jane logged out."

/**
 * Interface kế thừa từ Authenticatable và thêm thuộc tính 'role' cho người dùng.
 * @interface AuthenticatableAdmin
 * @extends Authenticatable
 */
interface AuthenticatableAdmin extends Authenticatable {
    /** Vai trò của người dùng, có thể là 'admin' hoặc 'superadmin' */
    role: 'admin' | 'superadmin';
}

/**
 * Đối tượng người dùng có quyền admin.
 * @type {AuthenticatableAdmin}
 */
const adminUser: AuthenticatableAdmin = {
    email: 'admin@example.com',
    password: 'securePass',
    role: 'admin',
    /**
     * Đăng nhập với vai trò admin.
     */
    login() {
        console.log('Admin logged in');
    },
    /**
     * Đăng xuất người dùng admin.
     */
    logout() {
        console.log('Admin logged out');
    }
};