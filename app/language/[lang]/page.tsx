import { Metadata } from "next";
import Head from "next/head";

import KeyboardGrid from "@/components/KeyBoardGrid";

import { langs } from "@/data/utils";
import { deploymentURL } from "@/lib/seo.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const langDisplay = lang.charAt(0).toUpperCase() + lang.slice(1);
  return {
    title: `KeySnipp | ${langDisplay} Language Virtual Keyboard`,
    description: `Copy ${langDisplay} language characters online when your keyboard isn't working. Just click to copy from KeySnipp.`,
  };
}

export async function generateStaticParams() {
  return langs.map((lang) => ({
    lang: lang.toLowerCase(),
  }));
}

export default async function Lang({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const langDisplay = lang.charAt(0).toUpperCase() + lang.slice(1);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: `KeySnipp - ${langDisplay} Language Keyboard`,
              description: `Use the ${langDisplay} virtual keyboard online to copy letters, numbers, and symbols when your physical keyboard is broken.`,
              url: `${deploymentURL}/language/${lang}`,
              inLanguage: lang,
            }),
          }}
        />
      </Head>
      <KeyboardGrid lang={lang} />
    </>
  );
}
