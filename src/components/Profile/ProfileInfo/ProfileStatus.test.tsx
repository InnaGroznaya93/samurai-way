import TestRenderer from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = TestRenderer.create(
      <ProfileStatus status={"it-kamasutra.com"} />
    );
    const instance = component.getInstance();

    // @ts-ignore
    expect(instance?.state.status).toBe("it-kamasutra.com");
  });

  test("after creation <span> with correct status should be displayed", () => {
    const component = TestRenderer.create(
      <ProfileStatus status={"it-kamasutra.com"} />
    );
    const root = component.root;
    let span = root.findByType("span")

    // @ts-ignore
    expect(span).not.toBeNull();
  });

  test("after creation <input> shouldn't be displayed", () => {
    const component = TestRenderer.create(
      <ProfileStatus status={"it-kamasutra.com"} />
    );
    const root = component.root;

    // @ts-ignore
    expect(() => {
      let input = root.findByType("input")
    }).toThrow();
  });
  
  test("after creation <span> with correct status should be displayed", () => {
    const component = TestRenderer.create(
      <ProfileStatus status={"it-kamasutra.com"} />
    );
    const root = component.root;
    let span = root.findByType("span")

    // @ts-ignore
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

  test("input should be displayed in editMode instead span", () => {
    const component = TestRenderer.create(
      <ProfileStatus status={"it-kamasutra.com"} />
    );
    const root = component.root;
    let span = root.findByType("span")
    span.props.onDoubleClick()
    let input = root.findByType("input")

    // @ts-ignore
    expect(input?.props.value).toBe("it-kamasutra.com");
  });

  test("callback should be called", () => {
    const mockCallBack = jest.fn()
    const component = TestRenderer.create(
      <ProfileStatus status={"it-kamasutra.com"} updateStatusTC={mockCallBack}/>
    );
    const instance = component.getInstance();
    // @ts-ignore
    instance.deactivateEditMode()

    // @ts-ignore
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
