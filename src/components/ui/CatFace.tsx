type CatFaceProps = {
  fur?: string;
  size?: number;
  className?: string;
};

/**
 * Procedural cat face matching the app's map-pin language:
 * round head, triangular ears, dark outline, rust nose.
 */
export default function CatFace({
  fur = "#E8873B",
  size = 40,
  className,
}: CatFaceProps) {
  const outline = "#3B3537";
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* ears */}
      <path
        d="M14 30 L10 8 L30 16 Z"
        fill={fur}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M50 30 L54 8 L34 16 Z"
        fill={fur}
        stroke={outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M16 24 L14 13 L24 17 Z" fill="#b53920" opacity="0.45" />
      <path d="M48 24 L50 13 L40 17 Z" fill="#b53920" opacity="0.45" />
      {/* head */}
      <ellipse
        cx="32"
        cy="38"
        rx="23"
        ry="21"
        fill={fur}
        stroke={outline}
        strokeWidth="3"
      />
      {/* eyes */}
      <circle cx="23.5" cy="36" r="3.2" fill="#2D2420" />
      <circle cx="40.5" cy="36" r="3.2" fill="#2D2420" />
      {/* nose */}
      <path d="M29.5 44 h5 l-2.5 3.5 Z" fill="#b53920" />
      {/* whiskers */}
      <g stroke={outline} strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <path d="M4 38 H14" />
        <path d="M5 45 Q10 44 15 42.5" />
        <path d="M60 38 H50" />
        <path d="M59 45 Q54 44 49 42.5" />
      </g>
    </svg>
  );
}
