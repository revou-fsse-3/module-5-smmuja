import React from "react";
import { render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import Login from ".";
import { useRouter } from "next/router";
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => require('next-router-mock'));

describe('Login', () => {
    const mockSubmit = jest.fn();

    it('Mock the useRouter hook', () => {
        mockRouter.push('/');
    })

    test('Login form renders correctly', () => {
        render(<Login/>)
        const title = screen.getByText('Login');
        expect(title).toBeDefined();

        const emailInput = screen.getByPlaceholderText('Input email');
        expect(emailInput).toBeDefined();

        const passwordInput = screen.getByPlaceholderText('Input password');
        expect(passwordInput).toBeDefined();
    })

    test('Submit with data from input value', () => {
        // render(<Login onSubmit={mockSubmit}/>)
        render(<Login/>)
        const emailInput = screen.getByPlaceholderText('Input email');
        const passwordInput = screen.getByPlaceholderText('Input password');
        const buttonSubmit = screen.getByText('Login');

        act (() => {fireEvent.change(emailInput, {target: { value: 'Abc1@email.com'}});
        fireEvent.change(passwordInput, {target: { value: 'Abc1Abc1'}});
        fireEvent.click(buttonSubmit);});



    })
});