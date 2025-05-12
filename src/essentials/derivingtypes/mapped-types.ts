/**
 * Định nghĩa kiểu cho một tập hợp các phép toán học.
 * Mỗi thuộc tính là một hàm nhận vào hai số và trả về một số.
 */
type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

/**
 * Mapped type: Dựa trên kiểu `T` đầu vào, tạo ra một kiểu mới
 * trong đó mỗi key của `T` sẽ có giá trị kiểu `number`.
 *
 * @template T - Một kiểu object bất kỳ (thường là tập các hàm)
 * @example
 * Nếu T là:
 * {
 *   add: (a: number, b: number) => number;
 *   subtract: (a: number, b: number) => number;
 * }
 *
 * Thì Results<T> sẽ là:
 * {
 *   add: number;
 *   subtract: number;
 * }
 */
type Results<T> = {
    [Key in keyof T]?: number;
};

/**
 * Đối tượng thực thi các phép toán, tuân theo kiểu `Operations`.
 */
const mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
};

const mathResult: Results<Operations> = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(5, 3)
};

console.log(mathResult)
