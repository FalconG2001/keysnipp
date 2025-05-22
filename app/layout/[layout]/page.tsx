import { Metadata } from "next";
import Head from "next/head";

import KeyboardGrid from "@/components/KeyBoardGrid";

import { sharedLayouts } from "@/data/utils";
import { deploymentURL } from "@/lib/seo.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ layout: string }>;
}): Promise<Metadata> {
  const { layout } = await params;
  const layoutName = layout.toUpperCase();
  return {
    title: `KeySnipp | ${layoutName} Keyboard Layout`,
    description: `Use the ${layoutName} layout to copy letters, numbers, and symbols when your physical keyboard is broken.`,
  };
}

export async function generateStaticParams() {
  return sharedLayouts.map((layout) => ({
    layout: layout.toLowerCase(),
  }));
}

export default async function Layout({
  params,
}: {
  params: Promise<{ layout: string }>;
}) {
  const { layout } = await params;
  const upperLayout = layout.toUpperCase();
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: `KeySnipp - ${upperLayout} Layout`,
              description: `Use the ${upperLayout} keyboard layout online to copy letters, numbers, and symbols when your physical keyboard is broken.`,
              url: `${deploymentURL}/layout/${layout}`,
            }),
          }}
        />
      </Head>
      <KeyboardGrid layout={layout} />
    </>
  );
}
