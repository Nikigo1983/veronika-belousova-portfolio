import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Разрешить dev с других устройств в LAN (HMR / _next), см. allowedDevOrigins
  allowedDevOrigins: ["192.168.1.2"],
};

export default withNextIntl(nextConfig);
