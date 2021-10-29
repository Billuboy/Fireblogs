import React from 'react';
import moment from 'moment';

export default function blogComponent({ blog }) {
  const renderBlog = () => {
    return (
      <>
        <h2 className="text-36 font-semibold">{blog.title}</h2>
        <div className="flex justify-between my-4 w-900">
          <div className="flex items-center">
            <img
              src={blog.user.avatar}
              alt={blog.user.name}
              className="h-50 w-50 rounded-full"
            />
            <p className="text-14 font-semibold ml-4">{blog.user.name}</p>
          </div>
          <div className="flex items-center text-14 font-semibold">
            <h6 className="w-122 h-32 border-gray-100 border-2 border-solid rounded-full grid place-items-center">
              {moment(blog.createdAt.toDate().toISOString()).format('hh:mm a')}
            </h6>
            <h6 className="w-122 h-32 border-gray-100 border-2 border-solid rounded-full grid place-items-center ml-8">
              {moment(blog.createdAt.toDate().toISOString()).format('ll')}
            </h6>
          </div>
        </div>
        <img src={blog.photoURL} alt={blog.user.name} className="w-900 h-436" />
        <p className="my-8 font-normal text-20">{blog.desc}</p>
      </>
    );
  };

  return <div>{renderBlog()}</div>;
}
