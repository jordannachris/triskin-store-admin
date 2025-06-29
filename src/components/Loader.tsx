const loaderStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "32px",
  fontSize: "1.2rem",
  color: "#888"
};

const Loader = () => (
  <div style={loaderStyle}>
    <h1>Carregando...</h1>
  </div>
);

export default Loader;