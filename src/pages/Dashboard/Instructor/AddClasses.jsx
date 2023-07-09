import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/Hook/useAxious";
import { AuthContext } from "../../../Providers/AuthProvider";



const AddClasses = () => {
    const imgToken = import.meta.env.VITE_IMGBB_API;

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_url = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const onSubmit = data => {

        console.log(data)

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgResponse => {
                console.log("imgResponse", imgResponse)
                if (imgResponse.success) {
                    const classImage = imgResponse.data.display_url;
                    const teacherPhoto = user.photoURL;
                    const numberOfStudents = '00';
                    const { classTitle, price, AvailableSits, teacherName, email } = data;
                    const newItem = {
                        classTitle,
                        price: parseFloat(price),
                        AvailableSits: parseFloat(AvailableSits),
                        teacherName, email, teacherPhoto,
                        numberOfStudents: parseFloat(numberOfStudents),
                        classImage
                    }
                    console.log('imgURL ', classImage)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    };


    return (
        <div>
            <div className='mx-auto my-16  '>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Add a class
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[300px]'>
                </div>
            </div>

            <div className="w-full px-10">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class Title</span>
                        </label>
                        <input type="text" placeholder="Add your class"
                            {...register("classTitle", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    {/* ins name */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-tex text-black font-semibold">Your Name</span>
                        </label>
                        <input defaultValue={user.displayName} type="text" placeholder="Your Name"
                            {...register("teacherName", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    {/* email */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-tex text-black font-semibold">Your Email</span>
                        </label>
                        <input type="text" defaultValue={user.email} placeholder="Your Email"
                            {...register("email", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    {/* image */}
                    <div className="flex items-center justify-between my-4">

                        <div className="form-control w-full my-4 fl">
                            <label className="label">
                                <span className="label-text font-semibold">Class Image</span>
                            </label>
                            <input type="file" placeholder=" " {...register("image", { required: true })} multiple={false} className="file-input file-input-bordered w-full " />

                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats</span>
                            </label>
                            <input type="number" {...register("AvailableSits", { required: true })} placeholder="Available Seats" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="$ Price" className="input input-bordered w-full " />
                        </div>
                    </div>

                  
                        <input className="btn w-1/2 mx-[200px] mt-4 " type="submit" value="Add Item" />
                   
                </form>
            </div>
        </div>
    );
};

export default AddClasses;



