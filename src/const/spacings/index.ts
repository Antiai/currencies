const baseSize = 8;
const steps = 16;

// список из значений произведения baseSize * step в пикселях (8px, 16px, 24px...)
const SPACINGS = Array.from(Array(steps)).map((_, index) => `${(index + 1) * baseSize}px`);

export default SPACINGS;
