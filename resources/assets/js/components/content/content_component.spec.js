import React from 'react';
import { shallow } from 'enzyme';
import Content from './content_component';

describe('Content', () => {
    it('renders the component', () => {
        const wrapper = shallow(<Content />);
        expect(wrapper).toMatchSnapshot();
    });
});