import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { useDrop } from 'react-dnd';
import { IPiece } from '../models';
import Piece from './Piece';
import Square from './Square';

export type BoardSquareProps = {
  piece: IPiece;
  isDark: boolean;
};

const BoardSquare: FunctionComponent<BoardSquareProps> = ({
  piece,
  isDark,
}) => {
  const [, dropRef] = useDrop({
    accept: 'piece',
    drop: () => {},
  });

  return (
    <div
      className={classNames(
        'w-[12.5%] h-[12.5%]',
        'overflow-hidden',
        'select-none'
      )}
      ref={dropRef}
    >
      <Square isDark={isDark}>{piece ? <Piece piece={piece} /> : null}</Square>
    </div>
  );
};

export default BoardSquare;
