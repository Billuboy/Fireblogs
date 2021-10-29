/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { doc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';

import { firestore } from '../firebase/baseInit';
import BlogComponent from '../components/blog';

export default function Blog(props) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    (async () => {
      const slug = props.match.params.slug;
      const docRef = doc(firestore, 'blogs', slug);

      docData(docRef)
        .pipe(
          map(blog => {
            const data = docData(blog.userRef).pipe(
              map(user => ({ ...blog, user }))
            );
            return data;
          })
        )
        .subscribe(blog =>
          blog.subscribe(b => {
            setBlog(b);
          })
        );
    })();
  }, []);

  if (!blog) return <div>Loading...</div>;

  return <BlogComponent blog={blog} />;
}
