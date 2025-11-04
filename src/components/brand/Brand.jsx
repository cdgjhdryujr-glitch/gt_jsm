import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './Brand.css'; 

const Brand = () => {
  console.log('Image paths:', { google, slack, atlassian, dropbox, shopify });
  
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-images'>
        <img src={google} alt='google' style={{maxWidth: '100%'}}/>
      </div>
      <div className='gpt3__brand-images'>
        <img src={slack} alt='slack' style={{maxWidth: '100%'}}/>
      </div>
      <div className='gpt3__brand-images'>
        <img src={atlassian} alt='atlassian' style={{maxWidth: '100%'}}/>
      </div>
      <div className='gpt3__brand-images'>
        <img src={dropbox} alt='dropbox' style={{maxWidth: '100%'}}/>
      </div>
      <div className='gpt3__brand-images'>
        <img src={shopify} alt='shopify' style={{maxWidth: '100%'}}/>
      </div>
    </div>
  )
}

export default Brand
