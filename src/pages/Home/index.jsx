import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
    const [videos, setVideos] = useState([]);

    async function getVideos() {
        const videosFromApi = await api.get("/videos");
        setVideos(videosFromApi.data);
    }

    useEffect(() => {
        getVideos();
    }, []);

    const inputTitle = useRef();
    const inputDescricao = useRef();
    const inputDuracao = useRef();

    async function createVideo() {
        await api.post("/videos", {
            title: inputTitle.current.value,
            description: inputDescricao.current.value,
            duration: inputDuracao.current.value,
        });
        getVideos();
    }

    async function deleteVideo(id) {
        await api.delete(`/videos/${id}`);
        getVideos();
    }

    return (
        <div className="container">
            <form action="" className="container__form">
                <h1 className="form__title">Cadastro de videos</h1>

                <input type="text" name="title" className="form__input" placeholder="Titulo" ref={inputTitle} />
                <input type="text" name="description" className="form__input" placeholder="Descrição" ref={inputDescricao} />
                <input type="number" name="duration" className="form__input" placeholder="Duração" ref={inputDuracao} />

                <button type="button" className="form__button" onClick={createVideo}>
                    Cadastrar
                </button>
            </form>

            {videos.map((video) => (
                <div key={video.id} className="container__card">
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

                    <button onClick={() => deleteVideo(video.id)}>
                        <img src={Trash} alt="Excluir" />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;
