interface ProductCardProps {
  image: any;
  title: string;
  power: string;
  quantity: number;
}

function ProductCard({ image, title, power, quantity }: ProductCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <img
        src={image.src}
        height="350px"
        width="350px"
        style={{ borderRadius: "10px", alignSelf: "center" }}
      />
      <div>
        <h1>{title}</h1>
        <text
          style={{ color: "var(--purpleHaze)" }}
        >{`${power} // Packet of ${quantity}`}</text>
      </div>
    </div>
  );
}

export { ProductCard };
