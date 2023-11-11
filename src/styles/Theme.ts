type Props = {
  palette: {
    dark: string;
    light: string;
    alternative: string;
    navigation: string;
    red: string;
  };
  responsive: {
    small: string;
    medium: string;
    large: string;
  };
  font: string;
};

const theme: Props = {
  palette: {
    dark: `#1e1e1e`,
    light: `#ffffff`,
    alternative: `#f7dcdc`,
    navigation: `#000941`,
    red: `rgb(252,3,3)`,
  },
  responsive: {
    small: `420px`,
    medium: `768px`,
    large: `960px`,
  },
  font: `Poppins, Helvetica, Arial, sans-serif`,
};

export default theme;
