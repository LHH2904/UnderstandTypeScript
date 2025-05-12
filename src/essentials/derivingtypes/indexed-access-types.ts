/**
 * Cú pháp `T[number]` trong TypeScript:
 *
 * - Dùng để **lấy kiểu của phần tử** trong một mảng.
 * - Nếu `T` là một mảng, ví dụ: `string[]`, thì `T[number]` sẽ là `string`.
 * - Nếu `T` là một type alias cho một mảng đối tượng, `T[number]` sẽ lấy kiểu của từng phần tử trong mảng đó.
 *
 * Ví dụ:
 * type MyArray = number[];
 * type Element = MyArray[number]; // Element sẽ có kiểu: number
 *
 * Tương tự:
 * type Users = { id: string, name: string }[];
 * type User = Users[number]; // User sẽ có kiểu: { id: string, name: string }
 */

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
};

type Perms = AppUser['permissions'];
type Perm = Perms[number];

/**
 * Kiểm tra xem quyền (permission) có phải là quyền Admin hay không
 * @param {Perm} permission - Một đối tượng quyền từ danh sách permissions
 * @returns {boolean} Trả về true nếu là quyền Admin, ngược lại false
 */
function isAdmin(permission: Perm): boolean {
    return permission.title === 'Admin';
}

// Ví dụ sử dụng:
const user: AppUser = {
    name: 'Alice',
    age: 28,
    permissions: [
        { id: 'p1', title: 'Admin', description: 'Full access' },
        { id: 'p2', title: 'Editor', description: 'Can edit content' }
    ]
};

user.permissions.forEach(p => {
    console.log(`${p.title} is admin?`, isAdmin(p));
});
