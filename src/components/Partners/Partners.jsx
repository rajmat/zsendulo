import React from 'react';
import Slider from 'react-slick';

import sodexo from '../../assets/images/sodexo.jpg';
import jozsefvaros from '../../assets/images/jozsefvaros.jpg';
import kesztyugyar from '../../assets/images/kesztyugyar_kozossegi_haz_logo.png';
import noe from '../../assets/images/noe.jpg';
import pest_immami from '../../assets/images/pest_immami.png';
import united_way from '../../assets/images/united_way.jpg';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './partners.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const arrowStyle = {
  color: '#707070',
  width: 40,
  height: 40,
  padding: 7,
  cursor: 'pointer'
};

export function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        arrowStyle
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <ArrowBackIosIcon
      className={className}
      style={{
        ...style,
        arrowStyle
      }}
      onClick={onClick}
    />
  );
}

const Partners = () => {
  //Ha nem áll rendelkezésre logo, töltsd ki a descriptiont, és az jelenik meg a helyén
  const partners = [
    {
      logo: sodexo,
      description: ''
    },
    {
      logo: united_way,
      description: ''
    },
    {
      logo: noe,
      description: ''
    },
    {
      logo: jozsefvaros,
      description: ''
    },
    {
      logo: pest_immami,
      description: ''
    },
    {
      logo: kesztyugyar,
      description: 'Kesztyűgyár kft.'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="partners-wrapper">
      <h1>Partnereink</h1>
      <Slider {...settings}>
        {partners.map((partner, index) => {
          return partner.logo || partner.description ? (
            <div className="partner-wrapper" key={index}>
              {partner.logo ? (
                <div className="image-wrapper">
                  <img src={partner.logo} alt={`zsendulo_partner_${index}`} />
                </div>
              ) : partner.description ? (
                <div>{partner.description}</div>
              ) : null}
            </div>
          ) : null;
        })}
      </Slider>
    </div>
  );
};

export default Partners;
