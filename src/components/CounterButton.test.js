import { shallow, mount, render} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('tests that counterbutton is rendered', () => {
    expect.assertions(1);
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const wrapper = shallow(<CounterButton />);
    
    expect.assertions(1);
    //id is important because it targets the element
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state().count).toEqual(1);
})