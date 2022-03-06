const HeroCTA = (props) => {
  return(
    <a href={props.url}>
        <button className="hero-cta">{props.label} <i className="fas fa-arrow-right cta-icon"></i></button>
    </a>
  );
}

export default HeroCTA;