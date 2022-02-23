import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    const { asFragment } = render(<About />);
    //FIRST
    it('renders', () => {
        render(<About />);
    });
        //SECOND
    it('matches snapshot DOM node structure', () => {
        // render About
    });
    expect(asFragment()).toMatchSnapshot();
})
