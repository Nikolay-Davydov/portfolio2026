export default function AtomAnimation() {
  return (
    <div style={{
      width: "100%",
      maxWidth: "700px",
      maxHeight: "350px",
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto"
    }}>
      <svg
        viewBox="0 0 210 309"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f093fb" />
            <stop offset="100%" stopColor="#f5576c" />
          </linearGradient>
          <linearGradient id="orbitGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <circle id="particle" r="3" fill="#667eea" />

          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        <path
          id="orbit1"
          d="m71.062636 139.92242c-14.55985 9.68339-7.492636 16.22044-7.492636 16.22044 10.246628 8.52181 41.9927 11.48821 62.35494 8.97865 0.37127-0.0458-0.0516-0.11729 0.31323-0.17721 6.25449-1.02743 29.07707-9.26261 20.84864-20.96068-10.1474-14.4262-62.425692-13.10521-76.024174-4.0612z"
          fill="none"
          stroke="url(#orbitGradient1)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />

        <use xlinkHref="#particle">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath xlinkHref="#orbit1" />
          </animateMotion>
        </use>

        <path
          id="orbit2"
          d="m131.91368 174.91369c0 17.53504-8.97693 14.55208-8.97693 14.55208-15.72153-3.83816-33.551167-29.49286-40.348961-48.38095-0.126682-0.35199 0.126926-0.0176-0.0134-0.35964-2.405628-5.86406-7.386524-29.08997 6.911467-28.74452 16.016924 0.38699 42.427824 45.39799 42.427824 62.93303z"
          fill="none"
          stroke="url(#orbitGradient2)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />

        <use xlinkHref="#particle">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            rotate="auto"
            begin="1s"
          >
            <mpath xlinkHref="#orbit2" />
          </animateMotion>
        </use>

        <path
          id="orbit3"
          d="m79.366467 174.53571c0 17.53504 8.97693 14.55208 8.97693 14.55208 15.721523-3.83816 33.551163-29.49286 40.348953-48.38095 0.12669-0.35199-0.12692-0.0176 0.0134-0.35964 2.40563-5.86406 7.38653-29.08997-6.91146-28.74452-16.01693 0.38699-42.427823 45.39799-42.427823 62.93303z"
          fill="none"
          stroke="url(#orbitGradient3)"
          strokeWidth="1.5"
          filter="url(#glow)"
        />

        <use xlinkHref="#particle">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            rotate="auto"
            begin="2s"
          >
            <mpath xlinkHref="#orbit3" />
          </animateMotion>
        </use>

        <text
          x="107"
          y="153"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="var(--font-heading)"
          fontSize="14"
          fontWeight="700"
          fill="white"
          letterSpacing="2"
          filter="url(#glow)"
        >
          ND
        </text>
      </svg>
    </div>
  );
}
