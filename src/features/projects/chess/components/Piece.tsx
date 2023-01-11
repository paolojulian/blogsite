import Image from 'next/image';
import React, { FunctionComponent, useMemo } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import PawnSVG from '../images/Pawn.svg';
import PawnPNG from '../images/p_w.png';
import { IPiece } from '../models';

export type PieceProps = {
  piece: IPiece;
};

const PieceImage = (props: React.ComponentProps<typeof Image>) => {
  return <Image className='h-full w-auto' {...props} />;
};

const Piece: FunctionComponent<PieceProps> = ({ piece }) => {
  const [{ isDragging }, dragSource, preview] = useDrag({
    type: 'piece',
    item: {
      type: 'piece',
      id: `${piece.type}_${piece.color}`,
    },
    collect(monitor) {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  const pieceID = useMemo(() => `${piece.type}_${piece.color}`, [piece]);
  const pieceImg = useMemo(
    () => require(`../images/pieces/${piece.type}_${piece.color}.png`),
    [piece]
  );

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div className='text-sky-400 cursor-grab w-full h-full font-bold'>
        <div
          className='flex items-center h-full w-full justify-center p-2'
          ref={dragSource}
        >
          <PieceImage alt={`${pieceID}.png`} src={pieceImg} />
        </div>
      </div>
    </>
  );
};

export default Piece;
