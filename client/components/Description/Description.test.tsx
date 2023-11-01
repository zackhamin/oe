import React from "react";
import { render } from "@testing-library/react";
import { Description } from "./Description"; // Adjust the import path as needed

describe("Description component", () => {
  it("should render with the provided description", () => {
    const testDescription = "This is a test description.";

    const { getByText } = render(<Description description={testDescription} />);

    const descriptionElement = getByText("Description");
    expect(descriptionElement).toBeInTheDocument();
    expect(getByText(testDescription)).toBeInTheDocument();
  });
});
