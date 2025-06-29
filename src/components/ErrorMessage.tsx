import { useNavigate, useRouteError } from "react-router-dom";

const ErrorMessage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.error("Erro:", error);

    return (
        <div>
            <h1>Algo deu errado... :(</h1>
            {/* <p>
                {error.data || error.message}
            </p> */}
            <button onClick={() => navigate(-1)}>
                &larr; Voltar
            </button>
        </div>
    );
}

export default ErrorMessage;