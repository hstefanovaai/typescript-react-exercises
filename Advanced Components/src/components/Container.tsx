// Polymorphic component

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

// ElementType means expect a component or a string that represents an HTML element. For example, "div", "span", "button", etc. It allows the component to be flexible and accept different types of elements as the "as" prop.
type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// generic function component that takes a generic type parameter C which extends ElementType. The component accepts props of type ContainerProps<C> and renders the specified element type with the provided children.
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component: ElementType = as || "div";
  return <Component {...props}>{children}</Component>;
}
