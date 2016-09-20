import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import Board from '../../app/components/Board';
import Lanes from '../../app/components/Lanes';
import Intro from '../../app/components/Intro';

function setup(propOptions = {}) {
	const props = Object.assign({
		id: 1,
		title: 'Test board',
		lanes: []
	}, propOptions);

	const wrapper = shallow(<Board {...props} />);

	return {
		props,
		wrapper
	}
}

describe('<Board />', () => {

	describe('when has active board', () => {
		it('should render the board and it\'s title', () => {
			const { wrapper } = setup();

			expect(wrapper.find('div.board').length).toBe(1);
			expect(wrapper.find('h3').text()).toBe('Test board');
			expect(wrapper.containsMatchingElement(<Lanes />)).toExist();
		});
	});

	describe('when doesn\'t have active board', () => {
		it('should display the Intro component', () => {
			const { wrapper } = setup({id: null});

			const introComponent = wrapper.contains(<Intro />);
			expect(introComponent).toExist();
		});
	});

});
