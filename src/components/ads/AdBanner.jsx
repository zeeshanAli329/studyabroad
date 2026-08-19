"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";

export default function AdBanner({
  placement,
  className = "",
}) {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadAd = async () => {
      try {
        const response = await api.getAdvertisements();

        const advertisements = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];

        const now = new Date();

        const matchingAd = advertisements.find((item) => {
          if (!item.isActive) return false;

          if (
            item.startDate &&
            new Date(item.startDate) > now
          ) {
            return false;
          }

          if (
            item.endDate &&
            new Date(item.endDate) < now
          ) {
            return false;
          }

          return (
            item.placement?.toLowerCase() ===
            placement?.toLowerCase()
          );
        });

        if (mounted) {
          setAd(matchingAd || null);
        }
      } catch (error) {
        console.error("Failed to load advertisement:", error);

        if (mounted) {
          setAd(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadAd();

    return () => {
      mounted = false;
    };
  }, [placement]);

  if (loading || !ad) {
    return null;
  }

  const content = (
    <div
      className={`group relative overflow-hidden ${className}`}
    >
      <img
        src={ad.image}
        alt={ad.title || "Advertisement"}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <span className="absolute right-2 top-2 rounded bg-black/60 px-2 py-1 text-[9px] font-medium text-white">
        Ad
      </span>
    </div>
  );

  if (!ad.link) {
    return content;
  }

  return (
    <Link
      href={ad.link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={ad.title || "Advertisement"}
      className="block"
    >
      {content}
    </Link>
  );
}