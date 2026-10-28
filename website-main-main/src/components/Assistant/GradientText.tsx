interface GradientTextProps {
    text: string;
    from?: string;
    to?: string;
    className?: string;
}

function GradientText({ text, from = "#2D4CC8", to = "#BF1869", className }: GradientTextProps) {
    const interpolateColor = (start: string, end: string, factor: number): string => {
        const hex = (c: string): number[] =>
            [c.slice(1, 3), c.slice(3, 5), c.slice(5, 7)].map(h => parseInt(h, 16));

        const [r1, g1, b1] = hex(start);
        const [r2, g2, b2] = hex(end);
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const chars = text.split("");

    return (
        <span className={className}>
            {chars.map((char, i) => {
                const factor = chars.length > 1 ? i / (chars.length - 1) : 0;
                return (
                    <span key={i} style={{ color: interpolateColor(from, to, factor) }}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                );
            })}
        </span>
    );
}

export default GradientText;