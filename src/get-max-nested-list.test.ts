import getMaximums from "./get-max-nested-list";

test("getMaximums finds the maximum number in each nested array", () => {
    expect(getMaximums([[30,40,50],[1,2,3],[6,7,8]]).toBe([50,3,8]);
    expect(getMaximums([[100,20,10,5],[2,3,3,5,7,9],[100,0,1000]).toBe([100,9,1000]);
  });