import Abdulaziz from "./Abdulaziz";
export default function ItemList({ catalog = [] }) {
  return (
    <div className="list">
      {Abdulaziz.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="card-content">
            <h3 className="card-title">
              <b>{item.name}</b>
            </h3>
            <p>{item.description.slice(0, 60)}...</p>
          </div>
          <div className="card-action">
            <b>{item.price} $</b>
          </div>
          <div className="btn btn-primary">Show More...</div>
        </div>
      ))}
    </div>
  );
}
