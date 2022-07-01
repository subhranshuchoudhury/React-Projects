// keeper content

function Content(props) {
    return <div className="contentContainer">
        <h3 className="title">{props.title}</h3>
        <p className="content">{props.content}</p>
    </div>
}

export default Content;