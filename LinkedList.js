import {Node} from './Node.js'

export class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    insert(key, value) {
        const node = new Node(key, value);
        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    remove(key) {
        if (!this.head) return;

        if (this.head.key === key) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            this.length--;
            return;
        }

        let current = this.head;
        let prev = null;

        while (current) {
            if (current.key === key) {
                prev.next = current.next;
                if (!current.next) this.tail = prev;
                this.length--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    toString() {
        let current = this.head;
        let output = '';
        while (current) {
            output += `--> ${current.value} `;
            current = current.next;
        }
        return output.trim();
    }
}