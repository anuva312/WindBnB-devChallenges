import "./Card.css";

export default function Card({
  image = "../images/image-not-found.png",
  image_alt,
  superhost = false,
  info,
  rating,
  title,
}) {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={image_alt}
          className="image"
        ></img>
      </div>

      <div className="about-container">
        <div>
          {superhost ? (
            <button className="superhost-button">super host</button>
          ) : null}
          <span className="info">{info}</span>
        </div>
        {rating ? (
          <div class="rating">
            <span class="material-icons">star</span>
            <span>{rating}</span>
          </div>
        ) : null}
      </div>
      <div className="title">{title}</div>
    </div>
  );
}
