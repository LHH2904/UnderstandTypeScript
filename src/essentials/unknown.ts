/**
 * Hàm `process` nhận một giá trị `val` có kiểu `unknown` và kiểm tra xem giá trị này có phương thức `log` hay không.
 * Nếu có, hàm sẽ gọi phương thức `log` trên đối tượng đó.
 *
 * @param {unknown} val - Giá trị có thể là bất kỳ kiểu dữ liệu nào.
 *
 * @returns {void} - Hàm không trả về giá trị nào.
 */
function process(val: unknown) {
    /**
     * Kiểm tra các điều kiện sau để đảm bảo rằng `val` là một đối tượng hợp lệ và có phương thức `log`:
     * - `typeof val === 'object'`: Kiểm tra xem `val` có phải là một đối tượng hay không.
     * - `!!val`: Đảm bảo rằng `val` không phải là `null` hoặc `undefined`.
     * - `'log' in val`: Kiểm tra xem `val` có thuộc tính `log`.
     * - `typeof val.log === 'function'`: Kiểm tra xem thuộc tính `log` có phải là một hàm không.
     */
    if (
        typeof val === 'object' &&      // Kiểm tra kiểu `object`
        !!val &&                        // Đảm bảo `val` không phải `null` hoặc `undefined`
        'log' in val &&                 // Kiểm tra `val` có thuộc tính `log`
        typeof val.log === 'function'   // Kiểm tra `log` là một hàm
    ) {
        /**
         * Nếu tất cả các điều kiện trên đều đúng, gọi phương thức `log()` của đối tượng `val`.
         */
        val.log();
    }
}
