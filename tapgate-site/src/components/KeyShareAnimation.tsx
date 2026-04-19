"use client";

export default function KeyShareAnimation() {
  return (
    <div
      aria-hidden
      className="relative w-full aspect-[5/4] max-w-[480px] mx-auto off-screen-skip"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-8 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(14,109,107,0.2) 0%, transparent 65%)",
        }}
      />

      <svg
        viewBox="0 0 500 400"
        className="relative w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="phone-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B2828" />
            <stop offset="100%" stopColor="#0a1414" />
          </linearGradient>
          <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#051010" />
            <stop offset="100%" stopColor="#0A1818" />
          </linearGradient>
          <radialGradient id="screen-glow" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="#0E6D6B" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#0E6D6B" stopOpacity="0" />
          </radialGradient>
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Arc path the key travels along — invisible */}
        <path
          id="keyPath"
          d="M 140 190 Q 250 40 360 190"
          fill="none"
          stroke="none"
        />

        {/* Dotted arc trail, lights up and fades */}
        <path
          d="M 140 190 Q 250 40 360 190"
          fill="none"
          stroke="#0E6D6B"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          strokeLinecap="round"
          opacity="0.5"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-40"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Sender phone */}
        <g transform="translate(70 100)">
          <rect width="100" height="180" rx="18" fill="url(#phone-grad)" stroke="#0F1A1A" strokeWidth="1.5" />
          <rect x="42" y="8" width="16" height="3" rx="1.5" fill="#000" opacity="0.6" />
          <rect x="8" y="18" width="84" height="152" rx="10" fill="url(#screen-grad)" />
          {/* Message bubble on sender screen */}
          <g>
            <rect x="16" y="82" width="60" height="32" rx="10" fill="#0E6D6B" opacity="0">
              <animate
                attributeName="opacity"
                values="0; 0; 1; 1; 0"
                keyTimes="0; 0.05; 0.15; 0.35; 0.4"
                dur="6s"
                repeatCount="indefinite"
              />
            </rect>
            <text
              x="22"
              y="103"
              fontFamily="var(--font-jetbrains), monospace"
              fontSize="10"
              fontWeight="600"
              fill="white"
              opacity="0"
            >
              Here&apos;s a key
              <animate
                attributeName="opacity"
                values="0; 0; 1; 1; 0"
                keyTimes="0; 0.05; 0.15; 0.35; 0.4"
                dur="6s"
                repeatCount="indefinite"
              />
            </text>
          </g>
          {/* Typing dots */}
          <g>
            {[0, 1, 2].map((i) => (
              <circle
                key={i}
                cx={24 + i * 10}
                cy={68}
                r={2.5}
                fill="#6B7280"
              >
                <animate
                  attributeName="opacity"
                  values="0; 1; 1; 0"
                  keyTimes="0; 0.02; 0.08; 0.12"
                  dur="6s"
                  begin={`${i * 0.15}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        </g>

        {/* Receiver phone */}
        <g transform="translate(330 100)">
          <rect width="100" height="180" rx="18" fill="url(#phone-grad)" stroke="#0F1A1A" strokeWidth="1.5" />
          <rect x="42" y="8" width="16" height="3" rx="1.5" fill="#000" opacity="0.6" />
          <rect x="8" y="18" width="84" height="152" rx="10" fill="url(#screen-grad)" />
          {/* Screen glow when key arrives */}
          <circle cx="50" cy="94" r="60" fill="url(#screen-glow)" opacity="0">
            <animate
              attributeName="opacity"
              values="0; 0; 1; 1; 0"
              keyTimes="0; 0.55; 0.6; 0.85; 0.95"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Key icon on receiver when delivered */}
          <g opacity="0">
            <animate
              attributeName="opacity"
              values="0; 0; 1; 1; 0"
              keyTimes="0; 0.58; 0.63; 0.88; 0.95"
              dur="6s"
              repeatCount="indefinite"
            />
            <circle cx="40" cy="94" r="8" fill="none" stroke="#0E6D6B" strokeWidth="2" />
            <rect x="48" y="92" width="20" height="4" fill="#0E6D6B" />
            <rect x="60" y="94" width="3" height="6" fill="#0E6D6B" />
            <rect x="64" y="94" width="2" height="4" fill="#0E6D6B" />
          </g>
          {/* "Tap to enter" text */}
          <text
            x="50"
            y="128"
            textAnchor="middle"
            fontFamily="var(--font-jetbrains), monospace"
            fontSize="8"
            fontWeight="500"
            letterSpacing="1.2"
            fill="#0E6D6B"
            opacity="0"
          >
            TAP TO ENTER
            <animate
              attributeName="opacity"
              values="0; 0; 1; 1; 0"
              keyTimes="0; 0.65; 0.7; 0.88; 0.95"
              dur="6s"
              repeatCount="indefinite"
            />
          </text>
        </g>

        {/* Flying key — rides the invisible arc path */}
        <g opacity="0">
          <animate
            attributeName="opacity"
            values="0; 0; 1; 1; 0; 0"
            keyTimes="0; 0.4; 0.42; 0.62; 0.65; 1"
            dur="6s"
            repeatCount="indefinite"
          />
          <g>
            <animateMotion
              dur="6s"
              begin="0s"
              repeatCount="indefinite"
              keyPoints="0; 0; 0; 1; 1; 1"
              keyTimes="0; 0.4; 0.42; 0.62; 0.65; 1"
              calcMode="spline"
              keySplines="0 0 1 1; 0 0 1 1; 0.22 1 0.36 1; 0 0 1 1; 0 0 1 1"
            >
              <mpath href="#keyPath" />
            </animateMotion>
            {/* Soft halo */}
            <circle r="14" fill="#0E6D6B" opacity="0.25" filter="url(#soft-glow)" />
            {/* Key glyph */}
            <g transform="translate(-10 -6)">
              <circle cx="6" cy="6" r="5" fill="none" stroke="#0E6D6B" strokeWidth="2" />
              <rect x="11" y="4.5" width="14" height="3" fill="#0E6D6B" />
              <rect x="22" y="5.5" width="2" height="5" fill="#0E6D6B" />
              <rect x="18" y="5.5" width="2" height="4" fill="#0E6D6B" />
            </g>
          </g>
        </g>

        {/* Signal ripple at arrival */}
        <g>
          {[0, 1].map((i) => (
            <circle
              key={i}
              cx="380"
              cy="190"
              r="10"
              fill="none"
              stroke="#0E6D6B"
              strokeWidth="1.5"
              opacity="0"
            >
              <animate
                attributeName="r"
                values="10; 40"
                keyTimes="0; 1"
                dur="1.2s"
                begin={`${3.75 + i * 0.25}s; ${9.75 + i * 0.25}s`}
                fill="freeze"
              />
              <animate
                attributeName="opacity"
                values="0.8; 0"
                keyTimes="0; 1"
                dur="1.2s"
                begin={`${3.75 + i * 0.25}s; ${9.75 + i * 0.25}s`}
                fill="freeze"
              />
            </circle>
          ))}
        </g>

        {/* Label badges */}
        <text
          x="120"
          y="310"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
          fill="#6B7280"
        >
          YOU
        </text>
        <text
          x="380"
          y="310"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="10"
          fontWeight="600"
          letterSpacing="2"
          fill="#6B7280"
        >
          YOUR GUEST
        </text>
      </svg>
    </div>
  );
}
