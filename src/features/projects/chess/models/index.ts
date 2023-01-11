export interface IPiece {
  square: any;
  type: IType;
  color: any;
}

export type IType = 'p' | 'b' | 'r' | 'q' | 'k' | 'n'