import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  it("should render without errors and contain specific elements", () => {
    const { container } = render(<Header />);

    expect(container).toBeDefined();

    const logoImage = container.querySelector(".logo-image");
    const iconImage = container.querySelector(".icon-image");

    expect(logoImage).toBeDefined();
    expect(iconImage).toBeDefined();
  });
});
