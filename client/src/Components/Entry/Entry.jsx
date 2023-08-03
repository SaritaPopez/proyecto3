import PropTypes from 'prop-types';
import EntryBody from './EntryBody/EntryBody';
import EntryHeader from './EntryHeader/EntryHeader';
import EntryFooter from './EntryFooter/EntryFooter';
import { Link } from 'react-router-dom';

const Entry = ({ entry, toogleLike, deleteEntry, loading }) => {
  console.log('Nombre de la imagen:', entry.photos[0]?.name);
  return (
    <Link
      className='link'
      to={`/entries/${entry.id}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <li className={`entry ${entry.resolved ? 'resolved' : ''}`}>
        <EntryHeader username={entry.username} createdAt={entry.createdAt} />
        <EntryBody description={entry.description} photos={entry.photos} />
        <EntryFooter
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
