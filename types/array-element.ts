export type ArrayElement<T> = T extends (infer R)[] ? R : never;
