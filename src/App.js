import React from 'react';
import logo from './logo.png';
import './App.css';

import StickyHeadTable from './nepseLive';



function App() {
  return (
    <div>
      <div className='logo'>
        <a href = '#'>
          <img src={logo}/>
        </a>
      </div>

      <nav className="db dt-l w-100 border-box ph5-l">
        <div className="db dtc-l v-mid w-100 w-75-l tc tl-l">
          <a className="link dim dark-gray f4 f4-l dib mr3 mr4-l mv2" href="#" target='_blank' title="Today's Live Price">Today's Live Price</a>
          {/* <a class="link dim dark-gray f4 f4-l dib mr3 mr4-l mv2" href="#" target='_blank' title="Floor Sheet">Floor Sheet</a>
          <a class="link dim dark-gray f4 f4-l dib mr3 mr4-l mv2" href="#" target='_blank' title="Dividend & Bonus">Dividend & Bonus</a>
          <a class="link dim dark-gray f4 f4-l dib mr3 mr4-l mv2" href="#" target='_blank' title="Share News">Share News</a> */}
    
        </div>

        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <a className="link dim dark-gray dib mr3 mr4-l mv2 fb" href="https://www.facebook.com/nepselive" target='_blank' rel="noopener noreferrer" title="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
          <a className="link dim dark-gray dib mr3 mr4-l mv2 twitter" href="https://twitter.com/nepselive" target='_blank' rel="noopener noreferrer" title="Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
          <a className="link dim dark-gray dib mr3 mr4-l  mv2 youtube" href="https://www.youtube.com/channel/UCLdi7P7_K6FBc2IW5P09syg" target='_blank' rel="noopener noreferrer" title="YouTube"><ion-icon name="logo-youtube"></ion-icon></a>
        </div>      
      </nav>

      <hr></hr>

      <StickyHeadTable/>
    </div>
  );
}

export default App;
