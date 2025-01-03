import "../styles/Button.scss";

function Button({ text, link }) {
  return (
    <div className="blue_button">
      <a className="button" href={link}>
        {text}
      </a>
    </div>
  );
}

export default Button;
