import Header from "../Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import entryCreateService from "../../Services/createEntryService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./admin.css";

const Admin = ({ token }) => {
  console.log(token);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [neightborhood, setNeightborhood] = useState("");
  const [district, setDistrict] = useState("");
  const [description, setDescription] = useState("");
  const [photoA, setPhotoA] = useState();
  const [photoB, setPhotoB] = useState();
  const [photoC, setPhotoC] = useState();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      await entryCreateService(
        title,
        city,
        neightborhood,
        district,
        description,
        photoA,
        photoB,
        photoC,
        token
      );

      // Redireccionamos a la página principal.
      navigate("/");
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <>
      <Header className="headerNewEntry" />
      <div className="Admin">
        <div className="contaniner1">
          <img
            className="imagenC"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Imagen de perfil"
          />
          <p className="adm">Administrador</p>
          <p>San Diego, Ca</p>
        </div>
        <div className="container2">
          <p className="parrafo1Container2">
            ¡Haz tu ciudad más <br></br>accesible hoy!
          </p>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="titleFormNewEntry">
              <input
                className="title"
                type="text"
                placeholder="Escribe un título aquí"
                onChange={(e) => setTitle(e.target.value)}
                minLength="5"
                autoFocus
                required
              />
            </div>
            <div className="inputsNewEntry">
              <input
                className="city"
                placeholder="Ciudad"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                minLength="5"
                required
              />
              <input
                className="neightborhood"
                placeholder="Barrio"
                type="text"
                onChange={(e) => setNeightborhood(e.target.value)}
                minLength="5"
                required
              />
              <input
                className="district"
                placeholder="Distrito"
                type="text"
                onChange={(e) => setDistrict(e.target.value)}
                minLength="5"
                required
              />
            </div>
            <textarea
              className="descriptionNewEntry"
              placeholder="Describe tu incidencia aquí..."
              onChange={(e) => setDescription(e.target.value)}
              minLength="10"
              required
            />

            <label className="container-img">
              <input
                alt="icono imagen"
                type="file"
                className="subida-img"
                onChange={(e) => setPhotoA(e.target.files[0])}
              />

              <input
                type="file"
                className="subida-img"
                onChange={(e) => setPhotoB(e.target.files[0])}
              />

              <input
                type="file"
                className="subida-img"
                onChange={(e) => setPhotoC(e.target.files[0])}
              />
            </label>

            <button disabled={loading}>Publicar ↩</button>

            {loading && <Spinner />}

            {errMsg && <ErrorMessage msg={errMsg} />}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
Admin.propTypes = {
  token: PropTypes.string,
};

export default Admin;
