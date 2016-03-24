import path from 'path';

export const entry = './index.js';

export const output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js',
};

export const devServer = {
  inline: true,
  port: 3334,
};

export const module = {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      },
    },
  ],
};
