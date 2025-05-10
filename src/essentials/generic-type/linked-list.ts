/**
 * Lớp `ListNode<T>` đại diện cho một nút (node) trong danh sách liên kết.
 * - `T` là kiểu dữ liệu generic cho giá trị mà node lưu trữ.
 */
class ListNode<T> {
    next?: ListNode<T>; // Con trỏ đến node kế tiếp (nếu có)
    public value: T;
    /**
     * Khởi tạo một node mới với giá trị được truyền vào.
     * @param value - Giá trị của node, có kiểu generic T
     */
    constructor(value: T) {
        this.value = value;
    }
}

/**
 * Lớp `LinkedList<T>` mô tả một danh sách liên kết đơn (singly linked list).
 * - `T` là kiểu dữ liệu cho các phần tử trong danh sách.
 */
class LinkedList<T> {
    private root?: ListNode<T>; // Node đầu tiên của danh sách
    private tail?: ListNode<T>; // Node cuối cùng của danh sách
    private length = 0; // Số lượng phần tử trong danh sách

    /**
     * Thêm một phần tử vào cuối danh sách.
     * @param value - Giá trị cần thêm, kiểu T
     */
    add(value: T) {
        const node = new ListNode(value); // Tạo node mới

        if (!this.root || !this.tail) {
            // Nếu danh sách rỗng, node mới sẽ là cả root và tail
            this.root = node;
            this.tail = node;
        } else {
            // Nếu danh sách đã có phần tử, nối node mới vào sau tail
            this.tail.next = node; // Tail hiện tại trỏ đến node mới
            this.tail = node;      // Cập nhật tail mới
        }

        this.length++; // Tăng độ dài danh sách
    }

    /**
     * Chèn phần tử vào vị trí chỉ định (theo chỉ số pos).
     * @param value - giá trị cần chèn
     * @param pos - vị trí cần chèn (tính từ 0)
     */
    insertAt(value: T, pos: number) {
        if (pos > -1 && pos <= this.length && this.root) {
            let current = this.root;
            let previous = current;
            let index = 0;
            const node = new ListNode(value);

            if (pos === 0) {
                // Chèn vào đầu danh sách
                node.next = this.root;
                this.root = node;
            } else {
                // Duyệt đến vị trí chèn
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                // Chèn node mới vào vị trí đã duyệt tới
                node.next = current;
                previous.next = node;
            }

            this.length++; // Tăng độ dài danh sách
            return true;
        } else {
            return true; // Trả về true mặc định nếu không hợp lệ (có thể thay bằng false)
        }
    }

    /**
     * Xóa phần tử tại vị trí chỉ định.
     * @param pos - vị trí cần xóa (tính từ 0)
     * @returns node đã bị xóa hoặc null nếu không thành công
     */
    removeAt(pos: number) {
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root;
            let previous: ListNode<T> = current;
            let index = 0;

            if (pos === 0) {
                // Xóa phần tử đầu
                this.root = current.next;
            } else {
                // Duyệt đến vị trí cần xóa
                while (index++ < pos && current.next) {
                    previous = current;
                    current = current.next;
                }
                // Loại bỏ node tại pos
                previous.next = current.next;
            }

            this.length--; // Giảm độ dài danh sách
            return current; // Trả về node đã bị xóa
        } else {
            return null; // Không hợp lệ
        }
    }


    /**
     * Trả về số lượng phần tử hiện có trong danh sách.
     */
    getNumberOfElements() {
        return this.length;
    }

    /**
     * Duyệt và in toàn bộ giá trị trong danh sách liên kết.
     */
    print() {
        let current = this.root; // Bắt đầu từ node đầu tiên

        while (current) {
            console.log(current.value); // In giá trị node hiện tại
            current = current.next;     // Di chuyển sang node tiếp theo
        }
    }
}

// ========================
// Sử dụng danh sách liên kết
// ========================
// Khởi tạo danh sách liên kết số
const numberList = new LinkedList<number>();

// Thêm phần tử vào danh sách
numberList.add(3);       // [3]
numberList.add(10);      // [3, 10]
numberList.add(20);      // [3, 10, 20]

// In danh sách ban đầu
console.log("Danh sách ban đầu:");
numberList.print();      // 👉 3\n10\n20

// 🟡 Chèn số 5 vào vị trí 1
numberList.insertAt(5, 1); // [3, 5, 10, 20]

console.log("\nSau khi insertAt(5, 1):");
numberList.print(); // 👉 3\n5\n10\n20

// 🔴 Xoá phần tử ở vị trí 2
numberList.removeAt(2);  // Xoá 10 => [3, 5, 20]

console.log("\nSau khi removeAt(2):");
numberList.print(); // 👉 3\n5\n20
