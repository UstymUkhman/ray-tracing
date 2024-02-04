import type { Vec3 } from '@/utils/Vector3';

type Material = {
  type: number;
  albedo: Vec3;
  extra: number;
};

export type SphereUniform = {
  center: Vec3;
  radius: number;
  material: Material;
};

export type CameraUniform = {
  u: Vec3;
  v: Vec3;
  origin: Vec3;
  vertical: Vec3;
  horizontal: Vec3;
  lowerLeftCorner: Vec3;
  lensRadius: number;
};
