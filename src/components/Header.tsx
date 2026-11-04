import { type ReactNode } from "react";

type Image = { src: string; alt: string };
type HeaderProps = {
  image: Image;
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* <img src={props.image.src} alt={props.image.alt} /> */}
      <img {...image}></img>
      {children}
    </header>
  );
}
