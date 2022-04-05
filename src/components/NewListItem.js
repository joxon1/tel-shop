export default function NewListItem(props) {
  const { title, img, description, price } = props;
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <div className="card__img">
        <img className="list-item-img" src={img} alt={title} />
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <span>
          <b>{price} $</b>
        </span>
      </div>
      <a href="#" className="btn btn-primary">
        Show More
      </a>
    </div>
  );
}
