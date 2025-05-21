import KeyboardGrid from "@/components/KeyBoardGrid";
import { sharedLayouts } from "@/data/utils";

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
  return (
    <>
      <KeyboardGrid layout={layout} />
    </>
  );
}
