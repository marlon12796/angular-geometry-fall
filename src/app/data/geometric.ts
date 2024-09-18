export const SHAPES = ['box', 'sphere', 'cylinder', 'tetrahedron'] as const;
export type ShapeType = (typeof SHAPES)[number];
export interface GeometricShape {
  id: number;
  shape: ShapeType;
  color: string;
  position: [number,number,number]
}
