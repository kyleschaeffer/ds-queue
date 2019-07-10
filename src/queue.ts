/**
 * Queue data structure
 *  - FIFO: "first in first out"
 */
export class Queue<T> {
  /**
   * A queue of items
   */
  private queue: IQueue<T>;

  /**
   * Current queue size
   */
  private length: number;

  /**
   * Queue head (starting) index
   */
  private head: number;

  /**
   * Instantiate a new queue
   */
  constructor(...items: T[]) {
    // New empty queue
    this.queue = {};
    this.length = 0;
    this.head = 0;

    // Queue items
    this.enqueue(...items);
  }

  /**
   * Get queue length
   */
  public get size(): number {
    return this.length;
  }

  /**
   * Get items in the queue
   */
  public get items(): T[] {
    return Object.values(this.queue);
  }

  /**
   * Add item(s) to the queue
   */
  public enqueue(...items: T[]): void {
    items.forEach(item => {
      this.queue[this.head + this.length] = item;
      this.length++;
    });
  }

  /**
   * Get next item in queue
   */
  public dequeue(): T {
    // No items in queue
    if (!this.length) throw new Error('Queue is empty');

    // Dequeue next
    const dequeued = this.queue[this.head];

    // Shift queued items
    delete this.queue[this.head];
    this.length--;
    this.head++;

    // Dequeue next item
    return dequeued;
  }
}

export interface IQueue<T> {
  [index: number]: T;
}
