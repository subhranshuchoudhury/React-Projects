// emoji info

function EmojiInfo(props) {
    return(
        <div className="emojiInfo">
            <h1>{props.emojiSymbol}</h1>
            <h3>{props.emojiTitle}</h3>
            <p>{props.emojiMeaning}</p>
        </div>
    )
}

export default EmojiInfo;