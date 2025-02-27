import { atom } from "jotai";
import { HeaderProps } from "src/components/common/navbar";

export const navbarStateAtom = atom<HeaderProps>({
  mode: "light",
  hasBackground: false,
});
