import React from 'react';
import { collection, query, where } from 'firebase/firestore';

import BlogCard from '../../components/blogCard';
import Loader from '../../components/loader';
import { useFireStore } from '../../hooks/useFireStore';
import { firestore } from '../../firebase/baseInit';

export default function Tech() {
  const q = query(
    collection(firestore, 'blogs'),
    where('tags', 'array-contains', 'Technology'),
  );
  const docs = useFireStore(q);

  const renderList = () =>
    docs.map(blog => <BlogCard blog={blog} key={blog.id} />);

  if (!docs.length) return <Loader />;

  return (
    <div>
      <div className='mt-4'>
        <h3 className='text-24 font-bold'>LATEST IN TECH</h3>
        <div className='w-703 divide-y-4 divide-orange-200 mb-12 mt-4'>
          <p></p>
          <p></p>
        </div>
      </div>
      <div>{renderList()}</div>
    </div>
  );
}
