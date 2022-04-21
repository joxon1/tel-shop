export default function Item(props) {
  const { name, price, description, image } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3 className="card-title">
          <b>{name}</b>
        </h3>
        <p>{description.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <b>{price} $</b>
      </div>
    </div>
  );
}
