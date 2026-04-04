/** @type {import('next').NextConfig} */
const nextConfig = {
  // Revalidate every 3600 seconds (1 hour) — Sheet data refreshes hourly
  // Change to 300 (5 min) if you want faster updates
};

export default nextConfig;
