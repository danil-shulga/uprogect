function count(arr: (string | number | object)[]): number {
  const set = new Set(arr);
  return set.size;
}

console.log(count(['a', 'b', 'a', { a: 1 }, { a: 1 }, 'c', 1, 2, 1]));
