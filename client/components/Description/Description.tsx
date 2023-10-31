import React from "react";
interface DescriptionsProps {
  description: string;
}
function Description({ description }: DescriptionsProps) {
  return (
    <div style={{ background: "var(--hemocyanin)", padding: "5px 0" }}>
      <div style={{ margin: "20px" }}>
        <h3>Description</h3>
        {description}
      </div>
    </div>
  );
}

export { Description };
