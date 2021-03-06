interface ITheme {
  colors: {
    background: string;
    backgroundModal: string;
    red: string;
    blue: string;
    green: string;
    blueLight: string;
    text: string;
    textTitle: string;
    textBody: string;
    inputBorder: string;
    inputBackground: string;
    shape: string;
  };
  borderRadius: string;
}

export const theme: ITheme = {
  colors: {
    background: '#F0F2F5',
    backgroundModal: '#00000080',
    red: '#E52E4D',
    green: '#33CC95',
    blue: '#5429CC',
    blueLight: '#6933FF',
    text: '#FFFFFF',
    textTitle: '#363F5F',
    textBody: '#969CB3',
    inputBorder: '#d7d7d7',
    inputBackground: '#e7e9ee',
    shape: '#FFFFFF',
  },
  borderRadius: '0.25rem',
};
