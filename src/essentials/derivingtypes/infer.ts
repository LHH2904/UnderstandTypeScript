/**
 * Hàm cộng hai số, trả về tổng của chúng.
 *
 * @param a - Số thứ nhất
 * @param b - Số thứ hai
 * @returns Tổng của a và b
 */
function add(a: number, b: number) {
    return a + b;
}

/**
 * Lấy kiểu của hàm `add` sử dụng toán tử `typeof`.
 * `AddFn` có kiểu: (a: number, b: number) => number
 */
type AddFn = typeof add;

/**
 * Conditional type dùng để trích xuất kiểu trả về (return type) của một hàm.
 *
 * @template T - Một kiểu hàm
 * @returns - Nếu T là một hàm (`(...args: any[]) => something`), thì kết quả là `something` (tức kiểu trả về)
 *            Ngược lại (nếu không phải hàm) thì trả về `never`
 *
 * @example
 * ReturnValueType<() => number>      // 👉 number
 * ReturnValueType<string>            // 👉 never (vì không phải là hàm)
 */
type ReturnValueType<T> =
    T extends (...args: any[]) => infer RV ? RV : never;

/**
 * Kiểu `AddFnReturnValueType` sẽ là kiểu trả về của hàm `add`,
 * tức là `ReturnValueType<AddFn>` → `number`
 */
type AddFnReturnValueType = ReturnValueType<AddFn>; // ✅ number
