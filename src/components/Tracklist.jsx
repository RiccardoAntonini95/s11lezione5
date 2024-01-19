/* all'onclick mi serve questa traccia in particolare sul player */

const Tracklist = ({track}) => {
  return (
    <div className="py-3 trackHover">
      <a href="#" className="card-title trackHover px-3 text-white"> {/* QUESTA VA AI PREFERITI */}
        {track.title}
      </a>
      <small className="duration text-white">
        {track.duration / 100} min
      </small>
    </div>
  );
};

export default Tracklist