
import Debug from 'debug';
const debug = Debug('goodly:memory-cache');

export default () => {
  let _cache = {};

  return {
    readFromCache: (key) => {
      debug('reading %s', key);
      return _cache[key];
    },

    writeToCache: (key, data) => {
      debug('writing %s', key);
      _cache[key] = data;
    }
  };

};