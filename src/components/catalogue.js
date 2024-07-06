import { useState } from 'react';
import Products from '../components/products.js';

function Catalogue() {
  
  const [ showHat, setShowHat ] = useState(false);
  const [ showShirt, setShowShirt ] = useState(false);
  const [ showHoodies, setShowhoodies ] = useState(false);
  const [ showStickers, setShowStickers ] = useState(false);
  const [ showBag, setShowBag ] = useState(false);

  //shows only hats
  const handleHats = () => {
    setShowHat(!showHat);
  }

  const handleShirt = () => {
    setShowShirt(!showShirt);
  }

  const handleHoodies = () => {
    setShowhoodies(!showHoodies);
  }

  const handleStickers = () => {
    setShowStickers(!showStickers);
  }

  const handleBag = () => {
    setShowBag(!showBag);
  }

  return (
    <div>
      <div className="catalogue">
      <h2 className="product-header">check out what we have to offer</h2>
        <div className="products-list">
          <button onClick={handleHats}>hats</button>
          <button onClick={handleShirt}>shirts</button>
          <button onCLick={handleHoodies}>hoodies</button>
          <button onCLick={handleStickers}>stickers</button>
          <button onClick={handleBag}>bags</button>
        </div> 
        </div>
        <Products showHat={showHat} showShirt={showShirt} showHoodies={showHoodies} showStickers={showStickers} showBag={showBag}/>
    </div>
    )
}

export default Catalogue;