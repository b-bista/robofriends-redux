import { shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './Card';

it('tests that card is rendered once', () => {
    expect.assertions(1);
    expect(shallow(<Card />)).toMatchSnapshot();
})

