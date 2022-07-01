// info -- email and phone number

function Info(props) {
    return (
        <div className="bottom">
            <p className="phone-text">{props.phone}</p>
            <p className="mail-text">{props.mail}</p>
        </div>
    );
}

export default Info;