import React from 'react'


const Background = ({ cityname }) => {
  let img = `https://source.unsplash.com/1400x800/?${cityname}`;

 const defaultImg = `https://source.unsplash.com/1400x800/?Hyderabad`;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[-1]">
    <div className='block w-full h-full' style={{ width: '100%', height: '100%' }}>
      {<img src={img} alt="" className="object-cover w-full h-full" onError={(e) => { e.target.src = defaultImg }} />}
    </div>
    <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-30 z-0"></div>
  </div>
  );
};

export default Background;
