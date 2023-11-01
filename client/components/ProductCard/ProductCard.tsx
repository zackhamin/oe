import { getIsMobile } from "../../hooks/getIsMobile";

interface ProductCardProps {
  image: any;
  title: string;
  power: string;
  quantity: number;
}

function ProductCard({ image, title, power, quantity }: ProductCardProps) {
  const { isMobile } = getIsMobile();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        margin: "20px",
      }}
    >
      <img
        src={image.src}
        height="350px"
        width="350px"
        style={{
          borderRadius: "10px",
          alignSelf: "center",
          margin: !isMobile ? "20px" : "0px",
        }}
      />
      <div>
        <h1>{title}</h1>
        <span
          style={{ color: "var(--purpleHaze)" }}
        >{`${power} // Packet of ${quantity}`}</span>
      </div>
    </div>
  );
}

export { ProductCard };
