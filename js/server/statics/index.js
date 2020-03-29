import express from 'express';

// const env = process.env.NODE_ENV;

const statics = [];

const setStatics = app => {
  for (const staticPath of statics) {
    app.use(staticPath.route, express.static(staticPath.dir, staticPath.cache));
  }
};

export default setStatics;
