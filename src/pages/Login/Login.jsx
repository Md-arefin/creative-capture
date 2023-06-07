import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    // {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ */}

    return (
        <div className='text-center'>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/*  */}

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
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password"
                                            {...register("password", { required: true })}
                                            className="input input-bordered" />
                                        <p className=' mt-4 text-white'>
                                            New to Creative Capture? <Link to='/sign-up'>Please SignUp</Link>
                                        </p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-yellow-500 border-0 text-lg font-semibold">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
            </form>
        </div>
    );
};

export default Login;