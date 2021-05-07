import chroma from 'chroma-js';

import { SET_PAGE_THEME } from '../../types';

export const setPageTheme: any = (data) => (dispatch: any) => {
  const { leftColor, rightColor } = data.theme;
  const leftDark = chroma(leftColor).get(`lab.l`) < 70;
  const rightDark = chroma(rightColor).get(`lab.l`) < 70;

  dispatch({
    type: SET_PAGE_THEME,
    payload: { leftDark, rightDark },
  });
};