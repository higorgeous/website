import { SET_MENU, RESET_LAYOUT, SET_PAGE_THEME } from '../types';

type State = {
  menuPanel: boolean;
  page: {
    theme: {
      leftDark: boolean;
      rightDark: boolean;
    };
  };
};

const initialState: State = {
  menuPanel: false,
  page: {
    theme: {
      leftDark: true,
      rightDark: false,
    },
  },
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
    case SET_PAGE_THEME:
      return {
        ...state,
        page: {
          theme: {
            leftDark: action.payload.leftDark,
            rightDark: action.payload.rightDark,
          },
        },
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
