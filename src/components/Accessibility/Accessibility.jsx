import React from 'react';

import superman from '../../assets/images/superman.png';
import key from '../../assets/images/key.png';
import address from '../../assets/images/address.png';
import email_orange from '../../assets/images/email_orange.png';
import phone_orange from '../../assets/images/phone_orange.png';
import './accessibility.scss';

const Accessibility = () => {
  return (
    <div className="accessibility-wrapper">
      <div className="accessibility-body">
        <div className="accessibility-main">
          <h1>Elérhetőségeink</h1>
          <div className="content-wrapper">
            <div className="content">
              <div className="icon-wrapper">
                <img src={key} alt={`opening_hours`} />
              </div>
              <div className="content-desc-wrapper">
                <h3>Nyitvatartás</h3>
                <section>
                  <div>
                    <p>Hétfő: 14.00-18.00</p>
                    <p>Kedd: 14.00-18.00</p>
                    <p>Szerda: 14.00-18.00</p>
                  </div>
                  <div>
                    <p>Csütörtök: 14.00-18.00</p>
                    <p>Péntek: 14.00-18.00</p>
                    <p>Szombat - vasárnap: Zárva</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="content">
              <div className="icon-wrapper">
                <img src={address} alt={`address`} />
              </div>
              <div className="content-desc-wrapper">
                <h3>
                  <a
                    href="https://www.google.com/maps/place/Budapest,+M%C3%A1ty%C3%A1s+t%C3%A9r+15,+1084/"
                    rel={'noopener noreferrer nofollower'}
                    target={'__blank'}
                  >
                    1084 Budapest, Mátyás tér 15.
                  </a>
                </h3>

                <section>
                  <div className="desc">
                    <p>
                      Megközelíthető a Blaha Lujza tértől 99-es busszal.
                      Gyalogosan a 4/6-os villamos Harminckettesek tere
                      megállójától: József utca -&gt; Mátyás tér.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={superman} alt="superman" />
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contacts">
          <div className="contact">
            <a
              href="mailto:tanoda@kesztyugyar.hu"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo email'}
            >
              <img src={email_orange} alt="zsendulo email" />
            </a>
          </div>
          <div className="contact">
            <a
              href="tel:tanoda@kesztyugyar.hu"
              rel={'noopener noreferrer nofollower'}
              aria-label={'zsendulo telefon'}
            >
              <img src={phone_orange} alt="zsendulo email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
