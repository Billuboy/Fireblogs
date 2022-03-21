import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from '@headlessui/react';

import { useAuth } from '../hooks/useAuth';
import Login from '../components/loginModal';
import Register from '../components/registerModal';

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logout } = useAuth();

  const dropdown = () => {
    return (
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className='h-50 w-50 rounded-full'
            onClick={() => setIsOpen(!isOpen)}
          />
        </Menu.Button>
        <Menu.Items>
          <div className='absolute right-0 z-10 h-252 w-212 border-gray-100 border-solid border rounded-blog flex flex-col justify-evenly items-center bg-white-basic'>
            <Menu.Item>
              <>
                <p className={`font-medium`}>{user.displayName}</p>
                <div className='border-b-gray-100 border-b-solid border-b w-full'></div>
              </>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/create-blog'>
                  <p
                    className={`${
                      active && 'opacity-100'
                    } opacity-75 font-medium`}>
                    Create a Blog
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/my-blogs'>
                  <p
                    className={`${
                      active && 'opacity-100'
                    } opacity-75 font-medium`}>
                    My Blogs
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  <div className='border-gray-100 border-solid border w-full'></div>
                  <p
                    className={`${
                      active && 'opacity-100'
                    } opacity-75 text-red-danger cursor-pointer font-medium`}
                    onClick={logout}>
                    Sign Out
                  </p>
                </>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    );
  };

  return (
    <div className='w-full flex justify-center bg-white-basic sticky top-0 z-10'>
      <div className='w-body h-90 flex justify-between items-center'>
        <h3 className='logo'>
          <Link to='/'>FireBlogs</Link>
        </h3>
        <div className='w-543 h-48 flex justify-evenly items-center font-medium'>
          <p className='text-20'>
            <Link to='/category/gaming'>Gaming</Link>
          </p>
          <p className='text-20'>
            <Link to='/category/technology'>Technology</Link>
          </p>
          <p className='text-20'>
            <Link to='/category/tweaks'>Tweaks</Link>
          </p>
        </div>
        {user ? (
          <div>{dropdown()}</div>
        ) : (
          <div className='flex w-256'>
            <Login />
            <Register />
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(Header);
