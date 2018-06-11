import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../React-components/NotFoundPage';

test('should render the not found page', () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
