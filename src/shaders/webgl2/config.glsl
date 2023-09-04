struct config
{
  float width;
  float height;

  float maxDepth;
  // float samples;
  float pixelRatio;
};

config Config = config(360.0, 240.0, 50.0, /* 500.0, */ 1.0);
