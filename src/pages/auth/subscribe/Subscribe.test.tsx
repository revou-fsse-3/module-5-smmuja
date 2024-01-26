import React from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import Subscribe from ".";
import { useRouter } from "next/router";
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'));

describe('Subscribe', () => {
    const mockSubmit = jest.fn();

    it('Mock the useRouter hook', () => {
        mockRouter.push('/auth/login');
    })

    test('Subscribe form renders correctly', () => {
        render(<Subscribe/>)
        // const title = screen.getByText('Subscribe');
        const title = screen.getByText('Register');
        expect(title).toBeDefined();

        const nameInput = screen.getByPlaceholderText('Input your name');
        expect(nameInput).toBeDefined();

        const emailInput = screen.getByPlaceholderText('Input email');
        expect(emailInput).toBeDefined();

        const passwordInput = screen.getByPlaceholderText('Input password');
        expect(passwordInput).toBeDefined();
    })

    test('Submit with data from input value', () => {
        // render(<Login onSubmit={mockSubmit}/>)
        render(<Subscribe/>)
        const nameInput = screen.getByPlaceholderText('Input your name');
        const emailInput = screen.getByPlaceholderText('Input email');
        const passwordInput = screen.getByPlaceholderText('Input password');
        // const buttonSubmit = screen.getByText('Subscribe');
        const buttonSubmit = screen.getByText('Register');

        fireEvent.change(nameInput, {target: { value: 'Abc1'}});
        fireEvent.change(emailInput, {target: { value: 'Abc1@email.com'}});
        fireEvent.change(passwordInput, {target: { value: 'Abc1Abc1'}});
        fireEvent.click(buttonSubmit);



    })
});