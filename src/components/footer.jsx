import React from 'react';

export default function Footer() {
  return (
    <div className="w-full flex justify-center bg-orange-200">
      <div>
        <div className="text-center flex justify-center my-6">
          <p className="mr-16 text-20 font-medium">Advertise</p>
          <p className="mr-16 text-20 font-medium">About Us</p>
          <p className="text-20 font-medium">Contact Us</p>
        </div>
        <div className="w-body text-center text-20 font-semibold mb-3">
          Made with ❤️ and firebase by Billuboy
        </div>
      </div>
    </div>
  );
}
