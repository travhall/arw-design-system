import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Interface Design System",
      logo: {
        light: "./src/assets/arrow-logo-light.svg",
        dark: "./src/assets/arrow-logo-dark.svg",
        replacesTitle: true,
      },
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
          lang: "fr",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        },
        it: {
          label: "Italiano",
          lang: "it",
        },
        kr: {
          label: "한국어",
          lang: "kr",
        },
        es: {
          label: "Español",
          lang: "es",
        },
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      customCss: ["./src/css/styles.css"],
      sidebar: [
        {
          label: "Getting Started",
          link: "/getting-started/",
        },
        {
          label: "Guidelines",
          items: [
            {
              label: "Our Principles",
              link: "/guidelines/principles/",
            },
            {
              label: "Our Practice",
              link: "/guidelines/practice/",
            },
          ],
        },
        {
          label: "Foundations",
          items: [
            {
              label: "Colors",
              link: "/foundations/colors",
            },
            {
              label: "Typography",
              link: "/foundations/typography",
            },
            {
              label: "Layout",
              link: "/foundations/layout",
            },
            {
              label: "Icons",
              link: "/foundations/icons",
            },
            {
              label: "Logo",
              link: "/foundations/logo",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      social: {
        linkedin: "https://www.linkedin.com/company/arrow-electronics",
        youtube: "https://www.youtube.com/user/ArrowFiveYearsOut",
        facebook: "https://www.facebook.com/arrowfiveyearsout",
        instagram: "https://www.instagram.com/arrowelectronics/",
      },
      plugins: [starlightImageZoom()],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
