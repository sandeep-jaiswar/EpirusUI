import type { Config } from "tailwindcss";
import { tokens } from "@repo/design-tokens";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
      },
      fontFamily: {
        ...tokens.typography.fontFamilies,
      },
      fontSize: {
        ...tokens.typography.fontSizes,
      },
      fontWeight: {
        ...tokens.typography.fontWeights,
      },
      spacing: {
        ...tokens.spacing,
      },
    },
  },
  plugins: [],
};

export default config;
