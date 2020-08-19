import {areCardsASet} from '../../../src/store/areCardsASet';

describe('isSet', () => {
  it('returns true when finds a set', () => {
    expect(areCardsASet([{
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
    expect(areCardsASet([{
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
