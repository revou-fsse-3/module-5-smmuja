// 'use server'

import { Input, Text, Button } from '../../../components';
// import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import axios, { AxiosError } from "axios";
// import { useNavigate } from "react-router-dom";
import { AppContext, ContextType } from "../../../providers/Provider";
import { redirect } from 'next/navigation';
import Link from 'next/link';
// import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/router';

interface DataProps {   
        name: string;
        email: string;
        password: string;

}

const Subscribe = () => {

    // const navigate = useNavigate();
    const route = useRouter ();

    const context = useContext<ContextType>(AppContext)
    const setOpen = context?.setOpen
    const setMessage = context?.setMessage


    const handleError = (message: string) => {
        setOpen?.(true)
        setMessage?.(message)
    }


    // const [users, setUsers] = useState<DataProps[]>([]);
    const [selectedUser] = useState<DataProps>();
    // const [step, setStep] = useState<number>(1);
    

    const formMik = useFormik ({
        initialValues: selectedUser ?? {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: async (data: DataProps) => {
            try {
                await axios.post('https://mock-api.arikmpt.com/api/user/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                });
    
                // revalidatePath ('/auth/subscribe')
                // redirect('/auth/login')
                route.push('/auth/login')


            } catch (error) {
                const err = error as AxiosError as any
                const errors = err.response?.data?.errors
                if(Array.isArray(errors)) {
                    return
                }
                handleError(errors)
            }
            
        },
        
        // onSubmit: (values, {resetForm}) => {
        //     setUsers([...users, values])
        //     resetForm()
        // },
        
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required().min(
                8,'at least 8 character') 

        }),
        enableReinitialize: true
    });



    return(

        <div>

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Become a Member</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
        <form onSubmit={formMik.handleSubmit}>

            <fieldset>


                <div>
                    <Text>{'Name'}</Text>
                    <Input className='block border-neutral-400 border' 
                    name={'name'} 
                    placeholder='Input your name'
                    value={formMik.values.name}
                    onChange={formMik.handleChange('name')}/>
                    {
                        formMik.errors.name && (
                            <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.name}</Text>
                        )
                    }
                </div>
                <div>
                    <Text>{'Email'}</Text>
                    <Input className='block border-neutral-400 border' 
                    name={'email'} 
                    placeholder='Input email'
                    value={formMik.values.email}
                    onChange={formMik.handleChange('email')}/>
                    {
                        formMik.errors.email && (
                            <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.email}</Text>
                        )
                    }
                </div>
                <div>
                    <Text>{'Password'}</Text>
                    <Input className='block border-neutral-400 border' 
                    name={'password'}
                    placeholder='Input password'
                    value={formMik.values.password}
                    onChange={formMik.handleChange('password')}
                    />
                    {
                        formMik.errors.password && (
                            <Text className='p-2 mb-4 text-sm text-red-800'>{formMik.errors.password}</Text>
                        )
                    }
                </div>
                <div className=' space-x-2 space-y-2' >
                <Button label={'Register'} type='submit' className='bg-gray-500' />
                </div>
            </fieldset>



            </form>


            <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?  
            <Link href={'/auth/login'} className="font-semibold leading-6 text-black hover:text-indigo-500">  Login</Link>
            </p>
        </div>
        </div>

    </div>

    )
}

export default Subscribe;