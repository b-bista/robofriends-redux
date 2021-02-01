import { shallow, mount, render} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('tests that cardList is rendered once', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'John John',
            email: 'john@gmail.com'
        }
    ]

    expect.assertions(1);
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})