import { useEffect, useState } from "react";

export const SunCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsMoving(true);

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setIsMoving(false);
            }, 150);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {/* Sun cursor */}
            <div
                className="fixed pointer-events-none z-50"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            >
                {/* Outer glow effect */}
                <div
                    className={`absolute -inset-4 transition-all duration-300 ${isMoving ? "scale-150" : "scale-100"
                        }`}
                >
                    <div className="absolute inset-0 bg-gradient-radial from-yellow-400/40 via-orange-400/20 to-transparent rounded-full blur-2xl animate-pulse" />
                </div>

                {/* Sun Image */}
                <img
                    src="/sol-cursor.svg"
                    alt="Sol"
                    className={`relative w-12 h-12 transition-all duration-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] ${isMoving ? "scale-125 rotate-45" : "scale-100 rotate-0"
                        }`}
                    style={{
                        filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))",
                    }}
                />

                {/* Sparkle particles when moving */}
                {isMoving && (
                    <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full animate-particle opacity-80"
                                style={{
                                    left: `${Math.cos((i * Math.PI) / 3) * 30}px`,
                                    top: `${Math.sin((i * Math.PI) / 3) * 30}px`,
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
