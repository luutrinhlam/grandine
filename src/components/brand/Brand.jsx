import React from 'react';
import { google, slack, react, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={react} />
    </div>
    {/* <div>
      <img src={slack} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div> */}
  </div>
);

export default Brand;