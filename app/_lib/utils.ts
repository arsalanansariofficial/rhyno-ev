import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

import { ColumnDef } from '@tanstack/react-table';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColumnDefinition<T>(headers: string[]) {
  return headers.map(header => ({
    header,
    accessorKey: header
  })) as ColumnDef<T>[];
}

export function pretty(params: string) {
  return params
    .replace(/([A-Z]+)/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .split(String())
    .join(String());
}
