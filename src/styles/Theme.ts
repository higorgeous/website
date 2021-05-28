type Props = {
  palette: {
    dark: string;
    light: string;
    alternative: string;
    navigation: string;
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
    alternative: `#f9e9cc`,
    navigation: `#232129`,
  },
  responsive: {
    small: `420px`,
    medium: `768px`,
    large: `960px`,
  },
  font: `Poppins, Helvetica, Arial, sans-serif`,
};

export default theme;
