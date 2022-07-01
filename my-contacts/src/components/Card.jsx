// Card component for contacts.
import Profile from "./Profile";
import Info from "./Info";

function Card(props) {
  return (

    <div className="card">
      <h2>Contact ID: {props.id}</h2>
      <Profile imgSrc={props.imgSrc} />
      <h1>{props.name}</h1>
      <Info
      mail = {props.mail}
      phone = {props.phone}
       />
      <p><button>Contact</button></p>
    </div>);
}

export default Card;