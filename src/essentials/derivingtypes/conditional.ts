/**
 * Định nghĩa kiểu `StringArray` là một mảng chứa các phần tử kiểu `string`.
 */
type StringArray = string[];

/**
 * Mapped type `ElementType` để lấy kiểu của phần tử trong mảng `T`.
 * Dùng `T[number]` để trích xuất kiểu của phần tử tại chỉ số bất kỳ trong mảng `T`.
 *
 * @template T - Kiểu của mảng (phải là mảng kiểu `any[]`).
 * @example
 * Khi `T = string[]`, `ElementType<T>` sẽ trả về kiểu `string`.
 * Khi `T = number[]`, `ElementType<T>` sẽ trả về kiểu `number`.
 */
type ElementType<T extends any[]> = T[number];

/**
 * Kiểu `Example1` sẽ lấy kiểu phần tử của mảng `StringArray`.
 * `StringArray` có kiểu là `string[]`, vì vậy kiểu phần tử của mảng này là `string`.
 */
type Example1 = ElementType<StringArray>; // Kết quả: `string`

// Ví dụ 1: Khai báo một biến có kiểu `string[]`
let stringArray: StringArray = ['hello', 'world'];

/**
 * Định nghĩa biến `text` là một số `1`.
 * Khi dùng `typeof text`, ta lấy kiểu của biến `text`, trong trường hợp này là `number`.
 *
 * Tuy nhiên, khi dùng `ElementType<typeof text>`, bạn sẽ gặp lỗi vì `text` không phải là một mảng.
 */
let text = 1;

/**
 * Kiểu `Example2` dùng `ElementType<typeof text>`, nhưng vì `text` là một giá trị đơn, không phải mảng,
 * nên `ElementType<typeof text>` không hợp lệ và sẽ gây ra lỗi biên dịch.
 *
 * @example
 * Khi `text` là số (`1`), `ElementType<typeof text>` không thể hoạt động vì không phải là mảng.
 */
// type Example2 = ElementType<typeof text>; // Lỗi: `text` không phải là mảng.

/**
 * Sửa lỗi bằng cách thay `text` thành một mảng:
 * - `text` là mảng kiểu `number[]`.
 * - `ElementType<typeof text>` sẽ trả về kiểu của phần tử trong mảng (là `number`).
 */
let textArray = [1, 2, 3];

/**
 * Kiểu `Example2` sẽ trả về kiểu phần tử trong mảng `textArray`, trong trường hợp này là `number`.
 */
type Example2 = ElementType<typeof textArray>; // Kết quả: `number`

/**
 * Ví dụ về việc truy xuất kiểu phần tử trong một mảng với kiểu `ElementType`.
 * `textArray` có kiểu `number[]`, vì vậy `ElementType<typeof textArray>` sẽ là `number`.
 */
console.log(typeof textArray[0]); // In ra: `number`

/**
 * Kiểu `GetElementType<T>` sử dụng conditional type (kiểu điều kiện).
 *
 * Mục tiêu: lấy kiểu của phần tử bên trong mảng `T` nếu `T` là một mảng.
 *
 * - Nếu `T` mở rộng (extends) `any[]`, thì kết quả là `T[number]` (kiểu phần tử trong mảng).
 * - Ngược lại, nếu `T` không phải là mảng, thì kết quả là `never`.
 *
 * @template T - Kiểu đầu vào cần kiểm tra (có thể là mảng hoặc không).
 * @example
 * GetElementType<string[]> // 👉 string
 * GetElementType<number>   // 👉 never
 */
type GetElementType<T> = T extends any[] ? T[number] : never;

/**
 * Ví dụ: áp dụng `GetElementType` với `StringArray`.
 * Vì `StringArray` là `string[]`, nên kết quả là `string`.
 */
type Example3 = GetElementType<StringArray>; // ✅ string

/**
 * Khai báo một biến số nguyên thông thường.
 */
let text = 1;

/**
 * Ví dụ: áp dụng `GetElementType` với kiểu của biến `text`.
 * Vì `text` là `number` (không phải mảng), nên kết quả là `never`.
 */
type Example4 = GetElementType<typeof text>; // ❌ never (vì không phải mảng)

/**
 * Kiểu định nghĩa một người có họ và tên đầy đủ.
 */
type FullNamePerson = {
    firstName: string;
    lastName: string;
};

/**
 * Kiểu điều kiện: nếu T mở rộng FullNamePerson thì trả về string, ngược lại là never.
 *
 * @template T - Kiểu được kiểm tra.
 * @example
 * FullNameOrNothing<{ firstName: string, lastName: string }> // => string
 * FullNameOrNothing<{}>                                      // => never
 */
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

/**
 * Hàm lấy họ tên đầy đủ từ một object nếu nó có đủ firstName và lastName.
 *
 * @param person - Một object bất kỳ.
 * @returns Chuỗi họ tên nếu object đó có đủ thông tin, ngược lại sẽ báo lỗi.
 *
 * Kiểu trả về sẽ là `string` nếu `person` là `FullNamePerson`,
 * còn nếu không đúng kiểu thì kết quả sẽ là `never`.
 */
function getFullname<T extends object>(
    person: T
): FullNameOrNothing<T> {
    if (
        'firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName
    ) {
        // Ép kiểu thủ công vì TypeScript không suy ra đúng kiểu trong if-block
        return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
    }

    throw new Error('No first name and /or last name found');
}

// ❌ name1: never → vì object truyền vào không có firstName và lastName nên kiểu trả về là never
const name1 = getFullname({});

// ✅ name2: string → vì object đúng kiểu FullNamePerson
const name2 = getFullname({ firstName: 'Hieu', lastName: 'Le' });

console.log(name2); // "Hieu Le"
