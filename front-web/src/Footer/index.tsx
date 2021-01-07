import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as Instagram } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <YouTubeIcon/>
                </a>
                <a href="https://www.linkedin.com/in/caio-costa-4bb80b203/" target="_new">
                    <LinkedIn/>
                </a>
                <a href="https://www.instagram.com/caio_nak/" target="_new">
                     <Instagram/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;