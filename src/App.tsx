import { useState, useRef } from 'react';

// ─── Datos de mercado ────────────────────────────────────────────────────────
const MARKET = {
  apartamento: {
    1: {
      zonas: {
        Peninsula: {
          q_low: 2500,
          q_mid: 4000,
          q_high: 6000,
          inv_low: 600,
          inv_mid: 800,
          inv_high: 1100,
        },
        'Roosevelt / Mansa': {
          q_low: 3000,
          q_mid: 4500,
          q_high: 7000,
          inv_low: 700,
          inv_mid: 900,
          inv_high: 1300,
        },
        Brava: {
          q_low: 3500,
          q_mid: 5500,
          q_high: 9000,
          inv_low: 800,
          inv_mid: 1000,
          inv_high: 1500,
        },
        'La Barra / Manantiales': {
          q_low: 4000,
          q_mid: 7000,
          q_high: 12000,
          inv_low: 900,
          inv_mid: 1200,
          inv_high: 1800,
        },
        Maldonado: {
          q_low: 1500,
          q_mid: 2500,
          q_high: 4000,
          inv_low: 400,
          inv_mid: 600,
          inv_high: 800,
        },
      },
    },
    2: {
      zonas: {
        Peninsula: {
          q_low: 3500,
          q_mid: 5500,
          q_high: 8500,
          inv_low: 750,
          inv_mid: 1000,
          inv_high: 1400,
        },
        'Roosevelt / Mansa': {
          q_low: 3800,
          q_mid: 6000,
          q_high: 9500,
          inv_low: 850,
          inv_mid: 1100,
          inv_high: 1600,
        },
        Brava: {
          q_low: 4500,
          q_mid: 7500,
          q_high: 12000,
          inv_low: 1000,
          inv_mid: 1300,
          inv_high: 1800,
        },
        'La Barra / Manantiales': {
          q_low: 5000,
          q_mid: 9000,
          q_high: 15000,
          inv_low: 1100,
          inv_mid: 1500,
          inv_high: 2200,
        },
        Maldonado: {
          q_low: 2000,
          q_mid: 3500,
          q_high: 5500,
          inv_low: 500,
          inv_mid: 750,
          inv_high: 1000,
        },
      },
    },
    3: {
      zonas: {
        Peninsula: {
          q_low: 5000,
          q_mid: 8000,
          q_high: 13000,
          inv_low: 1000,
          inv_mid: 1400,
          inv_high: 2000,
        },
        'Roosevelt / Mansa': {
          q_low: 5500,
          q_mid: 9000,
          q_high: 15000,
          inv_low: 1100,
          inv_mid: 1500,
          inv_high: 2200,
        },
        Brava: {
          q_low: 7000,
          q_mid: 12000,
          q_high: 23000,
          inv_low: 1300,
          inv_mid: 1800,
          inv_high: 2600,
        },
        'La Barra / Manantiales': {
          q_low: 8000,
          q_mid: 14000,
          q_high: 25000,
          inv_low: 1500,
          inv_mid: 2000,
          inv_high: 3000,
        },
        Maldonado: {
          q_low: 3000,
          q_mid: 5000,
          q_high: 8000,
          inv_low: 700,
          inv_mid: 1000,
          inv_high: 1400,
        },
      },
    },
    '4+': {
      zonas: {
        Peninsula: {
          q_low: 7000,
          q_mid: 12000,
          q_high: 20000,
          inv_low: 1400,
          inv_mid: 2000,
          inv_high: 3000,
        },
        'Roosevelt / Mansa': {
          q_low: 8000,
          q_mid: 14000,
          q_high: 22000,
          inv_low: 1500,
          inv_mid: 2200,
          inv_high: 3200,
        },
        Brava: {
          q_low: 10000,
          q_mid: 18000,
          q_high: 30000,
          inv_low: 1800,
          inv_mid: 2500,
          inv_high: 4000,
        },
        'La Barra / Manantiales': {
          q_low: 12000,
          q_mid: 22000,
          q_high: 45000,
          inv_low: 2000,
          inv_mid: 3000,
          inv_high: 5000,
        },
        Maldonado: {
          q_low: 4000,
          q_mid: 7000,
          q_high: 12000,
          inv_low: 1000,
          inv_mid: 1500,
          inv_high: 2200,
        },
      },
    },
  },
  casa: {
    2: {
      zonas: {
        Peninsula: {
          q_low: 4000,
          q_mid: 7000,
          q_high: 11000,
          inv_low: 900,
          inv_mid: 1300,
          inv_high: 1800,
        },
        'Roosevelt / Mansa': {
          q_low: 4500,
          q_mid: 8000,
          q_high: 13000,
          inv_low: 1000,
          inv_mid: 1500,
          inv_high: 2000,
        },
        Brava: {
          q_low: 5000,
          q_mid: 9000,
          q_high: 15000,
          inv_low: 1200,
          inv_mid: 1700,
          inv_high: 2400,
        },
        'La Barra / Manantiales': {
          q_low: 6000,
          q_mid: 12000,
          q_high: 20000,
          inv_low: 1500,
          inv_mid: 2000,
          inv_high: 3000,
        },
        Maldonado: {
          q_low: 2500,
          q_mid: 4500,
          q_high: 7000,
          inv_low: 700,
          inv_mid: 1000,
          inv_high: 1500,
        },
      },
    },
    3: {
      zonas: {
        Peninsula: {
          q_low: 5500,
          q_mid: 10000,
          q_high: 16000,
          inv_low: 1200,
          inv_mid: 1700,
          inv_high: 2500,
        },
        'Roosevelt / Mansa': {
          q_low: 6000,
          q_mid: 11000,
          q_high: 18000,
          inv_low: 1300,
          inv_mid: 1900,
          inv_high: 2700,
        },
        Brava: {
          q_low: 7000,
          q_mid: 14000,
          q_high: 22000,
          inv_low: 1500,
          inv_mid: 2200,
          inv_high: 3200,
        },
        'La Barra / Manantiales': {
          q_low: 9000,
          q_mid: 18000,
          q_high: 30000,
          inv_low: 1800,
          inv_mid: 2600,
          inv_high: 4000,
        },
        Maldonado: {
          q_low: 3500,
          q_mid: 6000,
          q_high: 10000,
          inv_low: 900,
          inv_mid: 1300,
          inv_high: 1900,
        },
      },
    },
    '4+': {
      zonas: {
        Peninsula: {
          q_low: 8000,
          q_mid: 14000,
          q_high: 22000,
          inv_low: 1600,
          inv_mid: 2300,
          inv_high: 3500,
        },
        'Roosevelt / Mansa': {
          q_low: 9000,
          q_mid: 16000,
          q_high: 25000,
          inv_low: 1700,
          inv_mid: 2500,
          inv_high: 3800,
        },
        Brava: {
          q_low: 11000,
          q_mid: 20000,
          q_high: 35000,
          inv_low: 2000,
          inv_mid: 3000,
          inv_high: 5000,
        },
        'La Barra / Manantiales': {
          q_low: 14000,
          q_mid: 25000,
          q_high: 50000,
          inv_low: 2500,
          inv_mid: 3800,
          inv_high: 6500,
        },
        Maldonado: {
          q_low: 5000,
          q_mid: 9000,
          q_high: 15000,
          inv_low: 1200,
          inv_mid: 1800,
          inv_high: 2800,
        },
      },
    },
  },
};

const f = (n) => '$' + Math.round(n).toLocaleString('es-UY');
const fp = (n) => n.toFixed(1) + '%';
const TIPOS = ['Apartamento', 'Casa'],
  DORMS = ['1', '2', '3', '4+'];
const ZONAS = [
  'Peninsula',
  'Roosevelt / Mansa',
  'Brava',
  'La Barra / Manantiales',
  'Maldonado',
];
const G = '#B8975A',
  GLight = '#F0E8D4',
  DARK = '#1A1814';
const BG = '#F7F5F0',
  CARD = '#FFFFFF',
  CARD2 = '#F2EFE9',
  BRD = '#E0DBD0',
  BRDS = '#C8C0B0';
const TXT = '#1A1814',
  TMID = '#5A5548',
  TMUT = '#9A9288';

// ─── Estilos ─────────────────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@300;400;500&display=swap');
*{box-sizing:border-box}
.root{background:${BG};min-height:100vh;padding:0 0 2rem;font-family:'Inter',sans-serif;color:${TXT}}
.hdr{position:relative;height:220px;margin-bottom:0;overflow:hidden}
.hdr-svg{position:absolute;inset:0;width:100%;height:100%}
.hdr-inner{position:relative;z-index:3;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}
.hdr img{height:58px;filter:drop-shadow(0 2px 12px rgba(0,0,0,0.5))}
.hdr-divider{width:52px;height:1px;background:${G};margin:13px auto 11px;opacity:0.85}
.hdr-sub{color:rgba(220,195,130,0.85);font-size:10px;letter-spacing:0.24em;text-transform:uppercase;font-weight:300}
.wrap{padding:0 1.25rem}
.sec{font-family:'Cormorant Garamond',serif;font-size:12.5px;font-weight:600;color:${TMUT};text-transform:uppercase;letter-spacing:0.14em;margin:1.5rem 0 0.6rem;border-bottom:1px solid ${BRD};padding-bottom:5px}
.card{background:${CARD};border:1px solid ${BRD};border-radius:10px;padding:1.1rem 1.3rem;margin-bottom:10px}
.card2{background:${CARD2};border:1px solid ${BRD};border-radius:10px;padding:1.1rem 1.3rem;margin-bottom:10px}
.row{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.rl{flex:1}.rl span{font-size:13.5px;color:${TMID}}.rl small{font-size:11px;color:${TMUT};margin-top:1px;display:block}
.iw{position:relative}
.iw input{width:148px;padding:8px 38px 8px 24px;font-size:13.5px;text-align:right;border-radius:7px;border:1px solid ${BRD};background:${CARD};color:${TXT};font-family:'Inter',sans-serif;transition:border 0.15s}
.iw input:focus{outline:none;border-color:${G}}
.iw input.ro{background:${CARD2};color:${TMID};cursor:default}
.iw .pre{position:absolute;left:9px;top:50%;transform:translateY(-50%);font-size:13px;color:${TMUT};pointer-events:none}
.iw .suf{position:absolute;right:7px;top:50%;transform:translateY(-50%);font-size:11px;color:${TMUT};pointer-events:none}
.sel select{width:188px;padding:8px 10px;font-size:13.5px;border-radius:7px;border:1px solid ${BRD};background:${CARD};color:${TXT};font-family:'Inter',sans-serif;cursor:pointer}
.sel select:focus{outline:none;border-color:${G}}
.srow{display:flex;justify-content:space-between;align-items:center;padding:7px 12px;border-radius:7px;margin-bottom:5px}
.srow.n{background:${CARD2}}.srow.n span{font-size:12.5px;color:${TMID}}
.srow.g{background:${GLight};border:1px solid #D4B870}.srow.g span{font-size:13.5px;color:${G};font-weight:500}
.mt-row{margin-bottom:10px}
.mt-hd{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.mt-lbl{font-size:13px;color:${TMID}}
.mt-track{width:38px;height:20px;border-radius:10px;cursor:pointer;position:relative;transition:background 0.2s;flex-shrink:0}
.mt-thumb{width:16px;height:16px;border-radius:50%;background:#fff;position:absolute;top:2px;transition:left 0.18s;box-shadow:0 1px 3px rgba(0,0,0,0.25)}
.badge{font-size:10px;padding:2px 7px;border-radius:20px;font-weight:500}
.badge.auto{background:${GLight};color:${G};border:1px solid #D4B870}
.badge.manual{background:#EEF2FF;color:#4B5EAA;border:1px solid #C5CFEE}
.tgl-row{display:flex;align-items:center;gap:9px;margin-bottom:5px}
.tgl-track{width:32px;height:18px;border-radius:9px;cursor:pointer;position:relative;transition:background 0.2s;flex-shrink:0}
.tgl-thumb{width:14px;height:14px;border-radius:50%;background:#fff;position:absolute;top:2px;transition:left 0.18s;box-shadow:0 1px 2px rgba(0,0,0,0.2)}
.mkt-box{background:${CARD};border:1px solid ${BRD};border-radius:8px;padding:11px 14px;margin-bottom:7px}
.mkt-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:7px;text-align:center}
.mkt-lbl{font-size:11px;color:${TMUT};margin-bottom:2px}
.mkt-v{font-size:14px;font-weight:500;color:${TXT}}
.mkt-v.mid{color:${G}}
.mkt-src{font-size:10.5px;color:${TMUT};margin-top:5px}
.res-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:1.4rem}
.res-card{border-radius:10px;overflow:hidden;border:1px solid ${BRD}}
.rc-head{padding:15px 17px 13px;background:${DARK}}
.rc-lbl{font-size:10px;color:#777;letter-spacing:0.1em;text-transform:uppercase;font-weight:300;margin-bottom:5px}
.rc-roi{font-family:'Cormorant Garamond',serif;font-size:42px;font-weight:600;line-height:1}
.rc-tag{display:inline-block;font-size:10px;font-weight:500;padding:3px 10px;border-radius:20px;margin-top:7px}
.rc-body{padding:13px 17px;background:${CARD}}
.rc-row{display:flex;justify-content:space-between;font-size:12.5px;padding:4px 0;border-top:1px solid ${BRD}}
.rc-row:first-child{border-top:none}
.rc-k{color:${TMUT}}.rc-v{font-weight:500;color:${TXT}}
.rc-row.libre .rc-k{color:${TXT};font-weight:500}
.rc-row.libre .rc-v{color:${G};font-weight:600;font-size:13.5px}
.gen-btn{width:100%;padding:13px;font-size:14px;font-weight:500;border-radius:8px;border:none;background:${DARK};color:#fff;cursor:pointer;font-family:'Inter',sans-serif;letter-spacing:0.05em;transition:opacity 0.2s}
.gen-btn:hover{opacity:0.85}.gen-btn:disabled{opacity:0.4;cursor:not-allowed}
.prt-btn{font-size:13px;padding:7px 15px;border-radius:7px;border:1px solid ${BRDS};background:${CARD};color:${TXT};cursor:pointer;font-family:'Inter',sans-serif}
.prt-btn:hover{background:${CARD2}}
.doc-wrap{background:${CARD};border:1px solid ${BRD};border-radius:10px;padding:2.5rem;font-size:14px;line-height:1.75;color:${TXT};margin-top:1.2rem}
.err{background:#FAECEC;border:1px solid #F0B8B8;border-radius:8px;padding:12px 16px;font-size:13px;color:#8B2020;margin-top:1rem}
`;

// ─── SVG Header ──────────────────────────────────────────────────────────────
function HeaderSVG() {
  return (
    <svg
      className="hdr-svg"
      viewBox="0 0 800 220"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1520" />
          <stop offset="55%" stopColor="#1A2535" />
          <stop offset="100%" stopColor="#0F1C10" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A1F35" />
          <stop offset="100%" stopColor="#061018" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B8975A" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#B8975A" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5DFA0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B8975A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vig" cx="50%" cy="50%" r="70%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#050C05" stopOpacity="0.65" />
        </radialGradient>
        <filter id="bl2">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="bl6">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect width="800" height="220" fill="url(#sky)" />
      {[
        [60, 18],
        [120, 30],
        [200, 12],
        [290, 22],
        [380, 8],
        [470, 25],
        [560, 15],
        [650, 28],
        [740, 10],
        [85, 45],
        [175, 38],
        [320, 48],
        [480, 42],
        [620, 35],
        [710, 50],
        [40, 55],
        [250, 60],
        [530, 52],
        [780, 40],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 1.2 : 0.7}
          fill="#fff"
          opacity="0.5"
        />
      ))}
      <circle
        cx="680"
        cy="45"
        r="40"
        fill="url(#moon)"
        filter="url(#bl6)"
        opacity="0.6"
      />
      <circle
        cx="680"
        cy="45"
        r="10"
        fill="#F5DFA0"
        opacity="0.25"
        filter="url(#bl2)"
      />
      <ellipse
        cx="400"
        cy="148"
        rx="380"
        ry="28"
        fill="url(#glow)"
        filter="url(#bl6)"
      />
      <rect x="0" y="152" width="800" height="68" fill="url(#sea)" />
      <ellipse
        cx="680"
        cy="172"
        rx="8"
        ry="14"
        fill="#B8975A"
        opacity="0.12"
        filter="url(#bl2)"
      />
      {/* Skyline */}
      {[
        [30, 100, 28, 52],
        [70, 85, 22, 67],
        [120, 70, 18, 82],
        [160, 90, 30, 62],
        [210, 78, 20, 74],
        [260, 60, 26, 92],
        [300, 45, 18, 107],
        [330, 72, 32, 80],
        [380, 55, 24, 97],
        [440, 30, 36, 122],
        [490, 58, 28, 94],
        [530, 75, 22, 77],
        [560, 88, 30, 64],
        [600, 68, 20, 84],
        [630, 80, 26, 72],
        [665, 95, 18, 57],
        [700, 85, 24, 67],
        [735, 100, 30, 52],
        [775, 110, 25, 42],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="#1A2A1A"
          opacity={0.7 + (i % 3) * 0.08}
        />
      ))}
      {/* Antenna on hero tower */}
      <rect x="454" y="25" width="8" height="5" fill="#B8975A" opacity="0.9" />
      <rect x="457" y="20" width="2" height="5" fill="#B8975A" opacity="0.7" />
      {/* Window lights */}
      {[38, 52, 66, 80, 94, 108, 122].map((y) =>
        [442, 450, 458, 466].map((x, j) => (
          <rect
            key={`${y}${j}`}
            x={x}
            y={y}
            width="4"
            height="6"
            fill="#F5DFA0"
            opacity={(x + y) % 7 < 3 ? 0.3 : 0.04}
          />
        ))
      )}
      {[68, 80, 92, 104, 116].map((y) =>
        [264, 270, 276].map((x, j) => (
          <rect
            key={`w${y}${j}`}
            x={x}
            y={y}
            width="3"
            height="4"
            fill="#B8975A"
            opacity={(x + y) % 5 < 2 ? 0.35 : 0.04}
          />
        ))
      )}
      <rect
        x="0"
        y="148"
        width="800"
        height="8"
        fill="#0D1A0D"
        opacity="0.95"
      />
      <line
        x1="0"
        y1="148"
        x2="800"
        y2="148"
        stroke="#B8975A"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <rect width="800" height="220" fill="url(#vig)" />
    </svg>
  );
}

// ─── Componentes UI ──────────────────────────────────────────────────────────
function NInput({
  label,
  note,
  value,
  onChange,
  prefix = '$',
  suffix = 'USD',
  min = 0,
  ro,
}) {
  return (
    <div className="row">
      <div className="rl">
        <span>{label}</span>
        {note && <small>{note}</small>}
      </div>
      <div className="iw">
        {prefix && <span className="pre">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={min}
          readOnly={!!ro}
          className={ro ? 'ro' : ''}
          onChange={(e) => !ro && onChange(parseFloat(e.target.value) || 0)}
        />
        {suffix && <span className="suf">{suffix}</span>}
      </div>
    </div>
  );
}
function SelI({ label, options, value, onChange }) {
  return (
    <div className="row">
      <div className="rl">
        <span>{label}</span>
      </div>
      <div className="sel">
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
function Tgl({ label, value, onChange }) {
  return (
    <div className="tgl-row">
      <div
        className="tgl-track"
        onClick={() => onChange(!value)}
        style={{ background: value ? G : BRD }}
      >
        <div className="tgl-thumb" style={{ left: value ? 16 : 2 }} />
      </div>
      <span style={{ fontSize: 13, color: value ? TMID : TMUT }}>{label}</span>
    </div>
  );
}
function ModeRow({
  label,
  isManual,
  onToggle,
  autoVal,
  manualVal,
  onManualChange,
  autoNote,
  manualNote,
}) {
  return (
    <div className="mt-row">
      <div className="mt-hd">
        <span className="mt-lbl">{label}</span>
        <div
          className="mt-track"
          onClick={onToggle}
          style={{ background: isManual ? '#4B5EAA' : G }}
        >
          <div className="mt-thumb" style={{ left: isManual ? 20 : 2 }} />
        </div>
        <span className={`badge ${isManual ? 'manual' : 'auto'}`}>
          {isManual ? 'manual' : 'auto'}
        </span>
      </div>
      {isManual ? (
        <div className="row" style={{ marginBottom: 0 }}>
          <div className="rl">
            <small>{manualNote}</small>
          </div>
          <div className="iw">
            <span className="pre">$</span>
            <input
              type="number"
              value={manualVal}
              min={0}
              onChange={(e) => onManualChange(parseFloat(e.target.value) || 0)}
            />
            <span className="suf">USD</span>
          </div>
        </div>
      ) : (
        <div className="srow n">
          <span>{autoNote}</span>
          <span style={{ fontWeight: 500 }}>{f(autoVal)}</span>
        </div>
      )}
    </div>
  );
}
function ResCard({ title, data }) {
  const r = data.roi,
    col = r >= 6 ? '#2D8A5A' : r >= 3 ? '#B87A10' : '#C0392B';
  const tbg = r >= 6 ? '#EAF4EF' : r >= 3 ? '#FDF3E0' : '#FAECEC';
  return (
    <div className="res-card">
      <div className="rc-head">
        <div className="rc-lbl">{title}</div>
        <div className="rc-roi" style={{ color: r >= 6 ? G : col }}>
          {fp(r)}
        </div>
        <span className="rc-tag" style={{ background: tbg, color: col }}>
          {r >= 6
            ? 'Buena inversión'
            : r >= 3
            ? 'Rentabilidad moderada'
            : 'Rentabilidad baja'}
        </span>
      </div>
      <div className="rc-body">
        {[
          ['Ingreso bruto', f(data.bruto)],
          ['Gastos anuales', '−' + f(data.gast), false, true],
          ['Libre de gastos', f(data.neto), true],
          ['Acumulado', f(data.inv)],
          ['Recupero', data.rec ? data.rec.toFixed(1) + ' años' : '—'],
        ].map(([k, v, libre, dng]) => (
          <div key={k} className={`rc-row${libre ? ' libre' : ''}`}>
            <span className="rc-k">{k}</span>
            <span className="rc-v" style={dng ? { color: '#C0392B' } : {}}>
              {v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── App principal ────────────────────────────────────────────────────────────
export default function App() {
  const [tipo, setTipo] = useState('Apartamento');
  const [dorms, setDorms] = useState('2');
  const [zona, setZona] = useState('Roosevelt / Mansa');
  const [precio, setPrecio] = useState(179000);
  const [pctCom, setPctCom] = useState(3);
  const [pctEsc, setPctEsc] = useState(3);
  const [pctCat, setPctCat] = useState(65);
  const [itpMan, setItpMan] = useState(false);
  const [itpVal, setItpVal] = useState(0);
  const [certMan, setCertMan] = useState(false);
  const [certVal, setCertVal] = useState(500);
  const [refaccion, setRefaccion] = useState(0);
  const [q1e, setQ1e] = useState(3500);
  const [okQ1e, setOkQ1e] = useState(true);
  const [q2e, setQ2e] = useState(2800);
  const [okQ2e, setOkQ2e] = useState(true);
  const [q1f, setQ1f] = useState(2000);
  const [okQ1f, setOkQ1f] = useState(true);
  const [q2f, setQ2f] = useState(2000);
  const [okQ2f, setOkQ2f] = useState(true);
  const [invM, setInvM] = useState(700);
  const [invMs, setInvMs] = useState(9);
  const [gastC, setGastC] = useState(468);
  const [contrib, setContrib] = useState(1021);
  const [prim, setPrim] = useState(204);
  const [otrosG, setOtrosG] = useState(0);
  const [anM, setAnM] = useState(1200);
  const [anMs, setAnMs] = useState(12);
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState(null);
  const [err, setErr] = useState(null);
  const docRef = useRef(null);

  // Cálculos
  const comUSD = Math.round(((precio * pctCom) / 100) * 1.22);
  const escUSD = Math.round(((precio * pctEsc) / 100) * 1.22);
  const valCat = Math.round((precio * pctCat) / 100);
  const itpAuto = Math.round(valCat * 0.02);
  const certAuto =
    precio < 100000 ? 350 : precio < 250000 ? 500 : precio < 500000 ? 700 : 900;
  const itpF = itpMan ? itpVal : itpAuto;
  const certF = certMan ? certVal : certAuto;
  const gastosE = comUSD + escUSD + itpF + certF + refaccion;
  const acum = precio + gastosE;
  const gastA = Math.round(gastC * 12 + contrib + prim + otrosG);
  const ingA =
    (okQ1e ? q1e : 0) +
    (okQ2e ? q2e : 0) +
    (okQ1f ? q1f : 0) +
    (okQ2f ? q2f : 0) +
    invM * invMs;
  const netoA = ingA - gastA;
  const roiA = acum > 0 ? (netoA / acum) * 100 : 0;
  const recA = netoA > 0 ? acum / netoA : null;
  const ingB = anM * anMs;
  const netoB = ingB - gastA;
  const roiB = acum > 0 ? (netoB / acum) * 100 : 0;
  const recB = netoB > 0 ? acum / netoB : null;
  const dA = {
    bruto: ingA,
    gast: gastA,
    neto: netoA,
    roi: roiA,
    rec: recA,
    inv: acum,
  };
  const dB = {
    bruto: ingB,
    gast: gastA,
    neto: netoB,
    roi: roiB,
    rec: recB,
    inv: acum,
  };
  const tipoK = tipo.toLowerCase();
  const dormsK = parseInt(dorms) >= 4 ? '4+' : parseInt(dorms) || dorms;
  const mkt = MARKET[tipoK]?.[dormsK]?.zonas?.[zona];

  // ── Generar informe ──────────────────────────────────────────────────────
  async function generar() {
    setLoading(true);
    setDoc(null);
    setErr(null);
    const qd = [
      okQ1e
        ? `1ra quincena enero: USD ${q1e.toLocaleString()}`
        : '1ra quincena enero: no alquilada',
      okQ2e
        ? `2da quincena enero: USD ${q2e.toLocaleString()}`
        : '2da quincena enero: no alquilada',
      okQ1f
        ? `1ra quincena febrero: USD ${q1f.toLocaleString()}`
        : '1ra quincena febrero: no alquilada',
      okQ2f
        ? `2da quincena febrero: USD ${q2f.toLocaleString()}`
        : '2da quincena febrero: no alquilada',
    ].join('\n  ');

    const prompt = `Sos asesor senior de Tekna Estate, Punta del Este, Uruguay. Redactá un informe de análisis de inversión inmobiliaria en español rioplatense. El informe es para mostrarle a un cliente inversor. Tono profesional, directo y concreto.

DATOS DE LA PROPIEDAD:
  Tipo: ${tipo} — ${dorms} dormitorios — ${zona}
  Precio de compra: USD ${precio.toLocaleString()}

GASTOS DE ENTRADA (cargo del comprador):
  Comisión inmobiliaria (${pctCom}% + IVA): USD ${comUSD.toLocaleString()}
  Honorarios escribano (${pctEsc}% + IVA): USD ${escUSD.toLocaleString()}
  ITP — valor catastral est. USD ${valCat.toLocaleString()} × 2%: USD ${itpF.toLocaleString()}
  Certificados y tasas registrales: USD ${certF.toLocaleString()}
  Refacción / acondicionamiento: USD ${refaccion.toLocaleString()}
  ──────────────────────────────────────
  ACUMULADO (precio + gastos): USD ${acum.toLocaleString()}

GASTOS ANUALES ESTIMADOS:
  Gastos comunes: USD ${Math.round(
    gastC * 12
  ).toLocaleString()} (USD ${gastC}/mes)
  Contribución inmobiliaria: USD ${contrib.toLocaleString()}
  Impuesto de Primaria: USD ${prim.toLocaleString()}
  Otros: USD ${otrosG.toLocaleString()}
  ──────────────────────────────────────
  TOTAL GASTOS ANUALES: USD ${gastA.toLocaleString()}

OPCIÓN A — TEMPORADA + INVERNAL:
  ${qd}
  Alquiler invernal: USD ${invM.toLocaleString()}/mes × ${invMs} meses = USD ${(
      invM * invMs
    ).toLocaleString()}
  ──────────────────────────────────────
  Ingreso bruto anual: USD ${ingA.toLocaleString()}
  Gastos anuales: USD ${gastA.toLocaleString()}
  Libre de gastos: USD ${Math.round(netoA).toLocaleString()}
  ROI anual: ${roiA.toFixed(1)}%
  Tiempo de recupero: ${recA ? recA.toFixed(1) + ' años' : 'no aplica'}

OPCIÓN B — ALQUILER ANUAL:
  Alquiler: USD ${anM.toLocaleString()}/mes × ${anMs} meses = USD ${ingB.toLocaleString()}
  ──────────────────────────────────────
  Ingreso bruto anual: USD ${ingB.toLocaleString()}
  Gastos anuales: USD ${gastA.toLocaleString()}
  Libre de gastos: USD ${Math.round(netoB).toLocaleString()}
  ROI anual: ${roiB.toFixed(1)}%
  Tiempo de recupero: ${recB ? recB.toFixed(1) + ' años' : 'no aplica'}

${
  mkt
    ? `REFERENCIA DE MERCADO — ${zona} (${tipo}, ${dorms} dorms):
  Quincena temporada — bajo: USD ${mkt.q_low.toLocaleString()} / medio: USD ${mkt.q_mid.toLocaleString()} / alto: USD ${mkt.q_high.toLocaleString()}
  Invernal mensual   — bajo: USD ${mkt.inv_low.toLocaleString()} / medio: USD ${mkt.inv_mid.toLocaleString()} / alto: USD ${mkt.inv_high.toLocaleString()}
  Fuentes: Infocasas, GoPunta, Gallito Luis, Apuntavamos — temporada 2025/2026`
    : ''
}

═══════════════════════════════════════════════════════════
INSTRUCCIONES PARA EL HTML:
Generá ÚNICAMENTE el contenido HTML del cuerpo del informe.
Sin DOCTYPE, sin <html>, sin <head>, sin <body>, sin markdown, sin backticks.
El HTML debe estar completo y no cortado.

Estructura exacta que debe tener:

1. HEADER (copiá este bloque exacto):
<div style="background:#1A1814;padding:32px 40px;text-align:center;margin-bottom:32px;border-radius:6px">
  <img src="https://tekna.uy/img/logo-white.png" style="height:56px;display:block;margin:0 auto">
  <p style="color:#B8975A;font-size:11px;letter-spacing:0.2em;margin:12px 0 0;font-family:Georgia,serif;text-transform:uppercase">Análisis de Inversión Inmobiliaria</p>
</div>

2. INFO GENERAL: fecha de emisión, propiedad, zona. Párrafo corto introductorio.

3. TABLA — Inversión y gastos de entrada:
   Columnas: Concepto | Detalle del cálculo | Monto (USD)
   Filas: cada gasto + fila final "ACUMULADO" en negrita con fondo #F7F5F0.

4. TABLA — Gastos anuales:
   Columnas: Concepto | Monto (USD)
   Filas: cada gasto + fila "TOTAL GASTOS ANUALES" en negrita.

5. SECCIÓN — Referencia de mercado:
   Título h2. Párrafo explicando los rangos con las fuentes citadas.

6. TABLA — Opción A (Temporada + Invernal):
   Columnas: Concepto | Monto (USD)
   Filas: cada quincena, invernal, ingreso bruto, gastos (en rojo), libre de gastos (en negrita, color #B8975A), ROI (en negrita, color según valor: verde ≥6%, naranja ≥3%, rojo <3%).

7. TABLA — Opción B (Alquiler Anual):
   Mismo formato que Opción A.

8. SECCIÓN — Análisis comparativo y recomendación:
   Título h2. Mínimo 3 párrafos. Compará con números, mencioná vacancia, gestión, liquidez. Recomendación concreta.

9. FOOTER (copiá este bloque exacto):
<div style="margin-top:40px;padding-top:16px;border-top:1px solid #E0DBD0;font-size:11px;color:#9A9288;text-align:center;font-family:Arial,sans-serif">
  Los valores presentados son estimativos y están basados en datos de mercado disponibles al momento del análisis. ITP calculado sobre valor catastral estimado — verificar con escribano actuante. · Tekna Estate — Punta del Este, Uruguay.
</div>

ESTILOS GENERALES:
- font-family: Georgia, serif para h1/h2; Arial, sans-serif para párrafos y tablas
- Tablas: width:100%; border-collapse:collapse; margin:12px 0 24px
- th: background:#F7F5F0; border:1px solid #E0DBD0; padding:9px 14px; text-align:left; font-size:13px
- td: border:1px solid #E0DBD0; padding:9px 14px; font-size:13px
- h2: font-size:16px; font-weight:600; margin-top:28px; border-bottom:1px solid #E0DBD0; padding-bottom:5px; color:#1A1814
- Acento dorado #B8975A solo en totales clave y ROI
═══════════════════════════════════════════════════════════`;

    try {
      // La API key se lee de la variable de entorno en Vercel
      const apiKey = import.meta.env.VITE_ANTHROPIC_KEY || '';
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // En producción Vercel, la key va en el header.
          // En el artifact de Claude, el proxy la inyecta automáticamente.
          ...(apiKey ? { 'x-api-key': apiKey } : {}),
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4096, // ← aumentado para que no se corte
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      const html = data.content?.map((b) => b.text || '').join('') || '';
      const clean = html.replace(/```html|```/g, '').trim();
      if (!clean || clean.length < 200)
        throw new Error('El informe generado está vacío o incompleto.');
      setDoc(clean);
    } catch (e) {
      setErr(`No se pudo generar el informe: ${e.message}`);
    }
    setLoading(false);
    setTimeout(
      () => docRef.current?.scrollIntoView({ behavior: 'smooth' }),
      200
    );
  }

  function imprimir() {
    const w = window.open('', '_blank');
    w.document.write(
      `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Análisis ROI — Tekna Estate</title><style>*{box-sizing:border-box}body{font-family:Georgia,serif;max-width:860px;margin:40px auto;padding:0 32px;color:#1A1814;line-height:1.7;background:#fff}table{width:100%;border-collapse:collapse;margin:12px 0 20px}td,th{border:1px solid #E0DBD0;padding:9px 14px;font-size:13px;font-family:Arial,sans-serif}th{background:#F7F5F0;font-weight:600;text-align:left}h2{font-family:Georgia,serif;font-size:16px;font-weight:600;margin-top:26px;border-bottom:1px solid #E0DBD0;padding-bottom:5px}p{font-family:Arial,sans-serif;font-size:13px;line-height:1.7;color:#5A5548}@media print{body{margin:20px;padding:0 20px}}</style></head><body>${doc}</body></html>`
    );
    w.document.close();
    w.print();
  }

  return (
    <>
      <style>{css}</style>
      <div className="root">
        <div className="hdr">
          <HeaderSVG />
          <div className="hdr-inner">
            <img src="https://tekna.uy/img/logo-white.png" alt="Tekna Estate" />
            <div className="hdr-divider" />
            <div className="hdr-sub">Calculadora de Rentabilidad</div>
          </div>
        </div>

        <div className="wrap">
          <div className="sec">Propiedad</div>
          <div className="card">
            <SelI
              label="Tipo"
              options={TIPOS}
              value={tipo}
              onChange={setTipo}
            />
            <SelI
              label="Dormitorios"
              options={DORMS}
              value={dorms}
              onChange={setDorms}
            />
            <SelI
              label="Zona"
              options={ZONAS}
              value={zona}
              onChange={setZona}
            />
            <NInput
              label="Precio de compra"
              value={precio}
              onChange={setPrecio}
            />
          </div>

          <div className="sec">Gastos de entrada</div>
          <div className="card">
            <NInput
              label="Comisión inmobiliaria"
              value={pctCom}
              onChange={setPctCom}
              prefix=""
              suffix="% + IVA"
              note="Sobre precio de compra"
            />
            <NInput
              label="Honorarios escribano"
              value={pctEsc}
              onChange={setPctEsc}
              prefix=""
              suffix="% + IVA"
              note="Sobre precio de compra"
            />
            <div style={{ height: 1, background: BRD, margin: '10px 0' }} />
            <NInput
              label="Valor catastral estimado"
              value={pctCat}
              onChange={setPctCat}
              prefix=""
              suffix="% del precio"
              note={`≈ ${f(valCat)} USD`}
            />
            <ModeRow
              label="ITP (2% s/ catastral)"
              isManual={itpMan}
              onToggle={() => setItpMan(!itpMan)}
              autoVal={itpAuto}
              manualVal={itpVal}
              onManualChange={setItpVal}
              autoNote={`2% × ${f(valCat)} = ${f(itpAuto)}`}
              manualNote="Valor real del ITP (del escribano)"
            />
            <ModeRow
              label="Certificados y tasas registrales"
              isManual={certMan}
              onToggle={() => setCertMan(!certMan)}
              autoVal={certAuto}
              manualVal={certVal}
              onManualChange={setCertVal}
              autoNote="Estimado según valor de operación"
              manualNote="Valor real de certificados"
            />
            <NInput
              label="Refacción / acondicionamiento"
              value={refaccion}
              onChange={setRefaccion}
              note="Opcional"
            />
            <div style={{ height: 1, background: BRD, margin: '10px 0' }} />
            <div className="srow n">
              <span>
                Com. {f(comUSD)} · Escrib. {f(escUSD)} · ITP {f(itpF)} · Cert.{' '}
                {f(certF)} · Refac. {f(refaccion)}
              </span>
              <span />
            </div>
            <div className="srow g">
              <span>Acumulado (precio + gastos de entrada)</span>
              <span>{f(acum)}</span>
            </div>
          </div>

          {mkt && (
            <>
              <div className="sec">Referencia de mercado — {zona}</div>
              <div className="mkt-box">
                <div style={{ fontSize: 12, color: TMID, fontWeight: 500 }}>
                  Alquiler por quincena (enero / febrero)
                </div>
                <div className="mkt-grid">
                  {[
                    ['Bajo', mkt.q_low],
                    ['Medio', mkt.q_mid, true],
                    ['Alto', mkt.q_high],
                  ].map(([l, v, m]) => (
                    <div key={l}>
                      <div className="mkt-lbl">{l}</div>
                      <div className={`mkt-v${m ? ' mid' : ''}`}>{f(v)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mkt-box">
                <div style={{ fontSize: 12, color: TMID, fontWeight: 500 }}>
                  Alquiler invernal mensual
                </div>
                <div className="mkt-grid">
                  {[
                    ['Bajo', mkt.inv_low],
                    ['Medio', mkt.inv_mid, true],
                    ['Alto', mkt.inv_high],
                  ].map(([l, v, m]) => (
                    <div key={l}>
                      <div className="mkt-lbl">{l}</div>
                      <div className={`mkt-v${m ? ' mid' : ''}`}>{f(v)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mkt-src">
                Infocasas · GoPunta · Gallito Luis · Apuntavamos — temporada
                2025/2026
              </div>
            </>
          )}

          <div className="sec">Opción A — Temporada + Invernal</div>
          <div className="card">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: TMUT,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 8,
                  }}
                >
                  Enero
                </div>
                <Tgl
                  label="1ra quincena (28/12–15/01)"
                  value={okQ1e}
                  onChange={setOkQ1e}
                />
                {okQ1e && <NInput label="" value={q1e} onChange={setQ1e} />}
                <Tgl
                  label="2da quincena (15/01–31/01)"
                  value={okQ2e}
                  onChange={setOkQ2e}
                />
                {okQ2e && <NInput label="" value={q2e} onChange={setQ2e} />}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: TMUT,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: 8,
                  }}
                >
                  Febrero
                </div>
                <Tgl
                  label="1ra quincena (01/02–15/02)"
                  value={okQ1f}
                  onChange={setOkQ1f}
                />
                {okQ1f && <NInput label="" value={q1f} onChange={setQ1f} />}
                <Tgl
                  label="2da quincena (16/02–28/02)"
                  value={okQ2f}
                  onChange={setOkQ2f}
                />
                {okQ2f && <NInput label="" value={q2f} onChange={setQ2f} />}
              </div>
            </div>
            <div style={{ height: 1, background: BRD, margin: '12px 0' }} />
            <NInput
              label="Alquiler invernal mensual"
              value={invM}
              onChange={setInvM}
              note="Mar – Nov"
            />
            <NInput
              label="Meses ocupados"
              value={invMs}
              onChange={setInvMs}
              prefix=""
              suffix="meses"
              min={0}
            />
          </div>

          <div className="sec">Opción B — Alquiler Anual</div>
          <div className="card2">
            <NInput label="Alquiler mensual" value={anM} onChange={setAnM} />
            <NInput
              label="Meses contratados"
              value={anMs}
              onChange={setAnMs}
              prefix=""
              suffix="meses"
              min={0}
            />
          </div>

          <div className="sec">Gastos anuales</div>
          <div className="card">
            <NInput
              label="Gastos comunes"
              value={gastC}
              onChange={setGastC}
              note={`Mensual → anual: ${f(gastC * 12)}`}
            />
            <NInput
              label="Contribución inmobiliaria"
              value={contrib}
              onChange={setContrib}
            />
            <NInput
              label="Impuesto de Primaria"
              value={prim}
              onChange={setPrim}
            />
            <NInput
              label="Otros gastos anuales"
              value={otrosG}
              onChange={setOtrosG}
            />
            <div style={{ height: 1, background: BRD, margin: '10px 0' }} />
            <div className="srow g">
              <span>Total gastos anuales</span>
              <span>{f(gastA)}</span>
            </div>
          </div>

          <div className="sec">Resultado</div>
          <div className="res-grid">
            <ResCard title="Opción A — Temporada + Invernal" data={dA} />
            <ResCard title="Opción B — Alquiler Anual" data={dB} />
          </div>

          <button className="gen-btn" onClick={generar} disabled={loading}>
            {loading
              ? 'Generando informe...'
              : 'Generar informe para cliente  ↗'}
          </button>

          {err && <div className="err">{err}</div>}

          {doc && (
            <div ref={docRef}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: '1.4rem 0 0.7rem',
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, color: TMID }}>
                  Vista previa del informe
                </span>
                <button className="prt-btn" onClick={imprimir}>
                  Imprimir / PDF
                </button>
              </div>
              <div
                className="doc-wrap"
                dangerouslySetInnerHTML={{ __html: doc }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
