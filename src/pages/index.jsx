import React from 'react';
import Hero from '../components/hero';
import { query, collection, limit, orderBy } from 'firebase/firestore';

import Loader from '../components/loader';
import BlogCard from '../components/blogCard';
import { useAuth } from '../hooks/useAuth';
import { useFireStore } from '../hooks/useFireStore';
import { firestore } from '../firebase/baseInit';

export default function Index() {
  const { user } = useAuth();

  const q = query(
    collection(firestore, 'blogs'),
    orderBy('createdAt', 'desc'),
    limit(10),
  );

  const docs = useFireStore(q);

  const renderList = () =>
    docs.map(blog => <BlogCard blog={blog} key={blog.id} />);

  if (!docs.length) return <Loader />;

  return (
    <div>
      {user ? null : <Hero />}
      <div className='mt-4'>
        <h3 className='text-24 font-bold'>LATEST BLOGS</h3>
        <div className='w-703 divide-y-4 divide-orange-200 my-8'>
          <p></p>
          <p></p>
        </div>
      </div>
      <div>{renderList()}</div>
    </div>
  );
}
