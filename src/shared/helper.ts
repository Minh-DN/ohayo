import { Pages } from "./types";

export function formatPageName(pageName: Pages) {
  return pageName.replace(/-/g, ' ');
}