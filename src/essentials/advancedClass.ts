/**
 * Lớp `User` đại diện cho một người dùng với tên và họ.
 * Bao gồm các phương thức truy cập và cập nhật tên, cũng như thuộc tính tĩnh.
 */
class User {
    /**
     * Khởi tạo đối tượng User với tên riêng và họ.
     * `_firstName` được để private, `lastName` để protected để lớp con có thể truy cập.
     *
     * @param {string} _firstName - Tên riêng của người dùng.
     * @param {string} lastName - Họ của người dùng.
     */
    constructor(private _firstName: string, protected lastName: string) {}

    /**
     * Trả về tên riêng của người dùng.
     * @returns {string}
     */
    get firstName(): string {
        return this._firstName;
    }

    /**
     * Cập nhật tên riêng của người dùng.
     * @param {string} name
     */
    set firstName(name: string) {
        this._firstName = name;
    }

    /**
     * Trả về tên đầy đủ của người dùng.
     * @returns {string}
     */
    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    /**
     * Thuộc tính tĩnh định danh người dùng.
     * @type {string}
     */
    static eid: string = 'USER';

    /**
     * Phương thức tĩnh in ra thông điệp chào mừng.
     */
    static great(): void {
        console.log('Hello World!');
    }
}

/**
 * Lớp `Employee` kế thừa từ `User`, đại diện cho một nhân viên.
 * Thêm thuộc tính `jobTitle` và phương thức `work()`.
 */
class Employee extends User {
    /**
     * @param {string} firstName - Tên riêng.
     * @param {string} lastName - Họ (kế thừa và sử dụng từ lớp cha).
     * @param {string} jobTitle - Chức danh công việc.
     */
    constructor(firstName: string, lastName: string, public jobTitle: string) {
        super(firstName, lastName);
    }

    /**
     * In ra thông tin công việc của nhân viên.
     */
    work(): void {
        console.log(`${this.firstName} ${this.lastName} is working as a ${this.jobTitle}`);
    }
}

// 🧪 Sử dụng class
const employee = new Employee('Jane', 'Smith', 'Designer');
console.log(employee.fullName); // 👉 "Jane Smith"
employee.work();                // 👉 "Jane Smith is working as a Designer"
console.log(Employee.eid);      // 👉 "USER"
Employee.great();               // 👉 "Hello World!"


/**
 * Lớp trừu tượng `Person` đại diện cho một con người.
 * Được thiết kế để làm lớp nền tảng cho các lớp con kế thừa.
 */
abstract class Person {
    constructor(public name: string) {}

    /**
     * Phương thức trừu tượng yêu cầu lớp con bắt buộc phải triển khai.
     */
    abstract describe(): void;

    /**
     * Phương thức chung dùng để chào hỏi.
     */
    greet(): void {
        console.log(`Hi, I'm ${this.name}`);
    }
}

/**
 * Lớp `Student` kế thừa từ `Person`, đại diện cho một sinh viên.
 * Phải triển khai phương thức `describe()`.
 */
class Student extends Person {
    describe(): void {
        console.log(`${this.name} is a student.`);
    }
}

// 🧪 Sử dụng abstract class
const student = new Student('John');
student.describe(); // 👉 "John is a student."
student.greet();    // 👉 "Hi, I'm John"
