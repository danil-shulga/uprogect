import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames(
      'someClass',
      ['class1', 'class2'],
      {},
    )).toBe('someClass class1 class2');
  });
  test('with additional class and mod', () => {
    expect(classNames(
      'someClass',
      ['class1', 'class2'],
      { class3: true, class4: true },
    )).toBe('someClass class1 class2 class3 class4');
  });
  test('with additional class and false mod', () => {
    expect(classNames(
      'someClass',
      ['class1', 'class2'],
      { class3: false, class4: true },
    )).toBe('someClass class1 class2 class4');
  });
  test('without additional class and false mod', () => {
    expect(classNames(
      'someClass',
      [],
      { class3: false, class4: true },
    )).toBe('someClass class4');
  });
});
