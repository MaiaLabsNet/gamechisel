// AssetView.tsx

"use client";

// Imports
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getAssetById } from "@/_assets";
import SectionHeader from "@/components/base/SectionHeader";
import AssetPage from "@/components/assets/AssetPage";
import BackButton from "@/components/base/BackButton";

export default function AssetDetailPage() {
  const { id } = useParams() as { id: string }; // Extract `id` from route parameters

  useEffect(() => {
    console.log("Router Query ID:", id);
  }, [id]);

  // Fetch asset data based on ID
  const assetData = id ? getAssetById(id) : null;

  useEffect(() => {
    console.log("Asset Data:", assetData);
  }, [assetData]);

  // Handle case where asset is not found
  if (!assetData) {
    return (
      <main>
        <section className="container contx conty mx-auto">
          <SectionHeader
            title="Asset Not Found"
            subtitle="404"
            description="Sorry, we couldn't find the asset you're looking for."
          />
          <BackButton text="Back to Assets" link="/assets" />
        </section>
      </main>
    );
  }

  // Render the asset page with asset data
  return (
    <main>
      <section className="container contx conty mx-auto w-full">
        {/* Section Header */}
        <SectionHeader
          title="Assets"
          subtitle="View"
          description="See your selected Asset details"
        />
        {/* Back Button */}
        <div className="flex items-center">
          <BackButton text="Back to Assets" link="/assets" />
        </div>
        {/* Asset Details */}
        <AssetPage {...assetData} />
      </section>
    </main>
  );
}
