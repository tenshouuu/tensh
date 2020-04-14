export function hexToRgba(hex, opacity = 1) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    // eslint-disable-next-line no-bitwise
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255, opacity];
  }
  return hex;
}

export function convertCssRgba(hex, opacity = 1) {
  const valuesArray = hexToRgba(hex, opacity);
  if (valuesArray.length === 4) {
    return `rgba(${valuesArray.join(',')})`;
  }
  return hex;
}
