import HeroCTA from "./HeroCTA";

const Slide = (props) => {
  return(
    <>
      <h2>{props.title}</h2>
      <p>{props.excerpt}</p>
      <HeroCTA url={props.url} label={props.url} />
    </>
  );
}