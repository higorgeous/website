import { SET_MENU, RESET_LAYOUT } from '../types';

type State = {
  menuPanel: boolean;
};

const initialState: State = {
  menuPanel: false,
};

const LayoutReducer: any = (
  state: State = initialState,
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menuPanel: !state.menuPanel,
      };
    case RESET_LAYOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default LayoutReducer;
