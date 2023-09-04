import PropTypes from "prop-types";
import EntryBody from "./EntryBody/EntryBody";
import EntryHeader from "./EntryHeader/EntryHeader";
import EntryFooter from "./EntryFooter/EntryFooter";
import { Link } from "react-router-dom";

const Entry = ({ entry, toogleLike, deleteEntry, loading }) => {
  console.log("Nombre de la imagen:", entry.photos[0]?.name);
  return (
    <Link
      className="link"
      to={`/entries/${entry.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <li
        className={`entry ${entry.resolved ? "resolved" : ""}`}
        title={entry.resolved ? "Entrada resuelta" : "Entrada no resuelta"}
      >
        <EntryHeader
          username={entry.username}
          createdAt={entry.createdAt}
          className="head"
        />
        <EntryBody
          description={entry.description}
          photos={entry.photos}
          className="bod"
        />
        <EntryFooter
          className="foot"
          entryId={entry.id}
          owner={entry.owner}
          likes={entry.likes}
          likedByMe={entry.likedByMe}
          toogleLike={toogleLike}
          deleteTweet={deleteEntry}
          loading={loading}
        />
      </li>
    </Link>
  );
};

Entry.propTypes = {
  entry: PropTypes.object,
  toogleLike: PropTypes.func,
  deleteTweet: PropTypes.func,
  loading: PropTypes.bool,
};
export default Entry;
