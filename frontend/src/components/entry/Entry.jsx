import PropTypes from 'prop-types';
import EntryBody from './entryBody/EntryBody';
import EntryHeader from './entryHeader/EntryHeader';
import EntryFooter from './entryFooter/EntryFooter';
import { Link } from 'react-router-dom';

const Entry = ({ entry, toogleLike, deleteEntry, loading }) => {
  console.log('Nombre de la imagen:', entry.photos[0]?.name);
  return (
    <Link to={`/entries/${entry.id}`}>
      <li className='entry'>
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
