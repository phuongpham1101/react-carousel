import React, { useEffect, useState } from 'react';
import './carousel.css';
import CarouselHeading from './CarouselHeading';
import HeroCTA from './HeroCTA';

const Carousel = (props) => {
  const [active, setActive] = useState(0);

  const slideCount = props.slides.length;

  const updateActiveIndex = (newIndex) => {
    if (newIndex < 0 ) {
      newIndex = slideCount - 1;
    } else if (newIndex >= slideCount) {
      newIndex = 0;
    }

    setActive(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateActiveIndex(active + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    }
  })

  const items = props.slides.map((slide, index) =>
    <div className="item-card" key={slide.id}>
      <button 
        className={`${index === active ? "active" : ""} indicator`} 
        onClick={() => {updateActiveIndex(index)}} />
      <h2 className="title">{slide.title}</h2>
      <p className="excerpt">{slide.excerpt}</p>
      <HeroCTA url={slide.cta.url} label={slide.cta.label} />
    </div>
  );

  return (
    <div className='carousel'>
      <div className='slide' style={{backgroundImage: `url(${props.slides[active].backgroundImage})`}}>
        <div className='hero-heading'>
          <CarouselHeading heading={props.heading} />
          <HeroCTA url={props.cta.url} label={props.cta.label} />
        </div>
        <div className='items-wrapper'>
          <div className='carousel-inner'>
            <div class="nav-line"></div>
            <div className='carousel-items'>
              {items}
            </div>
          </div>
          <div className='scroll-arrow'>
            <img src={process.env.PUBLIC_URL + '/image/arrow-down.png'} alt="arrow down" />
            <span>SCROLL FOR MORE</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Carousel;