import { isEmptyObject } from '../object';

test('isEmptyObject', () => {
  it('returns true if empty object', () => {
    const res = isEmptyObject({});
    expect(res).toStrictEqual(true);
  });

  it('returns false if non-empty object', () => {
    const res = isEmptyObject({ a: 'a', b: 'b' });
    expect(res).toStrictEqual(false);
  });
});
