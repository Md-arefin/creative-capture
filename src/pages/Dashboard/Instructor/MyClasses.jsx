import React from 'react';
import useMyClasses from '../../../components/Hook/useMyClasses';


const MyClasses = () => {
    
   
const [classes , refetch] = useMyClasses();
  

    return (
        <div className='w-full'>
            <div className='mx-auto my-16  '>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        My classes
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[300px]'>
                </div>
            </div>

            <div className='mx-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    classes.map(item => <div 
                    key={item._id}
                    className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={item.classImage} alt={item.classTitle} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.classTitle}</h2>
                        <p><span className='font-semibold text-lg'>Instructor: </span>{item.teacherName}</p>
                        <p><span className='font-semibold text-lg'>Total Students: </span>{item?.numberOfStudents}</p>
                        <p><span className='font-semibold text-lg'>Available Seats: </span>{item.AvailableSits}</p>
                        <p><span className='font-semibold text-lg'>Price </span>${item.price}</p>
                       
                    </div>
                </div> )
                }
            </div>

           
        </div>
    );
};

export default MyClasses;