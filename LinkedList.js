import {Node} from './Node.js';

export class LinkedList {
    constructor(key,value) {
        this.head = key ? new Node(key, value):null;
        this.tail = this.head;
        this.length = key? 1 : 0;
    }

    insert(key, value) {
        const node = new Node(key, value);
        if (!this.head) {
            this.head = node;
        }

        //if the key is already in the LL
        if(this.has(key)){
            let current = this.head;
            while(current){
                if(current.key == key){
                    current.value = value;
                    return;
                }
                current = current.next;
            }
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

    has(key){
        let current = this.head;

        while(current){
            if(current.key == key){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    get(key){
        let current = this.head;

        while(current){
            if(current.key == key){
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    keys(){
        return this.getSpecifics('key')
    }

    values(){
        return this.getSpecifics('value')
    }

    entries(){
        return this.getSpecifics('entries')
    }

    getSpecifics(type){
        const specificsList = [];
        let current = this.head;

        while(current){
            if(type!='entries')
                specificsList.push(current[type])
            else
                specificsList.push([current.key,current.value])
            current = current.next;
        }
        return specificsList;
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