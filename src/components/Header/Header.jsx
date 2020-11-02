import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import adomany from '../../assets/images/adomany.png';

import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';

import './header.scss';

export default function BackToTop(props) {
  return (
    <div className={'header'}>
      <AppBar>
        <div className="contacts-wrapper">
          <div className="contact">
            <a
              href="mailto:tanoda@kesztyugyar.hu"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo email'}
            >
              <img src={email} alt="email logo" />
            </a>
          </div>
          <div className="contact">
            <a
              href="tel:tanoda@kesztyugyar.hu"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo telefon'}
            >
              <img src={phone} alt="telefon logo" />
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.facebook.com/zsendulotanoda"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo facebook'}
              target={'__blank'}
            >
              <img src={facebook} alt="facebook ikon" />
            </a>
          </div>
          <div className="contact">
            <a
              href="https://www.instagram.com/explore/locations/115305033209990/zsendulo-tanoda/"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo instagram'}
              target={'__blank'}
            >
              <img src={instagram} alt="instagram ikon" />
            </a>
          </div>
        </div>
        <Toolbar className="buttons-wrapper">
          <Button className="button_1">
            <img src={adomany} alt="adomany_logo" />
            Adományozni szeretnék
          </Button>
          <Button className="button_2">Lépj kapcsolatba velünk!</Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </div>
  );
}
