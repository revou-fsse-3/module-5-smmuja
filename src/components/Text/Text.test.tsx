import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Text from '.';


describe ('Text renders correctly', () => {

    test('Expect Text renders correctly', () => {
        const document = render(<Text children={''} />);
        expect (document).toBeDefined(); 
    })
})