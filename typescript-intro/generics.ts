class Queue<T> {
    private data = [];

    add(item: T){
        this.data.push(item);
    }

    remove(){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('luis');
nameQueue.add('andrei');

const numberQueu = new Queue<number>();
numberQueu.add(10);

//Decorators


