// Type
interface IAsyncComponent {
  status: string;
  component: JSX.Element;
  skeleton: JSX.Element;
  error: JSX.Element;
}

export default function AsyncComponent({
  status,
  component,
  skeleton,
  error,
}: IAsyncComponent) {
  if (status === "loading") {
    return skeleton;
  } else if (status === "error") {
    return error;
  }

  return component;
}
