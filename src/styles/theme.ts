interface ITheme {
  colors: {
    background: string;
    red: string;
    blue: string;
    green: string;
    blueLight: string;
    text: string;
    textTitle: string;
    textBody: string;
    shape: string;
  };
  borderRadius: string;
}

export const theme: ITheme = {
  colors: {
    background: '#F0F2F5',
    red: '#E52E4D',
    green: '#33CC95',
    blue: '#5429CC',
    blueLight: '#6933FF',
    text: '#FFFFFF',
    textTitle: '#363F5F',
    textBody: '#969CB3',
    shape: '#FFFFFF',
  },
  borderRadius: '0.25rem',
};
