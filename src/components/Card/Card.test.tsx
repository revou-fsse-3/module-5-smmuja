import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '.';


describe ('Card renders correctly', () => {

    test('Expect Card renders correctly', () => {
        const document = render(<Card>{''}</Card>);
        expect (document).toBeDefined(); 
    })
})