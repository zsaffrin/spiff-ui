export const containInRange = (val, min, max) => Math.min(Math.max(val, min), max);

export const normalizeHex = (hex) => {
  let normalizedHex = hex;
  if (normalizedHex[0] === '#') {
    normalizedHex = normalizedHex.slice(1);
  }
  if (normalizedHex.length === 3) {
    normalizedHex = normalizedHex.replace(/(.)/g, '$1$1');
  }
  return normalizedHex;
};

export const hexToRgb = (hex) => {
  const normHex = normalizeHex(hex);
  return [
    parseInt(normHex.substring(0, 2), 16),
    parseInt(normHex.substring(2, 4), 16),
    parseInt(normHex.substring(4), 16),
  ];
};

export const adjustRgbLightness = (rgb, amt) => rgb.map((val) => {
  const adj = val + (255 - val) * (amt / 100);
  return Math.round(containInRange(adj, 0, 255));
});

export const rgbToHex = (rgb) => {
  const hexArray = rgb.map(val => (val < 16 ? `0${val.toString(16)}` : val.toString(16)));
  return `#${hexArray.join('')}`;
};

export const adjustHexLightness = (hex, amt) => {
  const cleanHex = normalizeHex(hex);
  const rgb = hexToRgb(cleanHex);
  const adjustedRgb = adjustRgbLightness(rgb, amt);
  return rgbToHex(adjustedRgb);
};

export const getRgbLightness = (rgb) => {
  const adj = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return Math.round(adj);
};

export const hexIsLight = (hex) => {
  const cleanHex = normalizeHex(hex);
  const rgb = hexToRgb(cleanHex);
  const lightness = getRgbLightness(rgb);
  return lightness > 125;
};

export const isHex = (hex) => {
  if (!hex) {
    return false;
  }
  const cleanHex = normalizeHex(hex);
  const converted = parseInt(cleanHex, 16);
  const rehexed = converted.toString(16);
  return cleanHex === rehexed;
};
