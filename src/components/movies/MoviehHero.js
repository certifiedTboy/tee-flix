const MovieHero = ({ children }) => {
  return (
    <section className="container">
      <div className="content-container">
        <div className="featured-content">
          <img
            className="featured-title"
            src={require("../../Assets/f-t-1.png")}
            alt=""
          />
          <div style={{ width: "70%" }}>
            <p className="featured-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              illo dolor deserunt nam assumenda ipsa eligendi dolore, ipsum id
              fugiat quo enim impedit, laboriosam omnis minima voluptatibus
              incidunt. Accusamus, provident.
            </p>
          </div>
          <button className="featured-button">WATCH</button>
        </div>

        {children}
      </div>
    </section>
  );
};

export default MovieHero;
