import React from 'react';

import picture from '../../assets/images/picture.png';

import laptop from '../../assets/images/laptop.png';
import food from '../../assets/images/food.png';
import game from '../../assets/images/game.png';

import './contact.scss';

const Contact = () => {
  const contents = [
    {
      icon: laptop,
      title: 'Laptop',
      description:
        'Ha még működik, de már nem használod, ajánld fel nekünk és mi elvisszük oda, ahol most nagy szükség van rá!\n Sok gyereknek a tanulás múlik ezen!'
    },
    {
      icon: food,
      title: 'Tartós élelmiszer',
      description:
        'Fontos, hogy csak bontatlan, azaz az eredeti, sértetlen bolti csomagolásban lévő tartós (minőségmegőrzési idővel rendelkező), hűtést nem igénylő élelmiszerek adhatók le.'
    },
    {
      icon: game,
      title: 'Társasjáték',
      description:
        'Ha már nem használod de másoknak még örömet tudsz vele szerezni. Kérlek, csak hiánytalan és jó állapotú játékot hozz, és olyat, ami nem felnőtteknek szóló játék.'
    }
  ];

  return (
    <div className="contact-wrapper">
      <div className="image-and-form-wrapper">
        <div className="image-wrapper">
          <img src={picture} alt="zsendulo" />
        </div>
        <div className="form-wrapper"></div>
      </div>
      <div className="help-wrapper">
        <h1>Mi az, amivel segíteni tudsz nekünk?</h1>
        <div className="content-wrapper">
          {contents.map((content, index) => (
            <div className="content" key={`help_${index}`}>
              <div className="icon-wrapper">
                <img src={content.icon} alt={`help_item_${index}`} />
              </div>
              <div className="content-desc-wrapper">
                <h3>{content.title}</h3>
                <p>{content.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
