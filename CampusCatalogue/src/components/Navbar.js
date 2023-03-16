import React, {useState} from 'react';
import homeIcon from '../assets/homeNav.svg';
import foodIcon from '../assets/foodNav.svg';
import printIcon from '../assets/printNav.svg';
import orderIcon from '../assets/orderNav.svg';
import homeActive from '../assets/homeNavActive.svg';
import foodActive from '../assets/foodNavActive.svg';
import printActive from '../assets/printNavActive.svg';
import orderActive from '../assets/orderNavActive.svg';

function BottomNavigation() {
    const [activeHome, setActiveHome]=useState(true);
    const [activeFood, setActiveFood]=useState(false);
    const [activePrint, setActivePrint]=useState(false);
    const [activeOrder, setActiveOrder]=useState(false);

    const handleHomeClick = () => {
        setActiveHome(true);
        setActiveFood(false);
        setActivePrint(false);
        setActiveOrder(false);
      };
    const handleFoodClick = () => {
        setActiveHome(false);
        setActiveFood(true);
        setActivePrint(false);
        setActiveOrder(false);
    };
    const handlePrintClick = () => {
        setActiveHome(false);
        setActiveFood(false);
        setActivePrint(true);
        setActiveOrder(false);
    };
    const handleOrderClick = () => {
        setActiveHome(false);
        setActiveFood(false);
        setActivePrint(false);
        setActiveOrder(true);
    };

  return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', bottom: 0, width: '100%', height: '64px', backgroundColor: '#FFFFFF', borderTop: '1px solid #eee' }}>
        <div onClick={handleHomeClick} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, color: activeHome? "#5932E6":"#999999", zIndex: 2 }}>
          {
            activeHome? (<img src={homeActive} alt="" />):(<img src={homeIcon} alt="" />)
          }
          <span style={{ fontSize: '12px', marginTop: '4px', fontWeight: '500'}}>Home</span>
        </div>
        <div onClick={handleFoodClick} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, color: activeFood?"#5932E6":"#999999" }}>
        {
            activeFood? (<img src={foodActive} alt="" />):(<img src={foodIcon} alt="" />)
        }
          <span style={{ fontSize: '12px', marginTop: '4px', fontWeight: '500' }}>Food</span>
        </div>
        <div onClick={handlePrintClick} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, color: activePrint?"#5932E6":"#999999" }}>
          {
            activePrint? (<img src={printActive} alt="" />):(<img src={printIcon} alt="" />)
          }
          <span style={{ fontSize: '12px', marginTop: '4px', fontWeight: '500' }}>Print</span>
        </div>
        <div onClick={handleOrderClick} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, color: activeOrder?"#5932E6":"#999999" }}>
            {
                activeOrder? (<img src={orderActive} alt="" />):(<img src={orderIcon} alt="" />)
            }
          <span style={{ fontSize: '12px', marginTop: '4px', fontWeight: '500' }}>Order</span>
        </div>
      </div>
  );
}

export default BottomNavigation;
