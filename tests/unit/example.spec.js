// import { shallowMount } from '@vue/test-utils';
// import HelloWorld from '@/components/HelloWorld.vue';
//
// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });
import { isSet } from '../../src/store/helpers/helpers';

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
