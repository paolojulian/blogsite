import React, { FunctionComponent } from 'react';
import { IPiece } from '../models';
import { isDarkSquare } from '../utils/isDarkSquare';
import BoardSquare from './BoardSquare';

export type BoardProps = {
  board: IPiece[];
};

const Board: FunctionComponent<BoardProps> = ({ board }) => {
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='flex flex-wrap items-center justify-center w-[600px] h-[600px] m-auto '>
        {board.flat().map((piece, i) => (
          <BoardSquare key={i} piece={piece} isDark={isDarkSquare(i)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
