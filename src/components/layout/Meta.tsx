// src/components/layout/Meta.tsx
import Head from "next/head";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string[];
}

export default function Meta({ title, description, keywords }: MetaProps) {
  const keywordString = keywords?.join(", ");
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordString && <meta name="keywords" content={keywordString} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
