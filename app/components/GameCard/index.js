/* eslint-disable react/prop-types */
/**
 *
 * GameCard
 *
 */

import React, { memo } from 'react';

function Hexagon({ letter }) {
  return (
    <div className="hexagon">
      <div className="hexagon-left" />
      <div className="hexagon-center">
        <span>{letter}</span>
      </div>
      <div className="hexagon-right" />
    </div>
  );
}

function GameCard({ firstLetter, games }) {
  return (
    <div className="game-card">
      <Hexagon letter={firstLetter || 'A'} />
      <p>
        <ul>
          {games.map(game => (
            <li key={game.name}>
              <a href="#home">{game.name}</a>
            </li>
          ))}
          <li>
            <a href="#home">Adipiscing consectetur dolor</a>
          </li>
          <li>
            <a href="#home">Consectetur lorem adipiscing</a>
          </li>
          <li>
            <a href="#home">Lorem ipsum dolor sit</a>
          </li>
          <li>
            <a href="#home">Adipiscing consectetur dolor</a>
          </li>
          <li>
            <a href="#home">Consectetur lorem adipiscing</a>
          </li>
          <li>
            <a href="#home">Lorem ipsum dolor sit</a>
          </li>
          <li>
            <a href="#home">Adipiscing consectetur dolor</a>
          </li>

          <li>
            <a href="#home">Lorem ipsum dolor sit</a>
          </li>
          <li>
            <a href="#home">Adipiscing consectetur dolor</a>
          </li>
          <li>
            <a href="#home">Consectetur lorem adipiscing</a>
          </li>
          <li>
            <a href="#home">Lorem ipsum dolor sit</a>
          </li>
          <li>
            <a href="#home">Adipiscing consectetur dolor</a>
          </li>
          <li>
            <a href="#home">Consectetur lorem adipiscing</a>
          </li>
          <li>
            <a href="#home">Lorem ipsum dolor sit</a>
          </li>
          <li>
            <a href="#home">Adipiscing consectetur dolor</a>
          </li>
        </ul>
      </p>
    </div>
  );
}

GameCard.propTypes = {};

export default memo(GameCard);
