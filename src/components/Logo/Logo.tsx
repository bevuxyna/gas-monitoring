type LogoProps = {
    size?: number | string
    color?: string
}

export default function Logo({ size = 64, color = "#24b89a" }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color }}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1a8a74" />
                    <stop offset="50%" stopColor={color} />
                    <stop offset="100%" stopColor="#4fd3b6" />
                </linearGradient>
            </defs>

            {/* Diamond */}
            <polygon
                points="100,20 180,100 100,180 20,100"
                fill="url(#logoGradient)"
            />

            {/* Triangle */}
            <polygon
                points="65,95 135,95 100,125"
                fill="white"
            />
        </svg>
    )
}