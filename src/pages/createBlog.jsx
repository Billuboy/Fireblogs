import React, { useState } from 'react';
import { addDoc, collection, Timestamp, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { TiPlus } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

import { firestore, storage } from '../firebase/baseInit';
import { useAuth } from '../hooks/useAuth';

export default function Create(props) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState([]);
  const [localURL, setLocalURL] = useState(null);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const { user } = useAuth();

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = e => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setLocalURL(URL.createObjectURL(selected));
    } else setError('Please select an image file (png or jpeg)');
  };

  const handleTags = value => {
    if (tags.filter(tag => tag === value).length)
      setTags(tags.filter(tag => tag !== value));
    else setTags([...tags, value]);
  };

  const HandleSubmit = async e => {
    e.preventDefault();
    setDisabled(true);

    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        console.log(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(firestore, 'blogs'), {
          userRef: doc(firestore, 'users', user.uid),
          userId: user.uid,
          tags,
          title,
          desc,
          photoURL: url,
          createdAt: Timestamp.fromDate(new Date(Date.now())),
        });
      },
    );

    setTimeout(() => {
      props.history.push('/');
    }, 3000);
  };

  const renderForm = () => {
    return (
      <div>
        <div>
          <div className='w-full h-562 overflow-hidden'>
            {localURL ? (
              <img src={localURL} alt={localURL} className='w-full h-562' />
            ) : (
              <h2 className='w-full h-full grid place-items-center'>
                Space for Image
              </h2>
            )}
          </div>
        </div>
        <form onSubmit={HandleSubmit} className='mb-8'>
          <div className='w-full flex justify-between z-10 mt-2 items-center'>
            <div></div>
            <div>{error}</div>
            <div className='flex justify-between'>
              <button
                className='h-50 w-50 rounded-full bg-red-danger cursor-pointer grid place-items-center'
                type='button'
                onClick={() => {
                  setLocalURL(null);
                  setFile(null);
                }}>
                <ImCross />
              </button>
              <label className='h-50 w-50 rounded-full bg-orange-200 block cursor-pointer ml-8'>
                <input
                  type='file'
                  onChange={changeHandler}
                  className='hidden'
                />
                <i className='text-24 w-full h-full grid place-items-center'>
                  <TiPlus />
                </i>
              </label>
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <div className='w-60%'>
              <label htmlFor='title' className='text-18 font-semibold'>
                Title
              </label>
              <input
                type='text'
                id='title'
                onChange={e => setTitle(e.target.value)}
                value={title}
                className='border-b-2 border-soild border-orange-200 block focus:outline-none w-full mb-8 mt-2'
              />
              <label htmlFor='desc' className='text-18 font-semibold'>
                Description
              </label>
              <textarea
                id='desc'
                onChange={e => setDesc(e.target.value)}
                value={desc}
                className='block w-full focus:outline-none resize-none border-b-2 border-soild border-orange-200 mt-2'
              />
            </div>
            <div className='mr-28'>
              <h2 className='text-18 font-semibold mb-4'>Tags</h2>
              <button
                className={`w-192 h-48 grid place-items-center rounded-full mb-4 ${
                  tags.filter(tag => tag === 'Technology').length
                    ? 'bg-orange-100'
                    : 'border-4 border-orange-100 border-solid'
                }`}
                type='button'
                onClick={() => handleTags('Technology')}>
                Technology
              </button>
              <button
                className={`w-192 h-48 grid place-items-center rounded-full mb-4 ${
                  tags.filter(tag => tag === 'Gaming').length
                    ? 'bg-coral-100'
                    : 'border-4 border-coral-100 border-solid'
                }`}
                type='button'
                onClick={() => handleTags('Gaming')}>
                Gaming
              </button>
              <button
                className={`w-192 h-48 grid place-items-center rounded-full mb-4 ${
                  tags.filter(tag => tag === 'Tweaks').length
                    ? 'bg-yellow-100'
                    : 'border-4 border-yellow-100 border-solid'
                }`}
                type='button'
                onClick={() => handleTags('Tweaks')}>
                Tweaks
              </button>
            </div>
          </div>
          <button
            type='submit'
            className='bg-orange-200 w-126 h-32 text-18 font-medium grid place-items-center rounded-full disabled:opacity-70'
            disabled={disabled}>
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <div className='mt-4'>
        <h3 className='text-24 font-bold'>CREATE BLOG</h3>
        <div className='w-703 divide-y-4 divide-orange-200 mb-12 mt-4'>
          <p></p>
          <p></p>
        </div>
      </div>
      <div>{renderForm()}</div>
    </div>
  );
}
