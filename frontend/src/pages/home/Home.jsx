import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import EntriesSearch from '../../components/EntriesSearch/EntriesSearch';
import Comments from '../../components/comments/Comments';
import './home.css';

function Home() {
  return (
    <div className='home'>
      <Header />
      <section className='section-home'>
        <h2>Discover your City</h2>
        <p>Discover fun new cities below</p>
      </section>
      <EntriesSearch />
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
