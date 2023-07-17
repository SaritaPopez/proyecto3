import PropTypes from 'prop-types';
import EntryBody from './entryBody/EntryBody';
import EntryHeader from './entryHeader/EntryHeader';
import EntryFooter from './entryFooter/EntryFooter';

const Entry = ({ entry, toogleLike, deleteEntry, loading }) => {
  console.log('Nombre de la imagen:', entry.photos[0]?.name);
  return (
    <li className='entry'>
      <EntryBody description={entry.description} photos={entry.photos} />
      <EntryHeader username={entry.username} createdAt={entry.createdAt} />
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
  );
};

Entry.propTypes = {
  entry: PropTypes.object,
  toogleLike: PropTypes.func,
  deleteTweet: PropTypes.func,
  loading: PropTypes.bool,
};
export default Entry;
