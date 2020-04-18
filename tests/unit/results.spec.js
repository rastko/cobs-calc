import { mount } from "@vue/test-utils";
import resultsRow from "@/components/results-row";

describe("Results row component", () => {
  test("renders passed props", () => {
    const wrapper = mount(resultsRow, {
      propsData: {
        index: 2,
        value: 10
      }
    });

    const cells = wrapper.findAll("td");
    expect(cells.at(0).text()).toBe("2");
    expect(cells.at(1).text()).toBe("10");
  });
});
