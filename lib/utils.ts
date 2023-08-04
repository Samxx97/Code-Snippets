import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isPathActive(currentPath: string, path: string) {
  return currentPath.startsWith(path)
}

export function enumToArray<T extends { [index: string]: string } >(enumType: T): { key: keyof T, value: T[keyof T] }[] {
  return Object.keys(enumType).map((key) => ({ key,
                                               value: enumType[key as keyof T] as T[keyof T] } ));
}
