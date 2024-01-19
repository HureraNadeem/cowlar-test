import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasicButton from '../../components/button/basic-button';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../../context';


function LogIn() {
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const { setIsLoggedIn, updateUser } = useContext(UserContext);

    const onSubmit = async (data: any) => {
        setSubmitLoading(true);
        try {
            const user = await loginUser(data.email, data.password);
            console.log(user);
            if (user) {
                localStorage.setItem('COWLAR_TOKEN', user.token);
                setIsLoggedIn(true);
                updateUser(user.user);
                setTimeout(() => { //delay for the toast to be readable
                    navigate('/');
                }, 750);
            }
        } catch (error) {
            setSubmitLoading(false);
            console.log('error', error);
        }
        setSubmitLoading(false);
    };

    return (
        <>
            <Toaster />
            <div
                className='custom-bg-gradient flex min-h-screen items-center justify-center px-4'
                style={{
                    backgroundImage:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url(https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/c11340ec-4211-4482-a9a0-f0ccd4d9e940/PK-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg)',
                }}
            >
                <div className='w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0'>
                    <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                            Log in
                        </h1>
                        <form
                            className='space-y-4 md:space-y-6'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <label
                                    htmlFor='email'
                                    className='mb-2 block text-sm font-medium text-gray-900 '
                                >
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm'
                                    placeholder='name@service.com'
                                    {...register('email', { required: 'Email is required' })}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='password'
                                    className='mb-2 block text-sm font-medium text-gray-900 '
                                >
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='••••••••'
                                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 sm:text-sm'
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                />
                            </div>

                            <div className='text-sm text-red-500'></div>

                            <div className='flex items-center justify-center'>
                                <BasicButton
                                    isLoading={submitLoading}
                                    text='Log in'
                                    loadingText='Loggin in ...'
                                    type='submit'
                                />
                            </div>

                            <p className='text-sm font-light text-gray-500 '>
                                Don't have an account?{' '}
                                <Link
                                    to='/signup'
                                    className='font-medium text-primaryRed hover:underline opacity-[0.9]'
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;
