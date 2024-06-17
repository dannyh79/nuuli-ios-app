import * as utils from '../utils';

describe(`toLocale()`, () => {
  it(`returns string of counts with word in singular form`, () => {
    const counts = 1;
    expect(utils.toLocale(counts, 'word', counts > 1)).toEqual('1 word');
  });

  it(`returns string of counts with word in plural form`, () => {
    const counts = 2;
    expect(utils.toLocale(counts, 'word', counts > 1)).toEqual('2 words');
  });
});
