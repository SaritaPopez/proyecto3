import './notfoundpage.css';

function NotFoundPage() {
  return (
    <div>
      <div id='oopss'>
        <div id='errorText'>
          <img
            src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg'
            alt={404}
          />
          <span>Error 404</span>
          <p className='pa'>Page not found! ...</p>
          <p className='pb'>You will be redirected ...</p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
