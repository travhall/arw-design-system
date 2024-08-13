import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

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
      // Set English as the default language for this site.
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
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
      customCss: ["./src/css/tailwind.css"],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              link: "/guides/example/",
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
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
