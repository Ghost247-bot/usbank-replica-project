
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchData, SearchResult } from './searchData';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8); // Limit to 8 results

    setSearchResults(filtered);
    setSelectedIndex(-1);
  }, [searchQuery]);

  const addToRecentSearches = (result: SearchResult) => {
    const updated = [result, ...recentSearches.filter(r => r.path !== result.path)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleResultClick = (result: SearchResult) => {
    addToRecentSearches(result);
    navigate(result.path);
    setSearchQuery('');
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => prev < searchResults.length - 1 ? prev + 1 : prev);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        const result = searchResults[selectedIndex];
        handleResultClick(result);
      }
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    selectedIndex,
    recentSearches,
    handleKeyDown,
    handleResultClick,
    clearSearch,
    resetSearch
  };
};
