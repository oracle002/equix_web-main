"use client";
import { useParams } from "next/navigation";
import ProjectHero from "@/components/sections/projects/ProjectHero";
import WorkSummarySection from "@/components/sections/projects/WorkSummarySection";
import ChallengesSection from "@/components/sections/projects/ChallengesSection";
import ImagesSection from "@/components/sections/projects/ImagesSection";
import EquixProcess from "@/components/sections/projects/EquixProcess";
import TechnologyStack from "@/components/sections/projects/TechnologyStack";
import { products } from "@/content/projects";

export default function ProjectPage() {
  const params = useParams();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id ?? "0";
  const id = parseInt(idParam, 10);
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="p-10">Project not found</div>;

  return (
    <>
      {/* Hero Section */}
      <ProjectHero
        title={product.hero.title}
        subtitle={product.hero.subtitle}
        industry={product.hero.industry}
      />

      {/* Summary Section */}
      <WorkSummarySection
        services={product.summary.services}
        summary={product.summary.paragraphs}
        objectives={product.summary.objectives}
      />

      {/* Challenges Section */}
      <ChallengesSection challenges={product.challenges} />

      {/* Images Section */}
<ImagesSection images={product.images} />


      {/* Process Section */}
      <EquixProcess steps={product.process} />

      {/* Technology Stack Section */}
      <TechnologyStack
        tech={product.technology}
        outcomes={product.measurableOutcomes}
      />
    </>
  );
}
