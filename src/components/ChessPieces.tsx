const ChessPieces = () => {
  const pieces = [
    { symbol: "♔", top: "8%", left: "6%", size: "text-7xl", delay: "0s", animation: "animate-king" },
    { symbol: "♕", top: "18%", right: "8%", size: "text-8xl", delay: "1s", animation: "animate-queen" },
    { symbol: "♖", bottom: "28%", left: "4%", size: "text-6xl", delay: "0.6s", animation: "animate-rook" },
    { symbol: "♗", top: "58%", right: "6%", size: "text-6xl", delay: "1.6s", animation: "animate-bishop" },
    { symbol: "♘", bottom: "14%", left: "12%", size: "text-7xl", delay: "0.9s", animation: "animate-knight" },
    { symbol: "♙", top: "38%", left: "10%", size: "text-5xl", delay: "1.2s", animation: "animate-pawn" },
    { symbol: "♚", bottom: "38%", right: "10%", size: "text-6xl", delay: "2.2s", animation: "animate-king" },
    { symbol: "♞", top: "72%", right: "14%", size: "text-5xl", delay: "2.8s", animation: "animate-knight" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1] hidden lg:block">
      {pieces.map((piece, index) => (
        <span
          key={index}
          className={`absolute ${piece.size} font-heading select-none ${piece.animation} text-primary/40 mix-blend-overlay drop-shadow-lg`}
          style={{
            top: piece.top,
            left: piece.left,
            right: piece.right,
            bottom: piece.bottom,
            animationDelay: piece.delay,
            transform: "translateZ(0)",
          }}
        >
          {piece.symbol}
        </span>
      ))}
    </div>
  );
};

export default ChessPieces;
