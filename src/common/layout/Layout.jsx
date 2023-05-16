import { FooterMenu } from "../menu/FooterMenu.jsx";
import {Navbar} from "../navbar/Navbar.jsx";

export const Layout = ({children}) => {
    return (
        <main>
            <Navbar/>
            {children}
            <FooterMenu/>
        </main>
    )
}
