import React from 'react';
import './brand.css';
import {Davids, Kendra,egg,sol,wire} from './import';
const Brand = () => {
  return (
    <div className='wedding__brand '>
    <div>
        <img src={Davids}/>
    </div>
    <div>
        <img src={Kendra} />
    </div>
    <div>
        <img src={egg}/>
    </div>
    <div>
        <img src={sol}/>
    </div>
    <div>
        <img src={wire}/>
    </div>
</div>
  )
}

export default Brand
