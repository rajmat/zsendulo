import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '@material-ui/core/Button';

import './palyazatok.scss';

const Palyazatok = () => {
  const palyazatok = [
    {
      title: 'Kemény dió',
      subtitle: 'bűnmegelőzési program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Tovább olvasom'
    },
    {
      title: 'Magdolna-Orczy negyed',
      subtitle: 'szociális városrehabilitációs program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Tovább olvasom'
    },
    {
      title: 'Csarnok negyed főutcája',
      subtitle: 'városrehabilitációs program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Érdekel'
    },
    {
      title: 'Csarnok negyed főutcája',
      subtitle: 'városrehabilitációs program',
      description:
        'Facebook oldala szerint tavaly kora ősztől a Kesztyűgyárban működik a hátrányos helyzetű gyerekek felzárkóztatását segítő Zsendülő tanoda...',
      button_text: 'Érdekel'
    }
  ];

  return (
    <div className="palyazatok-wrapper">
      <h1>Pályázatok</h1>
      <div className="application-wrapper">
        {palyazatok.map((palyazat, index) => (
          <Fade cascade key={`palyazat_${index}`}>
            <div className="palyazat">
              <h3>{palyazat.title}</h3>
              <h5>{palyazat.subtitle}</h5>
              <p>{palyazat.description}</p>
              <Button className="button_1">{palyazat.button_text}</Button>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Palyazatok;
