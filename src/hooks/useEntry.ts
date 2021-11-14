import { useEffect, useState } from 'react';
import { IEntry } from '../interface/entries';
import { getEntries } from '../services/api';

const PER_PAGE = 10;

export const useEntry = (type: 'movie' | 'series' = 'movie') => {
  const [allEntries, setAllEntries] = useState<IEntry[]>([]);
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [displayEntries, setDisplayEntries] = useState<IEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(0);

  const [search, setSearch] = useState('');

  // When change page or search, apply mutation to displayEntries
  useEffect(() => {
    setDisplayEntries(entries.slice(page * PER_PAGE, (page + 1) * PER_PAGE));
  }, [page]);

  useEffect(() => {
    const newEntries = allEntries.filter((entry) => {
      return entry.title
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(search.toLowerCase().replace(/\s/g, ''));
    });
    setEntries(newEntries);
    setTotal(newEntries.length);
    setPage(0);
    if (page === 0) {
      setDisplayEntries(
        newEntries.slice(page * PER_PAGE, (page + 1) * PER_PAGE)
      );
    }
  }, [search]);

  const getAll = async () => {
    setIsLoading(true);
    const { entries } = await getEntries();
    setIsLoading(false);
    const entriesByType = entries.filter((entry) => entry.programType === type);
    setEntries(entriesByType);
    setAllEntries(entriesByType);
    setDisplayEntries(
      entriesByType.slice(page * PER_PAGE, (page + 1) * PER_PAGE)
    );
    setTotal(entriesByType.length);
  };

  const pageToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 80);
  };

  const setNext = async () => {
    if (page * PER_PAGE >= total) return;
    setPage((prevState) => prevState + 1);
    pageToTop();
  };

  const setPrev = async () => {
    if (page === 0) return;
    setPage((prevState) => prevState - 1);
    pageToTop();
  };

  const goPage = async (page: number) => {
    setPage(page);
    pageToTop();
  };

  const changeSearch = (value: string) => setSearch(value);

  return {
    getAll,
    entries: displayEntries,
    isLoading,
    search: {
      changeSearch,
    },
    pagination: {
      total,
      page,
      setNext,
      setPrev,
      goPage,
      numPages: Math.ceil(total / PER_PAGE),
    },
  };
};
