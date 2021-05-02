type Props = {
  palette: {
    light: string;
    dark: string;
    pink: string;
  };
  responsive: {
    small: string;
    medium: string;
    large: string;
  };
  font: {
    body: string;
    header: string;
  };
};

const theme: Props = {
  palette: {
    light: `hsl(0deg 0% 100%)`,
    dark: `hsl(233deg 34% 27%)`,
    pink: `hsl(346deg 81% 87%)`,
  },
  responsive: {
    small: `34.214em`,
    medium: `54.786em`,
    large: `70.786em`,
  },
  font: {
    body: `'Markpro', sans-serif`,
    header: `'Formulacondensed' ,sans-serif`,
  },
};

export default theme;
