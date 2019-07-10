/**
 * Queue data structure
 *  - FIFO: "first in first out"
 */
export class Queue<T> {
  /**
   * A queue of items
   */
  private queue: T[];

  /**
   * Instantiate a new queue
   */
  constructor() {
    // New empty queue
    this.queue = [];
  }

  /**
   * Get queue length
   */
  public get length(): number {
    return this.queue.length;
  }

  /**
   * Get items in the queue
   */
  public get items(): T[] {
    return this.queue;
  }

  /**
   * Add an item to the queue
   */
  public add(item: T): void {
    this.queue.push(item);
  }

  /**
   * Get the next item in queue
   */
  public dequeue(): T {
    // No items in queue
    if (!this.length) throw new Error('Queue is empty');

    // Dequeue next item
    return this.queue.shift();
  }
}
