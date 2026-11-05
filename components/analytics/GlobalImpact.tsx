"use client";

import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import worldMap from "world-atlas/countries-110m.json";
import countries from "world-countries";
import { Download, Globe2, Radio } from "lucide-react";

type Stats = {
  downloads: { total: number; platforms: Record<string, number> };
  visits: { total: number; countries: { code: string; count: number }[] };
};

const initialStats: Stats = { downloads: { total: 0, platforms: {} }, visits: { total: 0, countries: [] } };

function countryFlag(code: string) {
  const normalized = code.toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return "🌐";
  return normalized
    .split("")
    .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
    .join("");
}

export function GlobalImpact() {
  const [stats, setStats] = useState<Stats>(initialStats);

  useEffect(() => {
    let active = true;
    const load = async (method: "GET" | "POST") => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const response = await fetch("/api/stats", {
          method,
          cache: "no-store",
          headers: method === "POST" ? { "Content-Type": "application/json" } : undefined,
          body: method === "POST" ? JSON.stringify({ timezone }) : undefined,
        });
        if (active && response.ok) setStats(await response.json());
      } catch {}
    };
    load("POST");
    const interval = window.setInterval(() => load("GET"), 60000);
    return () => { active = false; window.clearInterval(interval); };
  }, []);

  const map = useMemo(() => {
    const topology = worldMap as never;
    const countriesObject = (worldMap as unknown as { objects: { countries: never } }).objects.countries;
    const land = feature(topology, countriesObject) as never;
    const projection = geoNaturalEarth1().fitSize([960, 470], land);
    return { landPath: geoPath(projection)(land) ?? "", projection };
  }, []);

  const countryPoints = useMemo(() => stats.visits.countries.flatMap((entry) => {
    const country = countries.find((item) => item.cca2 === entry.code);
    if (!country?.latlng?.length) return [];
    const point = map.projection([country.latlng[1], country.latlng[0]]);
    return point ? [{ ...entry, name: country.translations.fra?.common || country.name.common, x: point[0], y: point[1] }] : [];
  }), [map, stats.visits.countries]);

  return (
    <section className="max-w-full overflow-hidden bg-transparent py-16 sm:py-24" aria-labelledby="global-impact-title">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <p className="flex items-center gap-2 font-black uppercase tracking-[0.2em] text-primary"><Radio className="h-4 w-4" aria-hidden="true" /> Activité réelle</p>
            <h2 id="global-impact-title" className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">MikhmoAI grandit à travers le monde.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Compteurs agrégés et actualisés automatiquement, sans conserver l’adresse IP des visiteurs.</p>
          </div>
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
            <div className="flex min-h-[154px] min-w-0 flex-col justify-between rounded-3xl border border-border/60 bg-background p-4 sm:min-h-[176px] sm:p-6">
              <Download className="h-6 w-6 text-primary" aria-hidden="true" />
              <div><strong className="block text-3xl font-black tabular-nums sm:text-4xl">{stats.downloads.total.toLocaleString("fr-FR")}</strong><span className="mt-1 block text-sm leading-snug text-muted-foreground">téléchargements lancés</span></div>
            </div>
            <div className="flex min-h-[154px] min-w-0 flex-col justify-between rounded-3xl border border-border/60 bg-background p-4 sm:min-h-[176px] sm:p-6">
              <Globe2 className="h-6 w-6 text-primary" aria-hidden="true" />
              <div><strong className="block text-3xl font-black tabular-nums sm:text-4xl">{stats.visits.countries.length}</strong><span className="mt-1 block text-sm leading-snug text-muted-foreground">pays représentés</span></div>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden p-0 sm:mt-12">
          <svg viewBox="0 0 960 470" role="img" aria-label="Carte mondiale des pays visiteurs" className="h-auto w-full">
            <path d={map.landPath} className="fill-muted stroke-border" strokeWidth="0.7" />
            {countryPoints.map((country) => <g key={country.code} transform={`translate(${country.x} ${country.y})`} aria-label={`${country.name}: ${country.count} visiteurs`}><circle r={Math.min(10 + Math.log2(country.count + 1) * 3, 22)} className="fill-background stroke-primary" strokeWidth="2" /><foreignObject x="-11" y="-10" width="22" height="20"><span title={`${country.name} — ${country.count} visiteurs`} className="block text-center text-base leading-5">{countryFlag(country.code)}</span></foreignObject></g>)}
          </svg>
          {!countryPoints.length && <p className="pb-5 text-center text-sm font-semibold text-muted-foreground">Les premiers pays apparaîtront ici au fil des nouvelles visites.</p>}
        </div>

        <div className="mt-6 overflow-hidden border-y border-border/30 py-3" aria-label="Pays visiteurs">
          {countryPoints.length ? <div className="flag-ribbon flex w-max gap-3 px-4 motion-reduce:animate-none">{[...countryPoints, ...countryPoints].map((country, index) => <span key={`${country.code}-${index}`} title={`${country.name} — ${country.count} visiteurs`} className="inline-flex items-center gap-2 rounded-full bg-muted/30 px-4 py-2 text-sm font-black"><span className="text-base leading-none">{countryFlag(country.code)}</span>{country.name}<span className="text-primary">{country.count}</span></span>)}</div> : <p className="px-5 text-center text-sm text-muted-foreground">Ruban mondial en attente des premières données</p>}
        </div>
      </div>
    </section>
  );
}
