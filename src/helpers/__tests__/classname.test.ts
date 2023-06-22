import { classname } from '../classname';

const payload = {
  'true-classname': true,
  'false-classname': false
};

describe('classname', () => {
  it('concatenates conditionally true classnames', () => {
    const res = classname('base-classname', payload);
    expect(res).toStrictEqual('base-classname true-classname');
  });
});
