import numberToPounds from "../numberToPounds"; // Adjust the import path as needed

describe("numberToPounds utility function", () => {
  it("should convert price from pence to pounds", () => {
    const priceInPence = 2500;

    const priceInPounds = numberToPounds(priceInPence);

    expect(priceInPounds).toBe(25);
  });
});
