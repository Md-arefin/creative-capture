import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Card = ({ classes }) => {

    console.log(classes)

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { _id, classImage, classTitle, numberOfStudents, price, teacherName, AvailableSits
    } = classes;

    const handleSelectClass = classItem => {
        console.log(classItem)
        if (user && user.email) {
            const selectedClass = {
                classItemId: _id,
                classImage, classTitle, numberOfStudents, price, teacherName, email: user.email,AvailableSits
            }
            fetch('https://summer-lens-learning-server-md-arefin.vercel.app/classSelected', {
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your class has been selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={classImage} alt={classTitle} /></figure>
            <div className="card-body">
                <h2 className="card-title">{classTitle}</h2>
                <p><span className='font-semibold text-lg'>Instructor: </span>{teacherName}</p>
                <p><span className='font-semibold text-lg'>Total Students: </span>{numberOfStudents}</p>
                <p><span className='font-semibold text-lg'>Available Seats: </span> {AvailableSits}</p>
                <p><span className='font-semibold text-lg'>Price: </span>${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelectClass(classes)} className="btn bg-yellow-500 hover:text-black border-b-4 border-0 border-black ">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default Card;