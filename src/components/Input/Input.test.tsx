import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input from '.';


describe ('Input renders correctly', () => {

    test('Expect Input renders correctly', () => {
        const document = render(<Input />);
        expect (document).toBeDefined(); 
    })
})