class Queue<T> {
    private items: T[] = [];

    public enqueue(item: T) {
        this.items.push(item);
    }

    public dequeue() {
        this.items.pop();
    }
}