import {Link} from "react-router-dom";

export const FooterMenu = () => {
    return (
        <>
            <ul className={"footer-menu"}>
                <li><Link to={""}/><i className="uil uil-bag-alt"></i>&nbsp;portfolio</li>
                <li><Link to={""}/><i className="uil uil-wrench"></i>&nbsp;skills</li>
                <li><Link to={""}/><i className="uil uil-nerd"></i>&nbsp;hire me</li>
            </ul>
        </>
    )
}
