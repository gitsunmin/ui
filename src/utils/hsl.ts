import { IntRange } from '@/types/number';

export const hsl = (hue: IntRange<0, 361>, saturation: IntRange<0, 101>, lightness: IntRange<0, 101>) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;