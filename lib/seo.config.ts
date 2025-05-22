// seo.config.ts
export const deploymentURL = "https://keysnipp.vercel.app";

export const defaultSEO = {
  title: "KeySnipp - Online Keyboard for Broken Keys",
  description:
    "KeySnipp helps you copy letters, numbers, and symbols when your keyboard keys stop working. Access a virtual keyboard instantly.",
  canonical: deploymentURL,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: deploymentURL,
    site_name: "KeySnipp",
    title: "KeySnipp - Online Keyboard for Broken Keys",
    description:
      "Access your missing keyboard keys using KeySnipp’s virtual layouts. Just click and copy.",
    images: [
      {
        url: `${deploymentURL}/og.jpg`, // Create a default social preview image
        width: 1200,
        height: 630,
        alt: "KeySnipp Preview",
      },
    ],
  },
  twitter: {
    handle: "@KeySnipp",
    site: "@KeySnipp",
    cardType: "summary_large_image",
  },
};
