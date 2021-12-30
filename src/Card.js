import './App.css';

function Card (props) {
  return (
      <div className="card">
        <img className="img" src={props.imglink} alt="" />
        <div className="card-detail">
          <a className="name">{props.name}</a>
          <a className="email">{props.email}</a>
        </div>
      </div>
  );
}

export default Card;

