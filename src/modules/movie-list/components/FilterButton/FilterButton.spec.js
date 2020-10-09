import React from 'react';
import {render} from '@testing-library/react';

import FilterButton from './FilterButton';

describe('FilterButton', () => {
    test('FilterButton shapshot', () => {
        const {asFragment} = render(<FilterButton/>);
        expect(asFragment(<FilterButton/>)).toMatchSnapshot();
    })
})