function add(a:number,b:number): number {
    return a + b;
}


/**
 * Kiểu trả về đặc biệt
 * Ghi một thông điệp ra console.
 * Không có return
 * Hàm này không trả về gì (kiểu void),
 * chỉ thực hiện tác vụ phụ là in ra thông điệp.
 * Thường dùng trong các trường hợp debug hoặc ghi log.
 *
 * @param message - Thông điệp cần ghi ra console.
 */
function log(message:string):void {
    console.log(message);
}

/**
 * Ghi lỗi ra console và ném ra một ngoại lệ (exception).
 *
 * Hàm này không bao giờ kết thúc một cách bình thường, vì luôn ném ra lỗi.
 * Do đó, kiểu trả về là `never` — biểu thị rằng hàm không trả về bất kỳ giá trị nào và không hoàn tất được.
 *
 * never dùng cho các hàm không bao giờ trả về
 * Hàm luôn ném lỗi.
 * Hàm chạy vòng lặp vô tận.
 * @param errorMessage - Thông điệp lỗi cần ghi và ném ra dưới dạng exception.
 * @throws Error - Ném ra một đối tượng Error với thông điệp đã cung cấp.
 */
function logAndThrow(errorMessage: string): never {
    console.error(errorMessage);
    throw new Error(errorMessage);
}

// function as type
/**
 * In một thông điệp ra console
 * @param msg - Thông điệp dạng chuỗi cần được in
 */
const logMsg = (msg: string) => {
    console.log(msg);
};

/**
 * Hàm thực hiện một công việc nào đó và gọi callback khi xong
 * @param cb - Một hàm callback nhận một chuỗi và không trả về gì (void)
 */
function performJob(cb: (m:string) => void) {
    // ...
    // Gọi callback sau khi hoàn tất công việc
    cb('Job done');
}
// Gọi performJob với hàm logMsg làm callback
performJob(log)

/**
 * Định nghĩa kiểu dữ liệu User
 * - name: tên người dùng, kiểu string
 * - age: tuổi người dùng, kiểu number
 * - greet: phương thức trả về một chuỗi
 */
type User = {
    name: string;
    age: number;
    greet: () => string;
}

/**
 * Tạo một đối tượng user theo kiểu User
 *
 * - name: 'Max'
 * - age: 39
 * - greet: hàm in ra "Hello there" và trả về tên của user
 *
 * @type {User}
 */
let user: User = {
    name: 'Max',
    age: 39,

    /**
     * In lời chào và trả về tên người dùng
     *
     * @returns {string} Tên người dùng
     */
    greet() {
        console.log('Hello there');
        return this.name;
    }
}
