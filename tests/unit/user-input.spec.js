import { mount } from "@vue/test-utils";
import userInput from "@/components/user-input.vue";

describe("User input component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(userInput);
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("on imput, emits event", () => {
    const input = wrapper.find("input");
    input.setValue(12);
    const emittedd = wrapper.emitted("input");
    expect(emittedd[0]).toEqual(["12"]);
  });
});
