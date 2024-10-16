import {Link} from 'react-scroll';
import './footer.css';

const Footer=()=>(
    <footer>
        <Link to="home" spy={true} smooth={true} offset={-50}><button type="button" className="footer-button">Go to top</button></Link>
        <p className="copyright">Copyright <i className="fa-regular fa-copyright" aria-hidden="true"></i>2024; Designed by Anil Goguri</p>
    </footer>

)

export default Footer