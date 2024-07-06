import { useState } from 'react';
import Products from '../components/products.js';

function Catalogue() {
  
  const [ showHat, setShowHat ] = useState(false);
  const [ showShirt, setShowShirt ] = useState(false);
  const [ showHoodies, setShowHoodies ] = useState(false);
  const [ showStickers, setShowStickers ] = useState(false);
  const [ showBag, setShowBag ] = useState(false);

  //shows only hats
  const handleHats = () => {
    setShowShirt(false);
    setShowHoodies(false);
    setShowStickers(false);
    setShowBag(false);
    setShowHat(true);
  };

  const handleShirt = () => {
    setShowHat(false);
    setShowHoodies(false);
    setShowStickers(false);
    setShowBag(false);
    setShowShirt(true);
  };

  const handleHoodies = () => {
    setShowHat(false);
    setShowShirt(false);
    setShowStickers(false);
    setShowBag(false);
    setShowHoodies(true);
  };

  const handleStickers = () => {
    setShowHat(false);
    setShowShirt(false);
    setShowHoodies(false);
    setShowBag(false);
    setShowStickers(true);
  };

  const handleBag = () => {
    setShowHat(false);
    setShowShirt(false);
    setShowStickers(false);
    setShowHoodies(false);
    setShowBag(true);
  };

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
};

export default Catalogue;