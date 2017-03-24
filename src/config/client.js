import config from 'lego-starter-kit/utils/config';
import baseConfig from 'lego-starter-kit/config/client';

export default config.client(baseConfig, {
  siteTitle: 'skb',
  api: {
    base: '/api/v1',
  },
  host: __DEV__ ? process.env.IP || 'http://localhost:3000' : process.env.IP || 'http://localhost:3000',
});
