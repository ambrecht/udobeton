// app/grid-foundry/page.tsx
'use client';

import React, { useMemo, useRef, useState } from 'react';

/*
  Grid Foundry – Literaturbasierter Grid-Generator (Next.js App Router Page)
  -------------------------------------------------------------------------
  Pfad: app/grid-foundry/page.tsx
  Voraussetzungen: TailwindCSS in Next.js eingerichtet.
  Hinweis: Reine Client-Komponente. Exportiert SVG/PNG/JSON via DOM-APIs.
*/

const A_SIZES_MM = {
  A1: { w: 594, h: 841 },
  A2: { w: 420, h: 594 },
  A3: { w: 297, h: 420 },
  A4: { w: 210, h: 297 },
};

const MM_TO_PX = (mm: number, dpi = 96) => (mm / 25.4) * dpi;

const download = (
  filename: string,
  data: string | BlobPart,
  type = 'image/svg+xml',
) => {
  const blob = new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

function toPadded(num: number) {
  return Math.round(num * 1000) / 1000;
}

export default function GridFoundry() {
  // Controls
  const [page, setPage] = useState<keyof typeof A_SIZES_MM>('A1');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait',
  );
  const [dpi, setDpi] = useState<number>(96);

  const [mTop, setMTop] = useState<number>(30);
  const [mRight, setMRight] = useState<number>(30);
  const [mBottom, setMBottom] = useState<number>(30);
  const [mLeft, setMLeft] = useState<number>(30);

  const [columns, setColumns] = useState<number>(6);
  const [gutter, setGutter] = useState<number>(8);

  const [rows, setRows] = useState<number>(12);
  const [rowGap, setRowGap] = useState<number>(8);

  const [baseline, setBaseline] = useState<number>(12); // in pt/px approximation

  const [showColumns, setShowColumns] = useState<boolean>(true);
  const [showModules, setShowModules] = useState<boolean>(false);
  const [showBaseline, setShowBaseline] = useState<boolean>(true);
  const [showThirds, setShowThirds] = useState<boolean>(false);
  const [showGolden, setShowGolden] = useState<boolean>(true);
  const [showGutenberg, setShowGutenberg] = useState<boolean>(false);

  const [preset, setPreset] = useState<string>('Swiss 6-Column');

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Derived page size
  const sizeMM = A_SIZES_MM[page] || A_SIZES_MM.A1;
  const pageW = orientation === 'portrait' ? sizeMM.w : sizeMM.h;
  const pageH = orientation === 'portrait' ? sizeMM.h : sizeMM.w;

  const pxW = MM_TO_PX(pageW, dpi);
  const pxH = MM_TO_PX(pageH, dpi);

  // Apply presets
  const applyPreset = (key: string) => {
    setPreset(key);
    if (key === 'Swiss 3-Column') {
      setColumns(3);
      setGutter(12);
      setMTop(40);
      setMRight(30);
      setMBottom(40);
      setMLeft(30);
      setBaseline(12);
      setRows(0);
      setShowModules(false);
      setShowThirds(false);
      setShowGolden(true);
    } else if (key === 'Swiss 6-Column') {
      setColumns(6);
      setGutter(8);
      setMTop(40);
      setMRight(30);
      setMBottom(40);
      setMLeft(30);
      setBaseline(12);
      setRows(0);
      setShowModules(false);
      setShowThirds(false);
      setShowGolden(true);
    } else if (key === 'Swiss 12-Column') {
      setColumns(12);
      setGutter(6);
      setMTop(40);
      setMRight(30);
      setMBottom(40);
      setMLeft(30);
      setBaseline(12);
      setRows(0);
      setShowModules(false);
    } else if (key === 'Magazine Modular') {
      setColumns(6);
      setGutter(10);
      setRows(12);
      setRowGap(10);
      setShowModules(true);
      setMTop(50);
      setMBottom(50);
      setMLeft(35);
      setMRight(35);
      setBaseline(12);
    } else if (key === 'Poster A1 Impact') {
      setColumns(3);
      setGutter(16);
      setMTop(80);
      setMBottom(80);
      setMLeft(60);
      setMRight(60);
      setShowThirds(true);
      setShowGolden(true);
      setShowGutenberg(true);
      setBaseline(14);
    } else if (key === 'Golden Canon (Bringhurst)') {
      // Van de Graaf/Goldener Kanon – Näherung über asymmetrische Innenränder
      setMTop(pageH * 0.06);
      setMBottom(pageH * 0.09);
      setMLeft(pageW * 0.07);
      setMRight(pageW * 0.1);
      setColumns(2);
      setGutter(12);
      setBaseline(12);
      setRows(0);
      setShowGolden(true);
      setShowThirds(false);
    } else if (key === 'Rule of Thirds') {
      setShowThirds(true);
      setShowGolden(false);
      setColumns(3);
      setGutter(12);
    }
  };

  // Grid calculations
  const contentW = pxW - MM_TO_PX(mLeft, dpi) - MM_TO_PX(mRight, dpi);
  const contentH = pxH - MM_TO_PX(mTop, dpi) - MM_TO_PX(mBottom, dpi);

  const columnWidth = useMemo(() => {
    if (columns <= 0) return contentW;
    const totalGutter = (columns - 1) * MM_TO_PX(gutter, dpi);
    return (contentW - totalGutter) / columns;
  }, [columns, gutter, contentW, dpi]);

  const moduleHeight = useMemo(() => {
    if (!rows || rows <= 0) return 0;
    const totalRowGutter = (rows - 1) * MM_TO_PX(rowGap, dpi);
    return (contentH - totalRowGutter) / rows;
  }, [rows, rowGap, contentH, dpi]);

  const goldenX = useMemo(() => contentW * (1 / 1.618), [contentW]);
  const goldenY = useMemo(() => contentH * (1 / 1.618), [contentH]);

  // Exporters
  const exportSVG = () => {
    if (!svgRef.current) return;
    const svg = (svgRef.current as SVGSVGElement).outerHTML
      .replaceAll('data-reactroot=""', '')
      .replaceAll(/\n+/g, '\n');
    download(`grid-foundry_${page}_${orientation}.svg`, svg);
  };

  const exportJSON = () => {
    const data = {
      page,
      orientation,
      dpi,
      margins: { top: mTop, right: mRight, bottom: mBottom, left: mLeft },
      columns,
      gutter,
      rows,
      rowGap,
      baseline,
      overlays: {
        showColumns,
        showModules,
        showBaseline,
        showThirds,
        showGolden,
        showGutenberg,
      },
    };
    download(
      `grid-foundry_${page}_${orientation}.json`,
      JSON.stringify(data, null, 2),
      'application/json',
    );
  };

  const exportPNG = async () => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = Math.min(pxW, 6000);
      canvas.height = Math.min(pxH, 6000);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const u = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = u;
        a.download = `grid-foundry_${page}_${orientation}.png`;
        a.click();
        URL.revokeObjectURL(u);
      });
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <header className="px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-800">
        <h1 className="text-2xl font-bold tracking-tight">
          Grid Foundry <span className="text-red-500">•</span> Literaturbasiert
        </h1>
        <div className="flex gap-2 text-sm">
          <button
            onClick={exportSVG}
            className="px-3 py-2 bg-neutral-800 rounded-xl hover:bg-neutral-700"
          >
            Export SVG
          </button>
          <button
            onClick={exportPNG}
            className="px-3 py-2 bg-neutral-800 rounded-xl hover:bg-neutral-700"
          >
            Export PNG
          </button>
          <button
            onClick={exportJSON}
            className="px-3 py-2 bg-neutral-800 rounded-xl hover:bg-neutral-700"
          >
            Export JSON
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-6">
        {/* Controls */}
        <section className="xl:col-span-4 bg-neutral-950/60 border border-neutral-800 rounded-2xl p-4 space-y-4">
          <h2 className="font-semibold text-lg">Einstellungen</h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs opacity-70">Seite</label>
              <select
                value={page}
                onChange={(e) =>
                  setPage(e.target.value as keyof typeof A_SIZES_MM)
                }
                className="w-full bg-neutral-800 rounded-xl px-3 py-2"
              >
                {Object.keys(A_SIZES_MM).map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs opacity-70">Ausrichtung</label>
              <select
                value={orientation}
                onChange={(e) =>
                  setOrientation(e.target.value as 'portrait' | 'landscape')
                }
                className="w-full bg-neutral-800 rounded-xl px-3 py-2"
              >
                <option value="portrait">Hoch</option>
                <option value="landscape">Quer</option>
              </select>
            </div>
            <div>
              <label className="text-xs opacity-70">DPI (Vorschau)</label>
              <input
                type="number"
                value={dpi}
                onChange={(e) => setDpi(parseInt(e.target.value || '96', 10))}
                className="w-full bg-neutral-800 rounded-xl px-3 py-2"
              />
            </div>
            <div>
              <label className="text-xs opacity-70">Preset</label>
              <select
                value={preset}
                onChange={(e) => applyPreset(e.target.value)}
                className="w-full bg-neutral-800 rounded-xl px-3 py-2"
              >
                {[
                  'Swiss 3-Column',
                  'Swiss 6-Column',
                  'Swiss 12-Column',
                  'Magazine Modular',
                  'Poster A1 Impact',
                  'Golden Canon (Bringhurst)',
                  'Rule of Thirds',
                ].map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 font-semibold mt-2">Ränder (mm)</div>
            {[
              ['Oben', mTop, setMTop],
              ['Rechts', mRight, setMRight],
              ['Unten', mBottom, setMBottom],
              ['Links', mLeft, setMLeft],
            ].map(([label, val, setter], idx) => (
              <div key={idx} className="flex items-center gap-2">
                <label className="w-20 text-xs opacity-70">
                  {label as string}
                </label>
                <input
                  type="number"
                  value={Math.round(val as number)}
                  onChange={(e) =>
                    (setter as (v: number) => void)(
                      parseFloat(e.target.value || '0'),
                    )
                  }
                  className="flex-1 bg-neutral-800 rounded-xl px-3 py-2"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="col-span-2 font-semibold">Spaltenraster</div>
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs opacity-70">Spalten</label>
              <input
                type="number"
                min={0}
                value={columns}
                onChange={(e) =>
                  setColumns(parseInt(e.target.value || '0', 10))
                }
                className="flex-1 bg-neutral-800 rounded-xl px-3 py-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs opacity-70">Gutter (mm)</label>
              <input
                type="number"
                min={0}
                value={gutter}
                onChange={(e) => setGutter(parseFloat(e.target.value || '0'))}
                className="flex-1 bg-neutral-800 rounded-xl px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="col-span-2 font-semibold">Modulraster</div>
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs opacity-70">Reihen</label>
              <input
                type="number"
                min={0}
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value || '0', 10))}
                className="flex-1 bg-neutral-800 rounded-xl px-3 py-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs opacity-70">
                Zeilenabstand (mm)
              </label>
              <input
                type="number"
                min={0}
                value={rowGap}
                onChange={(e) => setRowGap(parseFloat(e.target.value || '0'))}
                className="flex-1 bg-neutral-800 rounded-xl px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="col-span-2 font-semibold">
              Baseline (Text-Raster)
            </div>
            <div className="flex items-center gap-2">
              <label className="w-24 text-xs opacity-70">Baseline (px)</label>
              <input
                type="number"
                min={4}
                value={baseline}
                onChange={(e) =>
                  setBaseline(parseFloat(e.target.value || '12'))
                }
                className="flex-1 bg-neutral-800 rounded-xl px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="col-span-2 font-semibold">Overlays</div>
            {[
              [showColumns, setShowColumns, 'Spalten'],
              [showModules, setShowModules, 'Module'],
              [showBaseline, setShowBaseline, 'Baseline'],
              [showThirds, setShowThirds, 'Drittelregel'],
              [showGolden, setShowGolden, 'Goldener Schnitt'],
              [showGutenberg, setShowGutenberg, 'Gutenberg-Diagramm'],
            ].map(([val, setter, label], idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={val as boolean}
                  onChange={(e) =>
                    (setter as (v: boolean) => void)(e.target.checked)
                  }
                />{' '}
                {label as string}
              </label>
            ))}
          </div>

          <div className="text-xs opacity-60 pt-2">
            Tipp: Exportiere <strong>SVG</strong> und platziere es in Adobe
            Illustrator als Vorlage. Nutze Ebenenverriegelung & globale Farben.
          </div>
        </section>

        {/* Canvas */}
        <section className="xl:col-span-8 bg-neutral-950/60 border border-neutral-800 rounded-2xl p-4 overflow-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm opacity-70">
              {page} • {orientation} • {pageW}×{pageH} mm
            </div>
            <div className="text-sm opacity-70">
              Content: {toPadded(contentW).toLocaleString()}px ×{' '}
              {toPadded(contentH).toLocaleString()}px @ {dpi}dpi
            </div>
          </div>

          <div className="w-full overflow-auto">
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width={pxW}
              height={pxH}
              viewBox={`"0 0 ${pxW} ${pxH}"`}
            >
              {/* defs: texture */}
              <defs>
                <filter id="noise" x="0" y="0">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="2"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                  <feComponentTransfer>
                    <feFuncA type="table" tableValues="0 0.04" />
                  </feComponentTransfer>
                </filter>
                <pattern
                  id="gridPattern"
                  width="8"
                  height="8"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 8 0 L 0 0 0 8"
                    stroke="#ffffff10"
                    strokeWidth="1"
                    fill="none"
                  />
                </pattern>
              </defs>

              {/* background */}
              <rect x="0" y="0" width={pxW} height={pxH} fill="#0b0b0b" />
              <rect
                x="0"
                y="0"
                width={pxW}
                height={pxH}
                fill="url(#gridPattern)"
                opacity="0.15"
                filter="url(#noise)"
              />

              {/* page area outline */}
              <g>
                <rect
                  x={MM_TO_PX(mLeft, dpi)}
                  y={MM_TO_PX(mTop, dpi)}
                  width={contentW}
                  height={contentH}
                  fill="#ffffff03"
                  stroke="#ffffff22"
                  strokeWidth="1"
                />
              </g>

              {/* Column grid */}
              {showColumns && columns > 0 && (
                <g>
                  {Array.from({ length: columns }).map((_, i) => {
                    const x =
                      MM_TO_PX(mLeft, dpi) +
                      i * (columnWidth + MM_TO_PX(gutter, dpi));
                    return (
                      <rect
                        key={i}
                        x={x}
                        y={MM_TO_PX(mTop, dpi)}
                        width={columnWidth}
                        height={contentH}
                        fill="#ff000010"
                        stroke="#ff000033"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </g>
              )}

              {/* Modular grid rows */}
              {showModules && rows > 0 && (
                <g>
                  {Array.from({ length: rows }).map((_, i) => {
                    const y =
                      MM_TO_PX(mTop, dpi) +
                      i * (moduleHeight + MM_TO_PX(rowGap, dpi));
                    return (
                      <rect
                        key={i}
                        x={MM_TO_PX(mLeft, dpi)}
                        y={y}
                        width={contentW}
                        height={moduleHeight}
                        fill="#00d5ff10"
                        stroke="#00d5ff33"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </g>
              )}

              {/* Baseline grid */}
              {showBaseline && (
                <g>
                  {Array.from({ length: Math.floor(contentH / baseline) }).map(
                    (_, i) => {
                      const y = MM_TO_PX(mTop, dpi) + i * baseline;
                      return (
                        <line
                          key={i}
                          x1={MM_TO_PX(mLeft, dpi)}
                          y1={y}
                          x2={MM_TO_PX(mLeft, dpi) + contentW}
                          y2={y}
                          stroke="#ffffff18"
                          strokeWidth="0.5"
                        />
                      );
                    },
                  )}
                </g>
              )}

              {/* Rule of Thirds */}
              {showThirds && (
                <g stroke="#ffffff40" strokeWidth="1">
                  <line
                    x1={MM_TO_PX(mLeft, dpi) + contentW / 3}
                    y1={MM_TO_PX(mTop, dpi)}
                    x2={MM_TO_PX(mLeft, dpi) + contentW / 3}
                    y2={MM_TO_PX(mTop, dpi) + contentH}
                  />
                  <line
                    x1={MM_TO_PX(mLeft, dpi) + (2 * contentW) / 3}
                    y1={MM_TO_PX(mTop, dpi)}
                    x2={MM_TO_PX(mLeft, dpi) + (2 * contentW) / 3}
                    y2={MM_TO_PX(mTop, dpi) + contentH}
                  />
                  <line
                    x1={MM_TO_PX(mLeft, dpi)}
                    y1={MM_TO_PX(mTop, dpi) + contentH / 3}
                    x2={MM_TO_PX(mLeft, dpi) + contentW}
                    y2={MM_TO_PX(mTop, dpi) + contentH / 3}
                  />
                  <line
                    x1={MM_TO_PX(mLeft, dpi)}
                    y1={MM_TO_PX(mTop, dpi) + (2 * contentH) / 3}
                    x2={MM_TO_PX(mLeft, dpi) + contentW}
                    y2={MM_TO_PX(mTop, dpi) + (2 * contentH) / 3}
                  />
                </g>
              )}

              {/* Golden ratio */}
              {showGolden && (
                <g>
                  <line
                    x1={MM_TO_PX(mLeft, dpi) + goldenX}
                    y1={MM_TO_PX(mTop, dpi)}
                    x2={MM_TO_PX(mLeft, dpi) + goldenX}
                    y2={MM_TO_PX(mTop, dpi) + contentH}
                    stroke="#ffd16666"
                    strokeWidth="1"
                  />
                  <line
                    x1={MM_TO_PX(mLeft, dpi)}
                    y1={MM_TO_PX(mTop, dpi) + goldenY}
                    x2={MM_TO_PX(mLeft, dpi) + contentW}
                    y2={MM_TO_PX(mTop, dpi) + goldenY}
                    stroke="#ffd16666"
                    strokeWidth="1"
                  />
                </g>
              )}

              {/* Gutenberg Diagram (Zonen) */}
              {showGutenberg && (
                <g>
                  {/* Top-Left to Bottom-Right reading gravity */}
                  <line
                    x1={MM_TO_PX(mLeft, dpi)}
                    y1={MM_TO_PX(mTop, dpi)}
                    x2={MM_TO_PX(mLeft, dpi) + contentW}
                    y2={MM_TO_PX(mTop, dpi) + contentH}
                    stroke="#7cff8b55"
                    strokeWidth="1"
                  />
                  {/* Quadranten */}
                  <rect
                    x={MM_TO_PX(mLeft, dpi)}
                    y={MM_TO_PX(mTop, dpi)}
                    width={contentW / 2}
                    height={contentH / 2}
                    fill="#7cff8b10"
                  />
                  <rect
                    x={MM_TO_PX(mLeft, dpi) + contentW / 2}
                    y={MM_TO_PX(mTop, dpi)}
                    width={contentW / 2}
                    height={contentH / 2}
                    fill="#7cff8b05"
                  />
                  <rect
                    x={MM_TO_PX(mLeft, dpi)}
                    y={MM_TO_PX(mTop, dpi) + contentH / 2}
                    width={contentW / 2}
                    height={contentH / 2}
                    fill="#7cff8b05"
                  />
                  <rect
                    x={MM_TO_PX(mLeft, dpi) + contentW / 2}
                    y={MM_TO_PX(mTop, dpi) + contentH / 2}
                    width={contentW / 2}
                    height={contentH / 2}
                    fill="#7cff8b10"
                  />
                </g>
              )}

              {/* Annotations */}
              <g>
                <text
                  x={MM_TO_PX(mLeft, dpi)}
                  y={MM_TO_PX(mTop, dpi) - 8}
                  fill="#ffffff99"
                  fontSize="12"
                  fontFamily="Inter, Helvetica, Arial"
                >
                  Satzspiegel
                </text>
                <text
                  x={MM_TO_PX(mLeft, dpi) + contentW - 120}
                  y={MM_TO_PX(mTop, dpi) - 8}
                  fill="#ffffff66"
                  fontSize="12"
                  fontFamily="Inter, Helvetica, Arial"
                >
                  {columns} Spalten • {gutter} mm Gutter
                </text>
              </g>
            </svg>
          </div>
        </section>
      </main>

      <footer className="px-6 py-4 text-xs text-neutral-400 border-t border-neutral-800 flex items-center justify-between">
        <div>
          Tipps: Beginne mit Hierarchie & Einstiegspunkt, dann Raster. Nutze
          Baseline für Typo-Rhythmus. Farbe zuletzt als Akzent.
        </div>
        <div>
          Exportiere SVG und platziere es als gesperrte Vorlage in Adobe
          Illustrator.
        </div>
      </footer>
    </div>
  );
}
