"use client";

import { useParams } from "next/navigation";
import { caseStudies } from "@/content/caseStudies"; 

// Case Study Sections
import CaseHero from "@/components/sections/casestudy/CaseHero";

import ProblemStatement from "@/components/sections/casestudy/ProblemStatement";
import SolutionOverview from "@/components/sections/casestudy/Soloutions";
import TechStack from "@/components/sections/casestudy/TechnologyStack";

import RoadmapImpactCompetitive from "@/components/sections/casestudy/RoadmapImpact";
import ChallengesAndEdge from "@/components/sections/casestudy/ChallengesAndEdge";
import ExecutiveSummary from "@/components/sections/casestudy/ExecutiveSummary";
import CoreFeaturesSection from "@/components/sections/casestudy/CoreFeaturesSection";

import TargetAudience from "@/components/sections/casestudy/Audiences";

export default function CaseStudiesPage() {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id); // <-- now searches in caseStudies array

  if (!study) return <div className="text-center py-32">Case Study not found</div>;

  return (
    <>
      {/* Hero Section */}
      <CaseHero study={study} />

      {/* Common Sections */}
      <ExecutiveSummary/>
      <ProblemStatement />
      <SolutionOverview />
    <CoreFeaturesSection  coreFeatures={study.coreFeatures?.map((feature) => ({
      title: feature.text.split('\n')[0] || 'Feature',
      text: feature.text
    }))}
  industriesAndUseCases={study.industriesAndUseCases} />
      <TechStack />
      <TargetAudience/>
      <RoadmapImpactCompetitive />
      <ChallengesAndEdge />

    </>
  );
}
