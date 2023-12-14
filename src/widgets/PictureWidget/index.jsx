import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Index({ imageURL, headingText, id }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '550px' }}>
      <Image
        src={imageURL}
        alt="Widget Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <h2 style={{ fontSize: '24px' }}>{headingText}</h2>
        <Link href={`/catalogue?category=${headingText}`}>
          <div style={{ color: 'white', textDecoration: 'underline', cursor: 'pointer', margin:'0rem 1rem'}}>
            Discover
          </div>
        </Link>
      </div>
    </div>
  );
};
