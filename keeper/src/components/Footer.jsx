// footer

function Footer(){
    let Year = new Date().getFullYear();
    return <div className="footer">
        <p>Copyright {Year}</p>
    </div>
}

export default Footer;