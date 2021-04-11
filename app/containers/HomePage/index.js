/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
/**
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
import Dropdown from 'react-dropdown';

import Navbar from 'components/Navbar';
import FilterType from 'components/FilterType';
import GameCard from 'components/GameCard';
import Footer from 'components/Footer';

function GameCardContainer({ games }) {
  const gamesByFirstLetter = {};
  for (let index = 0; index < games.length; index++) {
    const game = games[index];
    const firstLetter = game.name[0];
    gamesByFirstLetter[firstLetter] = [
      ...(gamesByFirstLetter[firstLetter] || []),
      game,
    ];
  }

  return Object.keys(gamesByFirstLetter).map(letter => (
    <GameCard firstLetter={letter} games={gamesByFirstLetter[letter]} />
  ));
}

const filters = [
  { title: 'State', filters: ['Available', 'Patching', 'Maintenance'] },
  {
    title: 'Genre Filters',
    filters: [
      'Shooters',
      'Action',
      'RPG',
      'Racing',
      'MOBA/MMO',
      'Simulation',
      'Strategy',
      'Sports',
      'Kids/Family',
      'Casual',
      'Demo',
      'Horror',
      'Platformer',
      'Battle Royale',
      'Adventure',
      'Open World',
    ],
  },
];

const gamesData = [
  { name: 'Grand Theft Auto V', genre: ['Adventure', 'Racing', 'Shooters'] },
  { name: 'Killing Floor 2', genre: ['Shooters'] },
  { name: 'Furi', genre: ['Adventure', 'Shooters'] },
  { name: 'Population Zero', genre: ['Adventure', 'RPG'] },
  {
    name: 'Mount & Blade II: Bannerlord',
    genre: ['Adventure', 'RPG', 'Simulator'],
  },
];

const sortOptions = [
  { label: 'Title A-Z', value: 'az' },
  { label: 'Title Z-A', value: 'za' },
];

function sortGamesAToZ(list) {
  return list.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function sortGamesZToA(gameList) {
  return gameList.sort((a, b) => (b.name > a.name ? 1 : -1));
}
export function HomePage() {
  const initialSortedGames = sortGamesAToZ(gamesData);
  const [sortedGames, setSortedGames] = useState(initialSortedGames);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  function sortGames(selected) {
    if (selected.value === 'az') {
      const newSortedGames = sortGamesAToZ([...sortedGames]); // we use spread so that don't mutate the original array
      setSortedGames(newSortedGames);
    } else {
      const newSortedGames = sortGamesZToA([...sortedGames]);
      setSortedGames(newSortedGames);
    }
  }

  function onFilterSelect(changeEvent) {
    const { name } = changeEvent.target;

    let newSelectedFilters;
    if (selectedFilters.includes(name)) {
      newSelectedFilters = selectedFilters.filter(filter => filter !== name);
      setSelectedFilters(newSelectedFilters);
    } else {
      newSelectedFilters = [...selectedFilters, name];
      setSelectedFilters(newSelectedFilters);
    }
  }

  function onSearchChange(e) {
    const { value } = e.target;
    search(value);
  }

  function search(query) {
    if (query !== '') {
      setSearchResult(
        sortedGames.filter(item =>
          item.name.toLowerCase().startsWith(query.toLowerCase()),
        ),
      );
    } else {
      setSearchResult([]);
    }
  }

  const showGames = !selectedFilters.length
    ? sortedGames
    : sortedGames.filter(sorted =>
      sorted.genre.find(genre => selectedFilters.includes(genre)),
    );

  return (
    <>
      <Navbar />

      <div className="jumbotron">
        <div className="content">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            With the Cloud Gaming, you can join, play, and share games online
            with anyone in the world. Play any game on any device!
          </p>

          <div className="search-area">
            <input
              type="text"
              name="search"
              placeholder="Search Games"
              onChange={onSearchChange}
              autoComplete="off"
            />
            <div className={`search-result ${!searchResult.length && 'hide'}`}>
              <ul>
                {searchResult.map(game => (
                  <li className="active" key={game.name}>
                    <a href="#home">{game.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="browse-wrapper">
          <h1>Browse Games</h1>
          <Dropdown
            options={sortOptions}
            onChange={sortGames}
            value={sortOptions[0]}
          />
        </div>

        <div className="main">
          <div className="filter-menu">
            {filters.map(filter => (
              <FilterType
                key={filter.title}
                title={filter.title}
                filters={filter.filters}
                selectedFilters={selectedFilters}
                onFilterSelect={onFilterSelect}
              />
            ))}
          </div>
          <div className="games">
            <GameCardContainer games={showGames} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

HomePage.propTypes = {};

export default memo(HomePage);
