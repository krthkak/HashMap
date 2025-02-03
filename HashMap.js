import { LinkedList } from "./LinkedList.js";

export class HashMap{

    constructor(loadfactor,capacity){
        this.loadfactor = loadfactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity);
    }

    getMaxSize(){
        return Math.floor(this.capacity*this.loadfactor);
    }

    getBucketFilledSize(){
        return this.buckets?.reduce((acc,item) =>{
            if(item) 
                return ++acc;
        },0);
    }

    hash(key){
        let hashCode = 0;


        //Made it simple for testing
        // const primeNumber = 31;
        // for (let i = 0; i < key.length; i++) {
        //     hashCode = primeNumber * hashCode + key.charCodeAt(i);
        //     hashCode %= this.capacity
        // }



        return key[0].charCodeAt(0)%this.capacity;
    }

    set(key,value){
        const index = this.hash(key)
        this.checkIndex(index);
        
        
        if(this.getBucketFilledSize()>this.getMaxSize())
            this.resizeHashMap()
        if(!this.buckets[index]){
            this.buckets[index] = new LinkedList(key,value);
        }else{
            this.buckets[index].insert(key,value);
        }
    }

    resizeHashMap(){
        const existingEntries = this.entries();
        this.capacity += this.capacity;
        this.clear();
        existingEntries.forEach(item => {
            this.set(item[0],item[1])
        });
    }


    
    get(key){
        const index = this.hash(key)
        this.checkIndex(index);
        return this.buckets[index].get(key);
    }

    has(key){
        const index = this.hash(key)
        this.checkIndex(index);
        return this.buckets[index].has(key);
    }

    remove(key){
        const index = this.hash(key)
        this.checkIndex(index);
        this.buckets[index].remove(key);
    }

    length(){
        let length = 0;
        this.buckets.forEach(item=>{
            if(item)
                length +=  item.length;
        })
        return length;
    }
    clear(){
        this.buckets = new Array(this.capacity);
    }
    keys(){
        let keys = [];
        this.buckets.forEach(item=>{
            if(item)
                keys = keys.concat(item.keys());
        })
        return keys;
    }
    values(){
        let values = [];
        this.buckets.forEach(item=>{
            if(item)
                values = values.concat(item.values());
        })
        return values;
    }
    entries(){
        let entries = [];
        this.buckets.forEach(item=>{
            if(item)
                entries = entries.concat(item.entries());
        })
        return entries;
    }

    checkIndex(index){
        if (index < 0 || index >= this.buckets?.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }
}