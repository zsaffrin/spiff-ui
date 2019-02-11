const renderTheme = (baseFontSize = 16) => {
  const spacing = {
    xs: baseFontSize * 0.125, // 2px
    sm: baseFontSize * 0.25, //  4px
    md: baseFontSize * 0.5, //   8px
    lg: baseFontSize, //         16px
    xl: baseFontSize * 1.5, //   24px
    xxl: baseFontSize * 2, //    32px
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

export default renderTheme(16);
