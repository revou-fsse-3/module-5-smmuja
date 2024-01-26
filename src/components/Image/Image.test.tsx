import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Image from '.';
import Img from '.';



describe ('Image renders correctly', () => {

    test('Expect Image renders correctly', () => {
        const document = render(<Img  />);
        expect (document).toBeDefined(); 
    })
})