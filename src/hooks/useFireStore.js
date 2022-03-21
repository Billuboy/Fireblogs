/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { docData, collectionData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

export function useFireStore(q) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const data = collectionData(q, { idField: 'id' }).pipe(
      map(blogs => {
        return combineLatest([
          ...blogs.map(b =>
            docData(b.userRef).pipe(map(user => ({ ...b, user }))),
          ),
        ]);
      }),
    );
    const val = data.subscribe(blogs => {
      blogs.subscribe(b => setDocs(b));
    });

    return () => val.unsubscribe();
  }, []);

  return docs;
}
