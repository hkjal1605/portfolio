const lightTheme = {
  type: 'light',
  text: '#333333',
  textSecondary: '#8a8a8a',
  background: 'rgba(255,255,255,1)',
  textTertiary: '#FFCC66',
};

const darkTheme: Theme = {
  type: 'dark',
  text: '#eaeaea',
  textSecondary: '#666666',
  background: 'rgba(0,0,0,1)',
  textTertiary: '#FFCC66',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
