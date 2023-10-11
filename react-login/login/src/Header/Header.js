import { Link } from 'react-router-dom';
import '../style/Main.css';
export default function Header(){
    return (
        <header>
        <nav class="chacam">
        <div class="chacam_logo">
            <Link to= '/' className="links">CHACAM</Link>
        </div>
        <ul class="chacam_menu">
            <li><Link to= '/' className="links">HOME</Link></li>
            <li><Link to= '/CAR' className="links">CAR</Link></li>
            {/* <li><a href="carsection.jsp">CAR</a></li> */}
            <li><Link to= '/SPOT' className="links">SPOT</Link></li>
            {/* <li><a href="mapsection.jsp">SPOT</a></li> */}
            <li><Link to= '/CUMUNITY' className="links">CUMUNITY</Link></li>
            {/* <li><a href="chacamList">CUMUNITY</a></li> */}
            <li><Link to= '/Q&A' className="links">Q&A</Link></li>
            {/* <li><a href="bbs.jsp">Q&A</a></li>  */}
            <li><Link to= '/LOGIN' className="links">LOGIN</Link></li>
			{/* <li><a href="login.jsp">LOGIN</a></li> */}
            <li><Link to= '/MEMBER' className="links">회원가입</Link></li>
			{/* <li><a href="join.jsp">회원가입</a></li> */}
            <li><Link to= '/MY' className="links">MY</Link></li>
			{/* <li><a href="myPage.jsp">My</a></li> */}
            <li><Link to= '/LOGOUT' className="links">LOGOUT</Link></li>
			{/* <li><a href="logoutAction.jsp">Logout</a></li> */}
        </ul>
    </nav>
    </header>
    )
}