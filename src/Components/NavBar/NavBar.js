import logo from "../../img/logogastos.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import "./navBar.css";
import { auth } from "../../Firebase/Firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const NavBar = ({ titulo, primerLink, link }) => {
  const { usuario } = useAuth();
  const navigate = useNavigate();

  const cerrarSeccion = async () => {
    try {
      await signOut(auth);
      navigate("/inicio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="botonesNav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <Link to={primerLink}>
            <button className="btn btn-primary ">{link}</button>
          </Link>
          <button className="btn btn-primary " onClick={cerrarSeccion}>
            <BiExit />
          </button>
        </div>
      </nav>
      <header className="agregarGasto">
        <h2>{titulo}</h2>
      </header>
    </>
  );
};
