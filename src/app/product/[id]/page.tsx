"use client";

import { useParams } from "next/navigation";
import { products } from "@/content/product";

import Meta from "@/components/layout/Meta";
import { pageMeta } from "@/lib/metadata";

import ProductHero from "@/components/sections/product/ProductHero";
import Features from "@/components/sections/product/Features";
import WhositFor from "@/components/sections/product/WhositFor";
import ProductShowcase from "@/components/sections/product/AutomationSection";
import WhyProduct from "@/components/sections/product/WhyProduct";
import KeyOutcomes from "@/components/sections/product/KeyOutcomes";
import ContactCardProduct from "@/components/sections/product/ContactCardProduct";
import VisionTrackComparison from "@/components/sections/product/VisionAi/VisionTrackComparison";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="text-center py-32">Product not found</div>;
  }

  const metaMap: Record<string, keyof typeof pageMeta.products> = {
    "1": "dialogIQ",
    "2": "visionTrackAI",
    "3": "docuGenie",
  };

  const metaKey = metaMap[product.id] || "dialogIQ"; // fallback
  const meta = pageMeta.products[metaKey];

  return (
    <>
      <Meta
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
      />

      <ProductHero product={product} />
      <Features />

      {product.id === "2" && <VisionTrackComparison />}

      <WhositFor />
      <ProductShowcase />
      <WhyProduct />
      <KeyOutcomes />
      <ContactCardProduct />
    </>
  );
}
