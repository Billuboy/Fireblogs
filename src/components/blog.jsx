import React from 'react';
import moment from 'moment';

export default function blogComponent({ blog }) {
  const renderBlog = () => {
    return (
      <div className='mt-4'>
        <h2 className='text-20 font-semibold'>{blog.title}</h2>
        <div className='flex justify-between mt-8 mb-3 w-900'>
          <div className='flex items-center'>
            <img
              src={blog.user.avatar}
              alt={blog.user.name}
              className='h-32 w-32 rounded-full'
            />
            <p className='text-12 font-bold ml-4'>{blog.user.name}</p>
          </div>
          <div className='flex items-center text-14 font-semibold'>
            <h6 className='w-122 h-32 border-gray-100 border-2 border-solid rounded-full grid place-items-center'>
              {moment(blog.createdAt.toDate().toISOString()).format('hh:mm a')}
            </h6>
            <h6 className='w-122 h-32 border-gray-100 border-2 border-solid rounded-full grid place-items-center ml-8'>
              {moment(blog.createdAt.toDate().toISOString()).format('ll')}
            </h6>
          </div>
        </div>
        <img
          src={blog.photoURL}
          alt={blog.user.name}
          className='w-900 h-436 rounded-lg'
        />
        <p className='my-8 font-normal text-16'>{blog.desc}</p>
      </div>
    );
  };

  return <div>{renderBlog()}</div>;
}
