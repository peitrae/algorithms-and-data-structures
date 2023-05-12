
/**
 * Array-based stack.
 */
class Stack<T> {
  private _items: T[] = [];

  /**
   * Pushes an item onto the top of the stack.
   */
  push(item: T) {
    this._items.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   */
  pop() {
    return this._items.pop();
  }

  /**
   * Determines if the stack is empty.
   */
  isEmpty() {
    return this.length() === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   */
  peek() {
    if (this.isEmpty()) return null;

    const lastIdx = this._items.length - 1;

    return this._items[lastIdx];
  }

  /**
   * Returns the number of items in the stack.
   */
  length() {
    return this._items.length;
  }
}