import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

import { useAuth } from '../hooks/useAuth';

export default function LoginModal() {
  const { login, newUser, setUser, setNewUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setUser(null);
    setNewUser(null);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className='w-126 h-48 border-solid border-2 border-orange-200 rounded-full opacity-90 hover:opacity-100 cursor-pointer'
        onClick={openModal}>
        <p className='w-full h-full flex justify-center items-center text-20'>
          Sign-In
        </p>
      </div>

      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-scroll'
        open={isOpen}
        onClose={closeModal}>
        <div className='flex items-center justify-center min-h-screen'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

          <div className='relative bg-white-basic text-center shadow-xl rounded-xl w-394 h-362 flex flex-col justify-evenly items-center'>
            {newUser ? (
              <>
                <Dialog.Title as='h3' className='text-24 font-semibold'>
                  No account associated with this google account
                </Dialog.Title>

                <div>
                  <p className='text-16 font-regular'>
                    Please regsiter your account first
                  </p>
                </div>
              </>
            ) : (
              <>
                <Dialog.Title as='h3' className='text-24 font-semibold'>
                  Welcome back
                </Dialog.Title>

                <div
                  className='border-black border border-solid px-4 py-2 rounded-full flex justify-evenly items-center cursor-pointer'
                  onClick={login}>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g clipPath='url(#clip0_88:17)'>
                      <path
                        d='M30 15.3326C30.0181 14.3014 29.9095 13.2718 29.6766 12.266H15.3062V17.8326H23.7414C23.5816 18.8086 23.222 19.7429 22.6843 20.5792C22.1465 21.4156 21.4417 22.1367 20.6123 22.6991L20.5829 22.8856L25.1268 26.3352L25.4414 26.366C28.3324 23.7493 29.9994 19.8991 29.9994 15.3326'
                        fill='#4285F4'
                      />
                      <path
                        d='M15.3061 30C19.4386 30 22.908 28.6666 25.4422 26.3666L20.6122 22.6997C19.3198 23.5833 17.5851 24.2 15.3061 24.2C13.3706 24.1889 11.4877 23.5808 9.92473 22.4619C8.36174 21.343 7.19797 19.7702 6.59852 17.9666L6.41914 17.9816L1.69438 21.5648L1.63263 21.7331C2.90512 24.2185 4.85797 26.3079 7.27282 27.7678C9.68766 29.2278 12.4693 30.0006 15.3067 30'
                        fill='#34A853'
                      />
                      <path
                        d='M6.59867 17.9666C6.26388 17.0117 6.09113 16.0096 6.08729 15C6.09345 13.992 6.25983 12.9912 6.58044 12.0334L6.57191 11.8346L1.78922 8.19365L1.63278 8.26656C0.559327 10.3552 0.000183105 12.6612 0.000183105 14.9998C0.000183105 17.3384 0.559327 19.6445 1.63278 21.7331L6.59867 17.9666'
                        fill='#FBBC05'
                      />
                      <path
                        d='M15.3061 5.80001C17.4994 5.76663 19.6206 6.5671 21.2245 8.03343L25.5443 3.90001C22.7737 1.35283 19.1048 -0.0447672 15.3061 5.85916e-06C12.4688 -0.000655716 9.68717 0.77216 7.27233 2.23204C4.85748 3.69192 2.90461 5.78131 1.63208 8.26658L6.5815 12.0334C7.18685 10.2301 8.35449 8.65853 9.91978 7.54018C11.4851 6.42184 13.3691 5.81317 15.3061 5.80001'
                        fill='#EB4335'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_88:17'>
                        <rect width='30' height='30' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <button className='focus:outline-none ml-4'>
                    Sign-In with Google
                  </button>
                </div>
              </>
            )}

            <div className='w-full'></div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
