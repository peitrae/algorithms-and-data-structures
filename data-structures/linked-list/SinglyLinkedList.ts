class SinglyNode<T> {
	public value: T;
	public next: SinglyNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList<T> {
	public head: SinglyNode<T> | null;
	public tail: SinglyNode<T> | null;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

  /**
   * Pushes an item into the end of the list.
   */
  push(value: T) {
    const newNode = new SinglyNode(value);

    if(this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /**
   * Removes an item at the end of the list.
   */
  pop() {
    if (!this.head) return null;

    let fast = this.head;
    let slow = this.head;

    while (fast.next) {
      slow = fast;
      fast = fast.next;
    }

    slow.next = null;
    this.tail = slow;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return fast.value;
  }

  /**
   * Add an item to the beginning of the list.
   */
  unshift(value: T) {
    const newNode = new SinglyNode(value);

    newNode.next = this.head;
    this.head = newNode;

    if(this.length === 0) {
      this.tail = newNode;
    }

    this.length++;
  }

  /**
   * Removes an item at the beginning of the list and return the value.
   */
  shift() {
    if (this.head === null) return null;
    else if (this.length === 1) this.tail = null;

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  };

  /**
   * Returns an item at a specific index of the list.
   */
  get(index: number) {}

  /**
   * Add an item at a specifix index of the list.
   */
  insert(value: T, index: number) {}

  /**
   * Removes an item at a specifix index of the list.
   */
  remove(index: number) {}

  /**
   * Reverses order of the items of the list.
   */
  reverse() {}
}
