import clsx, { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  prefix: 'tw-',
});

export const cn = (...args: ClassValue[]) => customTwMerge(clsx(...args));
