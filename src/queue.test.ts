import { Queue } from './queue';

test('new queue is instantiated', () => {
  const q = new Queue<number>();
  expect(q.items).toEqual([]);
});

test('item added to queue', () => {
  const q = new Queue<string>();
  q.add('one');
  q.add('two');
  expect(q.items).toEqual(['one', 'two']);
});

test('item is dequeued', () => {
  const q = new Queue<string>();
  q.add('one');
  q.add('two');
  q.add('three');
  const dequeued = q.dequeue();
  expect(dequeued).toBe('one');
  expect(q.items).toEqual(['two', 'three']);
});

test('queue has length', () => {
  const q = new Queue<string>();
  q.add('one');
  q.add('two');
  expect(q.length).toBe(2);
});

test('error on removing from empty queue', () => {
  const q = new Queue<string>();
  q.add('one');
  q.dequeue();
  expect(() => q.dequeue()).toThrowError();
});
