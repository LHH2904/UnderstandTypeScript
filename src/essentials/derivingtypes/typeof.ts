// Khai báo một biến hằng với giá trị chuỗi
const userName = 'Max';

// 👉 typeof trong JavaScript (runtime): sẽ in ra 'string'
console.log(typeof userName); // 'string'

// 👉 typeof trong TypeScript (compile-time): dùng để lấy kiểu từ biến
// Kiểu của userName là "Max" (chuỗi cụ thể, gọi là string literal type)
type UserName = typeof userName;

// Kiểu này tương đương với:
// type UserName = "Max"

// Ví dụ 1:
const userAge = 30;

// Dùng typeof để tạo một kiểu mới từ biến đã có
type AgeType = typeof userAge; // 👉 AgeType là 30 (literal number)

let myAge: AgeType = 30; // ✅ hợp lệ
// let myAge: AgeType = 25; ❌ lỗi, vì AgeType là kiểu đúng bằng 30

// 🔸 Đây là một object có nhiều thuộc tính khác nhau
const settings = {
    difficulty: 'easy',         // string
    minLevel: 10,               // number
    didStart: false,            // boolean
    players: ['John', 'Jane']   // string[]
};

/**
 * Hàm `loadData` nhận một tham số `s` với kiểu là typeof settings.
 * - `typeof settings` sẽ tự động suy ra kiểu dữ liệu từ object `settings`.
 * - Điều này giúp bạn không cần viết lại kiểu thủ công.
 */
function loadData(s: typeof settings) {
    // ✅ Truy cập đúng tên biến là `s`, không phải `settings`
    console.log('Difficulty:', s.difficulty);
    console.log('Players:', s.players.join(', '));
}

// ✅ Gọi hàm với `settings`, hợp lệ vì đúng kiểu đã định nghĩa
loadData(settings);
