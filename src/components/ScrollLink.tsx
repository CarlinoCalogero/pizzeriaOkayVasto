'use client';

// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition

function handleScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault();
  //remove everything before the hash
  const targetId = e.currentTarget.href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function ScrollLink({ children, ...props }: ScrollLinkProps) {

  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  )
}
