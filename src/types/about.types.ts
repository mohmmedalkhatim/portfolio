import { ReactElement } from "react";

// src/types/about.types.ts
export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  delta: string;
  positive: boolean;
  Icon: ReactElement;
}

export interface AboutData {
  name: string;
  role: string;
  bio: string[];
  stats: StatItem[];
  skills: string[];
  imageAlt: string;
}
