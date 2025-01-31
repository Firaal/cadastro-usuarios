import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
    const users = [
        {
            id: 1,
            name: "Paulo",
            age: 20,
            email: "rod@email.com",
        },
        {
            id: 2,
            name: "Matheus",
            age: 22,
            email: "matheus22@email.com",
        },
    ];

    return (
        <div className="container">
            <form action="" className="container__form">
                <h1 className="form__title">Cadastro de usuários</h1>

                <input type="text" name="nome" className="form__input" placeholder="Nome" />
                <input type="number" name="idade" className="form__input" placeholder="Idade" />
                <input type="email" name="email" className="form__input" placeholder="Email" />

                <button type="button" className="form__button">
                    Cadastrar
                </button>
            </form>

            {users.map((user) => (
                <div key={user.id} className="container__card">
                    <div>
                        <p>
                            Nome: <span>{user.name}</span>
                        </p>
                        <p>
                            Idade: <span>{user.age}</span>
                        </p>
                        <p>
                            Email: <span>{user.email}</span>
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
