// ✅ Chữ ký overload số 1: nhận vào string, trả về string
function getLength(val: string): string;

// ✅ Chữ ký overload số 2: nhận vào mảng, trả về number
function getLength(val: any[]): number;

// ✅ Phần triển khai thực tế (bắt buộc chỉ có 1)

function getLength(val: string | any[]) {
    // Kiểm tra nếu val là chuỗi
    if (typeof val === 'string') {
        // Dùng split(' ') để tách chuỗi thành mảng từ (cách bởi dấu cách)
        const numberOfWords = val.trim().split(/\s+/).length;
        return `${numberOfWords} words`; // Trả về số từ
    }

    // Nếu không phải chuỗi, thì chắc chắn là mảng (any[])
    return val.length; // Trả về độ dài của mảng
}

const numOfWords = getLength('does this work?');
// 👉 Chuỗi có 3 từ ⇒ Kết quả: "3 words"

const numItems = getLength(['Sport','Cookies']);
// 👉 Mảng có 2 phần tử ⇒ Kết quả: 2

console.log(numOfWords); // "3 words"
console.log(numItems);   // 2