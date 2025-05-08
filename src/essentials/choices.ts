// enum Role {
//     Admin,
//     Editor,
//     Guest
// }
type Role = 'admin' | 'editor' | 'guest' | 'reader';
let userRole: Role = 'admin'; // 0 => Admin, 1 => Guest

userRole = "guest"

function access(role: Role) {
    // ...
}