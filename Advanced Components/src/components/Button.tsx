import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type LinkProps = {
  children: ReactNode;
  href: string;
  el: "link";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | LinkProps) {
  //   const { el, ...otherProps } = props; // if we do destructuring here, typescript doesn't know "otherProps" is for link or button, and returns error. So we should use props instead of desr
  //   if (el === "a") {
  //     return <a {...otherProps}></a>; - typescript error
  //   }

  if (props.el === "a") {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
}
