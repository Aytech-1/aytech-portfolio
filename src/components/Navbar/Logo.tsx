const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id="ay-gradient"
          x1="8"
          y1="8"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="var(--gradient-start)" />
          <stop offset="50%" stopColor="var(--gradient-mid)" />
          <stop offset="100%" stopColor="var(--gradient-end, var(--gradient-mid))" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="16"
        fill="url(#ay-gradient)"
      />

      {/* Letter A */}
      <path
        d="M22 44L32 18L42 44"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M26 34H38"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Letter Y */}
      <path
        d="M32 18L44 30"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M44 30V44"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Logo