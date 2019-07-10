import { Queue } from './queue';

test('new queue is instantiated', () => {
  const q = new Queue<number>(1, 2, 3);
  expect(q.items).toEqual([1, 2, 3]);
});

test('items are enqueued', () => {
  const q = new Queue<string>('one', 'two');
  q.enqueue('three');
  expect(q.items).toEqual(['one', 'two', 'three']);
  expect(q.size).toBe(3);
});

test('item is dequeued', () => {
  const q = new Queue<string>('one', 'two', 'three');
  const dequeued = q.dequeue();
  expect(dequeued).toBe('one');
  expect(q.items).toEqual(['two', 'three']);
  expect(q.size).toBe(2);
});

test('error on removing from empty queue', () => {
  const q = new Queue<string>();
  expect(() => q.dequeue()).toThrowError();
});
