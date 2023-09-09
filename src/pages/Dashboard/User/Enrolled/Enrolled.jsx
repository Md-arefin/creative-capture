import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React, { useContext } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import Swal from 'sweetalert2';
import useEnrolled from '../../../../components/Hook/useEnrolled';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Enrolled = () => {
    const [payment, refetch] = useEnrolled();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const review = form.review.value;
        const ratings = form.rating.value;

        const reviewData = {
            name,
            review,
            ratings,
            image: user.photoURL,
        }

        fetch('https://summer-lens-learning-server-md-arefin.vercel.app/add-review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thanks for your feedback',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    return (
        <div>
            <div className='mx-auto my-16  '>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Enrolled Classes
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[300px]'>
                </div>
            </div>

            <div className="overflow-x-auto max-w-full mb-16 border-black border-2 rounded-lg my-10">
                <table className="table">
                    {/* head */}

                    <thead>

                        <tr>
                            <th className='text-lg text-black'>
                                #
                            </th>
                            <th className='text-lg text-black text-center'>Date</th>
                            <th className='text-lg text-black text-center'>Classes</th>
                            <th className='text-lg text-black '>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            payment?.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    <div>

                                        {item.itemNames.map((names, i) => <li key={i}>{names}</li>)}
                                    </div>

                                </td>
                                <td className='text-center font-semibold text-lg'>
                                    ${item.price}
                                </td>
                            </tr>)
                        }


                        {/* row 2 */}
                    </tbody>
                </table>
            </div>

            <div className='mt-16'>
                <h3 className='text-2xl md:text-4xl font-semibold text-center'>Share Your Experience</h3>

                <div className='flex flex-col lg:flex-row gap-5 items-center justify-between px-5 my-16'>

                    <div className='md:ml-52  md:w-[50%] lg:w-[27%]'>
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/0e6f5e0f-4ff6-4507-b8d8-778effeeca99/SFLjO6GQwx.json"
                            className='w-[100%] '
                        >
                            <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>


                    <div className="card w-full lg:w-1/2 shadow-2xl bg-slate-500">

                        <form onSubmit={handleReview} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">User Name</span>
                                </label>
                                <input type="text"

                                    placeholder="User Name..." defaultValue={user ? user.displayName : ''} name='name' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Feedback</span>
                                </label>
                                <textarea placeholder="feedback here..." name="review" rows="4" className="input input-bordered pt-3" required></textarea>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Rating</span>
                                </label>
                                <select className="input input-bordered" name="rating" required>
                                    <option value="">Rate our website</option>
                                    <option value="1">1  Stars</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>

                            <div className="form-control w-full lg:ml-40 mt-6">
                                <button type='submit' value='Submit' className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-evenly w-full md:w-1/2 rounded-lg items-center p-2 hover:bg-slate-400' >
                                    Submit
                                    <GiConfirmed className='text-lg' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrolled;