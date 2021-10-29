import React from 'react';
import Hero from '../components/hero';
import { query, collection, limit, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { useAuth } from '../hooks/useAuth';
import { useFireStore } from '../hooks/useFireStore';
import { firestore } from '../firebase/baseInit';

export default function Index() {
  const { user } = useAuth();

  const q = query(
    collection(firestore, 'blogs'),
    orderBy('createdAt', 'desc'),
    limit(10)
  );

  const docs = useFireStore(q);

  const renderList = () => {
    return docs.map((doc, index) => {
      return (
        <div className="w-1120 h-192 flex mb-12" key={index}>
          <div className="mr-8">
            <Link to={`/blogs/${doc.id}`}>
              <img
                src={doc.photoURL}
                alt={doc.photoURL}
                className="w-290 h-192 rounded-blog"
              />
            </Link>
          </div>
          <div className="w-800 relative">
            <h6 className="text-20 font-bold">
              <Link to={`/blogs/${doc.id}`}>{doc.title}</Link>
            </h6>
            <div className="flex absolute bottom-84">
              {doc.tags.map((tag, index) => {
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
                      <p className="text-12 font-bold">{tag}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-60 flex justify-between items-center absolute bottom-8">
              <div className="w-1/2 h-full flex items-center">
                <img
                  src={doc.user.avatar}
                  alt={doc.user.name}
                  className="w-60 h-60 rounded-full"
                />
                <p className="text-14 font-bold ml-4">{doc.user.name}</p>
              </div>
              <div className="w-122 h-32 border-gray-100 border-2 border-solid rounded-full grid place-items-center">
                <h6 className="text-14 font-bold">
                  {moment(doc.createdAt.toDate().toISOString()).format('ll')}
                </h6>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  if (!docs.length) return <div>Loading...</div>;

  return (
    <div>
      {user ? null : <Hero />}
      <div className="mt-4">
        <h3 className="text-24 font-bold">LATEST BLOGS</h3>
        <div className="w-703 divide-y-4 divide-orange-200 my-8">
          <p></p>
          <p></p>
        </div>
      </div>
      <div>{renderList()}</div>
    </div>
  );
}
