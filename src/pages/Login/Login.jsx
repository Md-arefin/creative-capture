import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    const { googleSignIn , signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        setError('');
        
        console.log(data)

        signIn(data.email , data.password)
        .then(result =>{ 
            const loggedUser = result.user;
            navigate(from, {replace : true});
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error.message)
            setError(error.message)
        })
    };

    console.log(watch("example")); // watch input value by passing the name of it

    // {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ */}



    const handleGoogle = () => {
        setError('')
        
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className='text-center'>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="hero min-h-screen">

                    <div className="hero-content flex-col lg:flex-row gap-10">

                        <div>
                            <Player
                                autoplay
                                loop
                                src="https://assets10.lottiefiles.com/private_files/lf30_fw6h59eu.json"
                                className='w-full'
                            >
                                <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>

                        <div>

                            <div className='text-3xl text-center font-bold mb-10'><h2>Please Login</h2></div>


                            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-sky-900 ">
                                <div className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="text" placeholder="email"
                                            {...register("email", { required: true })}
                                            className="input input-bordered" />
                                        {errors.email && <span className='text-red-600 font-bold text-lg mt-2'>Email field is required</span>}
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password"
                                            {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                            })}
                                            className="input input-bordered" />
                                        {errors.password?.type === 'required' && <span className='text-red-600 font-bold text-lg mt-2'>Password is required</span>}

                                        {errors.password?.type === 'minLength' && <span className='text-red-600 font-bold text-lg mt-2'>Password must have 6 characters</span>}

                                        {errors.password?.type === 'pattern' && <p className='text-red-600 font-bold text-lg mt-2'>Password must have one uppercase, one number, one spacial character. </p>}
                                        <p className='text-red-600 font-bold text-lg mt-2'>
                                            {error}
                                        </p>
                                    </div>

                                    <p className=' mt-4 text-white'>
                                        New to Creative Capture? <Link to='/sign-up'>Please SignUp</Link>
                                    </p>

                                    <div className="form-control mt-6">
                                        <input className="btn bg-yellow-500 border-0 text-lg font-semibold" type="submit" value="Login" />
                                    </div>

                                    <div className='flex items-center gap-5 px-5 mt-5'>
                                        <div className='h-[1px] bg-yellow-400 w-[50px]'></div>

                                        <p className=' text-center text-white'> Login with social accounts</p>

                                        <div className='h-[1px] bg-yellow-400 w-[50px]'></div>
                                    </div>

                                    <button onClick={handleGoogle} className="mx-auto my-5 btn bg-yellow-500 border-0 text-lg font-semibold w-full"><FcGoogle className='text-xl' /> Login With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;