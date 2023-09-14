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
