const ErrorSection = ({ err }) => {
  return (
    <section className="err-section">
      <div className="err">
        <img
          className="err-img"
          src="https://thumbs.gfycat.com/TiredEmbellishedLeopard-size_restricted.gif"
          alt="Crying girl"
        />
        <p className="err-message">{err}</p>
      </div>
    </section>
  );
};
export default ErrorSection;
