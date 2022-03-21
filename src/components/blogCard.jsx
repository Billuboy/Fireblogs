import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <div className='w-1120 h-192 flex mb-12'>
      <div className='mr-8'>
        <Link to={`/blogs/${blog.id}`}>
          <img
            src={blog.photoURL}
            alt={blog.photoURL}
            className='w-290 h-192 rounded-blog'
          />
        </Link>
      </div>
      <div className='w-800 relative'>
        <div className='mb-3 h-28 truncate'>
          <Link to={`/blogs/${blog.id}`}>
            <pre className='text-18 font-bold whitespace-pre-line'>
              {blog.title}
            </pre>
          </Link>
        </div>
        <div className='h-40 truncate'>
          <pre className='text-14 font-medium whitespace-pre-line'>
            {blog.desc}
          </pre>
        </div>
        <div className='flex absolute bottom-60'>
          {blog.tags.map((tag, index) => {
            return (
              <div
                key={index}
                className={`w-122 h-24 grid place-items-center rounded-full mr-4 bg-${
                  tag === 'Tweaks'
                    ? 'coral-100'
                    : tag === 'Technology'
                    ? 'orange-100'
                    : 'yellow-100'
                }`}>
                <Link to={`/category/${tag.toLowerCase()}`}>
                  <p className='text-12 font-bold'>{tag}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className='w-full h-32 flex justify-between items-center absolute bottom-8'>
          <div className='w-1/2 h-full flex items-center'>
            <img
              src={blog.user.avatar}
              alt={blog.user.name}
              className='w-32 h-32 rounded-full'
            />
            <p className='text-12 font-bold ml-4'>{blog.user.name}</p>
          </div>
          <div className='w-122 h-32 border-gray-100 border-2 border-solid rounded-full grid place-items-center'>
            <h6 className='text-12 font-bold'>
              {moment(blog.createdAt.toDate().toISOString()).format('ll')}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
