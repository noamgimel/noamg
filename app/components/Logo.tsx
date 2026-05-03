/**
 * Logo component — renders the brand mark as inline SVG
 * so we can color it dynamically (currentColor).
 *
 * For places that need the original brand greens use <LogoColored />.
 */

type Props = {
  className?: string;
  /** When true, uses original brand greens. Otherwise inherits currentColor. */
  colored?: boolean;
};

export default function Logo({ className = "w-full h-full", colored = false }: Props) {
  const c1 = colored ? "#54923c" : "currentColor";
  const c2 = colored ? "#6abc48" : "currentColor";

  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="לוגו נועם גמליאל"
    >
      <path
        fill={c1}
        d="M287.4,149.83l-16.82,258.56h-22.48l-9.61-258.56h-125.95v-36.22h305.96s0,36.22,0,36.22h-131.09Z"
      />
      <polygon fill={c2} points="199.06 159.35 226.95 159.35 239.65 408.39 218.11 408.39 199.06 159.35" />
      <polygon fill={c2} points="85.91 180.27 192.65 180.27 189.59 159.51 104.61 159.51 85.91 180.27" />
      <polygon fill={c2} points="81.51 113.61 81.51 175.86 102.27 152.8 102.27 113.61 81.51 113.61" />
    </svg>
  );
}

export function LogoColored({ className = "w-full h-full" }: { className?: string }) {
  return <Logo className={className} colored />;
}
