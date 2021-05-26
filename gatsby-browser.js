import { store, ReduxProvider } from './src/state';

export const wrapRootElement = ReduxProvider;

const segmentPageTrack = () => window.analytics && window.analytics.page();

export const onRouteUpdate = () => {
  store.dispatch({ type: `RESET_LAYOUT` });
  segmentPageTrack();
};
