import BandwidthCalculator from "@/components/calculator/BandwidthCalculator";

export const metadata = {
  title: "Bandwidth Calculator | MR.NET",
  description: "Estimate data usage and uplink speed for live streaming.",
};

export default function Page() {
  return (
    <BandwidthCalculator />
  );
}