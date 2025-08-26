// src/context/constants.ts
 
// export const AvailableThemes = ["white", "black", "red", "green"] as const;
// export type Theme = typeof AvailableThemes[number];
export const AvailableThemes = ["primary", "secondary", "tertiary"] as const;
export type Theme = (typeof AvailableThemes)[number];