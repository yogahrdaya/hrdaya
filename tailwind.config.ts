import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "size-200": "200%",
      },
      colors: {
        mainColor: "#EAE3D3",
        pointColor: "#7D604C",
      },
      fontSize: {
        visualTitle: "70px",
        title: "32px",
      },
    },
    fontFamily: {
      sans: ["var(--noto_sans_kr)"],
      serif: ["var(--noto_serif_kr)"],
    },
  },
  plugins: [],
};
export default config;
