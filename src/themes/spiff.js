const renderTheme = () => {
  const baseFontSize = 16;

  const spacing = {
    thin: '1px',
    xs: '2px',
    sm: `${baseFontSize * 0.25}px`, // 4px
    md: `${baseFontSize * 0.5}px`, // 8px
    lg: `${baseFontSize}px`, // 16px
    xl: `${baseFontSize * 1.5}px`, // 24px
    xxl: `${baseFontSize * 2}px`, // 32px
  };

  return {
    name: 'zeact',
    baseFontSize,
    colors: {
      black: '#111',
      grays: ['#ebedee', '#dee1e3', '#bec4c8', '#97a1a7', '#5f6e78'],
      white: '#f8f9f9',
      primary: '#00365d',
      secondary: '#610008',
      danger: '#b8000f',
      success: '#00a243',
    },
    spacing,
    buttons: {
      corners: '3px',
      fontWeight: 'bold',
    },
  };
};

export default renderTheme();
