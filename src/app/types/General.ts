export interface ClientWindowResolution {
  width: number;
  height: number;
  isMobile: boolean;
  isLandscape: boolean;
}

export interface Multilanguage {
  en: string | string[];
  ru: string | string[];
}

export interface ActionReducer<T> {
  type: string
  payload: T
}
