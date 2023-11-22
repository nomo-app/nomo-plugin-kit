import {
  NomoTheme,
  getCurrentNomoTheme,
  injectNomoCSSVariables,
  switchNomoTheme,
} from "nomo-webon-kit/dist/nomo_theming";

export async function themeSwitchDemo() {
  const oldTheme: NomoTheme = (await getCurrentNomoTheme()).name as NomoTheme;
  const newTheme: NomoTheme =
    oldTheme === "LIGHT"
      ? "DARK"
      : oldTheme == "DARK"
      ? "TUPAN"
      : oldTheme == "TUPAN"
      ? "AVINOC"
      : "LIGHT";
  await switchNomoTheme({ theme: newTheme });
  await injectNomoCSSVariables(); // refresh css variables after switching theme
}