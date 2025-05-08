/**
 * Mảng chứa hai đối tượng, mỗi đối tượng có thuộc tính `one` và `two`
 * @type {{ one: number, two: string }[]}
 */
const b = [
    {one: 1, two: "Two"},
    {one: 11, two: "TwoTwo"}
];

/**
 * Tạo một mảng mới bằng cách loại bỏ thuộc tính `one` khỏi mỗi đối tượng trong mảng `b`
 *
 * Destructuring + rest được dùng để "loại bỏ" một thuộc tính cụ thể (one) khỏi mỗi phần tử trong mảng object.
 * - Sử dụng destructuring để lấy `one` ra và gom các thuộc tính còn lại vào `rest`
 * - Trả về một mảng các đối tượng chỉ còn lại thuộc tính `two`
 *
 * @returns {{ two: string }[]} Mảng các đối tượng chỉ còn lại thuộc tính `two`
 */
const result = b.map(({one, ...rest}) => rest);

// In ra mảng kết quả sau khi đã loại bỏ `one` khỏi từng đối tượng
console.log(result); // 👉 [ { two: 'Two' }, { two: 'TwoTwo' } ]
