import React from 'react';

const PopularCard = ({ classItem }) => {

    const { _id, classImage, classTitle, numberOfStudents, price, teacherName
    } = classItem;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={classImage} alt={classTitle} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{classTitle}</h2>
                    <p><span className='font-semibold text-lg'>Instructor: </span>{teacherName}</p>
                    <p><span className='font-semibold text-lg'>Total Students: </span>{numberOfStudents}</p>
                    <p className='font-semibold text-lg'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;