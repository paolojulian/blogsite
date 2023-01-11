import React, { FunctionComponent, useEffect, useState } from 'react';
import { gameSubject } from '../lib/chess.js';
import Board from './Board';

export type GameProps = {
  // No Props
};

const Game: FunctionComponent<GameProps> = (props) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => setBoard(game.board));

    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className='w-screen min-h-screen h-screen bg-slate-800'>
      <Board board={board}></Board>
    </div>
  );
};

export default Game;
