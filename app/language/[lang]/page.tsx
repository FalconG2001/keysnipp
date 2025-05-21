import KeyboardGrid from "@/components/KeyBoardGrid";
import { langs } from "@/data/utils";

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
  return (
    <>
      <KeyboardGrid lang={lang} />
    </>
  );
}
