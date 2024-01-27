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
