import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Fade from 'react-reveal/Fade';

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
    <LazyLoadComponent>
      <Fade big>
        <div className="contact-wrapper">
          <div className="image-and-form-wrapper">
            <div className="image-wrapper">
              <LazyLoadComponent>
                <img src={picture} alt="zsendulo" />
              </LazyLoadComponent>
            </div>
            <div className="form-wrapper"></div>
          </div>
          <div className="help-wrapper">
            <h1>Mi az, amivel segíteni tudsz nekünk?</h1>
            <div className="content-wrapper">
              {contents.map((content, index) => (
                <Fade bottom cascade key={`help_${index}`}>
                  <div className="content">
                    <div className="icon-wrapper">
                      <img src={content.icon} alt={`help_item_${index}`} />
                    </div>
                    <div className="content-desc-wrapper">
                      <h3>{content.title}</h3>
                      <p>{content.description}</p>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </LazyLoadComponent>
  );
};

export default Contact;
