import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AuthComponent from './AuthComponent';
import { useRouter } from "next/router";
import mockRouter from 'next-router-mock'
import { Component } from 'react';


jest.mock('next/router', () => require('next-router-mock'));


describe ('AuthComponent renders correctly', () => {

    const mockSubmit = jest.fn();
    const token = global?.localStorage?.getItem('token');


    it('Mock the useRouter hook', () => {

        if(!token) {
            mockRouter.push('/auth/login');
            
        }
        return 
        // return (<Component />)
    })



    // test('Expect AuthComponent renders correctly', () => {
    //     const document = render(<AuthComponent />);
    //     expect (document).toBeDefined(); 
    // })
})