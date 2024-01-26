import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button renders correctly', () => {

    test ('expect Button to render correctly', () => {
        const document = render(<Button label={''}>{''}</Button>);
        expect(document).toBeDefined();
    })

    // test ('expect Button to have id', () => {
    //     const document = render(<Button />);
    //     expect(document).toHaveTextContent('Ini button');
    // })
})

// describe('Button', () => {
//     it('renders a button'), () => {
//         render(<Button />)

//         const button = screen.getByRole('button', {'Ini button'})

//         expect(button) .toBeInTheDocument()

//         const buttonId = screen.getByTestId('buttonTest')

//         expect(buttonId) .toBeInTheDocument()
//     }
// })

