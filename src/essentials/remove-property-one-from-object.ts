/**
 * Đối tượng mẫu với hai thuộc tính
 * @type {Object}
 */
const a = { one: 1, two: "Two" };

/**
 *
 * Destructuring kết hợp với Rest (...) để loại bỏ một thuộc tính (one) khỏi một object
 * Tách thuộc tính `one` ra khỏi đối tượng `a` và gom các thuộc tính còn lại vào `rest`
 * @param {Object} a - Đối tượng gốc có thuộc tính `one` và `two`
 * @returns {Object} - Đối tượng mới chứa các thuộc tính còn lại (sau khi tách `one`)
 */

const { one, ...rest } = a;

// In giá trị thuộc tính `one`
console.log(one);  // 👉 1

// In đối tượng `rest` chứa các thuộc tính còn lại
console.log(rest); // 👉 { two: "Two" }

// Đối tượng `a` vẫn giữ nguyên, không bị thay đổi
console.log(a);    // 👉 { one: 1, two: "Two" }
