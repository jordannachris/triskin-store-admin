import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50">
            <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-16 m-2 w-full max-w-5xl min-h-[70vh]">
                <h1 className="text-5xl font-bold text-fuchsia-800 mb-10 text-center">
                    Algo deu errado... :(
                </h1>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-10 px-12 py-5 bg-fuchsia-700 text-white text-2xl font-semibold rounded-lg shadow hover:bg-fuchsia-800 transition"
                >
                    &larr; Voltar
                </button>
            </div>
        </div>
    );
}

export default ErrorMessage;