import React from 'react';
import { useEffect, useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const [specials, setSpecials] = useState([]);

  // Pull menu from API
  const fetechMenuData = () => {
    fetch('https://tasty-bites.herokuapp.com/api/menu')
    .then(response => {
        console.log('fetch')
        return response.json()
    })
    .then(data => {
        console.log('setData')
        setSpecials(data)
    })
  }

  useEffect(() => {
    console.log('useEffect')
    fetechMenuData();
  }, [])

  return(
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Burgers</p>
        <div className="app__specialMenu_menu_items">
          {data.burgers.map((burgers, index) => (
            <MenuItem key={burgers.title + index} title={burgers.title} price={burgers.price} tags={burgers.tags} />
          ))}
        </div>
        <p className="app__specialMenu-menu_heading">Manager Specials</p>
        <div className="app__specialMenu_menu_items">
            {specials.map((specials, menu_id) => (
                <MenuItem key={specials.dish_name + menu_id} title={specials.dish_name} price={`$${specials.price}`} tags={specials.description} />
            ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Sides & Extras</p>
        <div className="app__specialMenu_menu_items">
          {data.sides.map((sides, index) => (
            <MenuItem key={sides.title + index} title={sides.title} price={sides.price} tags={sides.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button"><a href='/Menu'>View More</a></button>
    </div>
  </div>
);
          }
export default SpecialMenu;