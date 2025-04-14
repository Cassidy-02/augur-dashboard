import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DistributorCard = ({ distributor }) => (
  <Card className="shadow-lg rounded-2xl">
    <CardContent className="p-4">
      <h2 className="text-xl font-semibold mb-2">{distributor.name}</h2>
      <ul className="text-sm space-y-1">
        <li><strong>Shipped Last Month:</strong> {distributor.shippedLastMonth}</li>
        <li><strong>Forecast (This Month):</strong> {distributor.forecastedThisMonth}</li>
        <li><strong>YTD Average:</strong> {distributor.ytdAverage}</li>
      </ul>
    </CardContent>
  </Card>
);

export default DistributorCard;
