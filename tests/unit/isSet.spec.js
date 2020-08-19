import { isSet } from '../../src/store/helpers/isSet';

describe('isSet', () => {
  it('returns true when finds a set', () => {
    expect(isSet([{
      shape: 'diamond',
      color: 'red',
      number: 2,
      shading: 'open'
    }, {
      shape: 'diamond',
      color: 'red',
      number: 3,
      shading: 'open'
    }, {
      shape: 'diamond',
      color: 'red',
      number: 1,
      shading: 'open'
    }])).toBeTruthy();
  });

  it('returns false when cards arent a set', () => {
    expect(isSet([{
      shape: 'diamond',
      color: 'red',
      number: 2,
      shading: 'open'
    }, {
      shape: 'diamond',
      color: 'red',
      number: 3,
      shading: 'open'
    }, {
      shape: 'diamond',
      color: 'red',
      number: 3,
      shading: 'open'
    }])).toBeFalsy();
  });
});
