import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
    let videos = [];

    async function getVideos() {
        videos = await api.get("/videos");
    }

    return (
        <div className="container">
            <form action="" className="container__form">
                <h1 className="form__title">Cadastro de videos</h1>

                <input type="text" name="title" className="form__input" placeholder="Titulo" />
                <input type="text" name="description" className="form__input" placeholder="Descrição" />
                <input type="number" name="duration" className="form__input" placeholder="Duração" />

                <button type="button" className="form__button">
                    Cadastrar
                </button>
            </form>

            {videos.map((video) => (
                <div className="container__card">
                    <div>
                        <p>
                            Titulo: <span>{video.title}</span>
                        </p>
                        <p>
                            Descrição: <span>{video.description}</span>
                        </p>
                        <p>
                            Duração: <span>{video.duration}</span>
                        </p>
                    </div>

                    <button>
                        <img src={Trash} alt="Excluir" />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;
