import storage from 'redux-persist/lib/storage';

// eslint-disable-next-line import/no-unresolved
import { ENV } from '@env';

const key = `app-storage-${ENV}`;
const PERSIST_KEY = `persist:${key}`;
const persistConfig = {
  key,
  storage,
  whitelist: ['language'],
  blacklist: ['navigation'],
};

export { PERSIST_KEY };
export default persistConfig;
