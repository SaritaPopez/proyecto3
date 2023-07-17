import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useEntries from '../hooks/useEntries';
import Entry from '../entry/Entry';
import HomeSearch from '../home-search/HomeSearch';

import './entriesSearch.css';


const EntriesSearch = () => {
  const { entries, searchParams, setSearchParams } = useEntries();
  const [filteredEntries, setFilteredEntries] = useState([]);
  
  useEffect(() => {
    // Aplicar el filtro cuando cambia el valor de 'entries' o la palabra clave en 'searchParams'
    const filtered = entries.filter((entry) => {
      const keyword = searchParams.get('keyword') || '';
      return (
        entry.title.toLowerCase().includes(keyword.toLowerCase()) ||
        entry.description.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteredEntries(filtered);
  }, [entries, searchParams]);
  
  return (
    <main className='entriesSearch'>
      <HomeSearch
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <ul className='block-container'>
      {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => <Entry key={entry.id} entry={entry} />)
        ) : (
          <li>¡No se ha encontrado ninguna entrada!</li>
        )}
      </ul>
    </main>
  );
};

export default EntriesSearch;
