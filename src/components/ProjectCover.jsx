const palettes = {
  typing: { a: "#ff9e64", b: "#f7768e" },
  tasks: { a: "#9ece6a", b: "#7dcfff" },
  terminal: { a: "#7dcfff", b: "#bb9af7" },
  graphics: { a: "#bb9af7", b: "#ff9e64" },
  web: { a: "#7aa2f7", b: "#9ece6a" },
};

const ProjectCover = ({ type }) => {
  const c = palettes[type] || palettes.web;
  const gradId = `grad-${type}`;

  return (
    <svg viewBox="0 0 320 140" className="w-full h-12 rounded-md" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.a} stopOpacity="0.25" />
          <stop offset="100%" stopColor={c.b} stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="320" height="140" fill="var(--surface-hover)" />
      <rect width="320" height="140" fill={`url(#${gradId})`} />

      {type === "typing" && (
        <g>
          <rect x="60" y="55" width="200" height="45" rx="8" fill="none" stroke={c.a} strokeWidth="2" opacity="0.7" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x={72 + i * 27} y="68" width="18" height="18" rx="3" fill={c.a} opacity={i % 2 ? 0.5 : 0.85} />
          ))}
          <rect x="130" y="95" width="60" height="10" rx="4" fill={c.b} opacity="0.6" />
        </g>
      )}

      {type === "tasks" && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="90" y={45 + i * 22} width="16" height="16" rx="4" fill="none" stroke={c.a} strokeWidth="2" />
              {i !== 1 && (
                <path
                  d={`M93 ${53 + i * 22} l4 4 l7 -8`}
                  stroke={c.b}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              <rect x="118" y={49 + i * 22} width="110" height="8" rx="4" fill={c.a} opacity="0.4" />
            </g>
          ))}
        </g>
      )}

      {type === "terminal" && (
        <g>
          <rect x="70" y="40" width="180" height="65" rx="8" fill="none" stroke={c.a} strokeWidth="2" opacity="0.7" />
          <line x1="70" y1="56" x2="250" y2="56" stroke={c.a} strokeWidth="2" opacity="0.7" />
          <circle cx="82" cy="48" r="3" fill={c.b} />
          <circle cx="94" cy="48" r="3" fill={c.a} opacity="0.6" />
          <path
            d="M85 70 l12 8 l-12 8 M112 86 h30"
            stroke={c.b}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      )}

      {type === "graphics" && (
        <g>
          <polygon points="160,40 205,65 205,100 160,120 115,100 115,65" fill="none" stroke={c.a} strokeWidth="2" opacity="0.8" />
          <line x1="160" y1="40" x2="160" y2="80" stroke={c.b} strokeWidth="2" opacity="0.6" />
          <line x1="115" y1="65" x2="160" y2="80" stroke={c.b} strokeWidth="2" opacity="0.6" />
          <line x1="205" y1="65" x2="160" y2="80" stroke={c.b} strokeWidth="2" opacity="0.6" />
        </g>
      )}

      {type === "web" && (
        <g>
          <rect x="65" y="42" width="190" height="58" rx="8" fill="none" stroke={c.a} strokeWidth="2" opacity="0.7" />
          <line x1="65" y1="58" x2="255" y2="58" stroke={c.a} strokeWidth="2" opacity="0.7" />
          <circle cx="77" cy="50" r="2.5" fill={c.b} />
          <circle cx="87" cy="50" r="2.5" fill={c.b} opacity="0.6" />
          <rect x="78" y="70" width="70" height="8" rx="3" fill={c.a} opacity="0.5" />
          <rect x="78" y="84" width="100" height="6" rx="3" fill={c.b} opacity="0.4" />
        </g>
      )}
    </svg>
  );
};

export default ProjectCover;
