const Loader = () => (
  <div className="flex flex-col items-center justify-center py-16">
    <div className="rounded-2xl px-16 py-16 flex flex-col items-center w-full max-w-2xl">
      <h1 className="text-3xl text-gray-500 font-semibold mb-8">Carregando...</h1>
      <div className="w-16 h-16 border-4 border-fuchsia-300 border-t-fuchsia-700 rounded-full animate-spin"></div>
    </div>
  </div>
);

export default Loader;