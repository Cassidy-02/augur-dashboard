import React from "react";
import distributors from "@/data/distributors";
import Layout from "@/components/Layout";
import DistributorCard from "@/components/DistributorCard";

export function Dashboard() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">Augur Metrics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {distributors.map((dist) => (
          <DistributorCard key={dist.id} distributor={dist} />
        ))}
      </div>
    </Layout>
  );
}
