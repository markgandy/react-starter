import path from 'path';
import webpack from 'webpack';

export const entry = './index.js';

export const output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js',
};

export const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'REINDEX_URL': JSON.stringify(process.env.REINDEX_URL),
    },
  }),
];

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
    },
  ],
};
