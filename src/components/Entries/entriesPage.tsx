import React, { useEffect } from 'react';
import { Content, Loading } from 'carbon-components-react';

// Hooks
import { useEntry } from '../../hooks/useEntry';

// Components
import EntriesList from './entriesList';
import Pagination from './pagination';
import SearchBar from './search/seachBar';

interface ComponentProps {
  type: 'movie' | 'series';
}

const EntriesPage: React.FC<ComponentProps> = ({ type }) => {
  const {
    entries,
    getAll,
    isLoading,
    pagination,
    search: { changeSearch },
  } = useEntry(type);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <SearchBar changeSearch={changeSearch} />
      <Content className="dark-mode">
        {isLoading && <Loading />}
        <h2 className="entry__title">
          Popular {type === 'movie' ? 'Movies' : 'Series'}
        </h2>
        <EntriesList entries={entries} />
        <Pagination {...pagination} />
      </Content>
    </>
  );
};

export default EntriesPage;
