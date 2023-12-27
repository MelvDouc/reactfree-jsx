import type { CommonProps } from "@/typings/props/Props.js";

interface GeneralLink extends CommonProps {
  download: string;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  password: string;
  pathname: string;
  ping: string;
  port: string;
  protocol: string;
  referrerPolicy: string;
  rel: string;
  search: string;
  username: string;
  target: string;
}

export interface AnchorProps extends GeneralLink {
  hreflang: string;
  type: string;
}

export interface AreaProps extends GeneralLink {
  alt: string;
  coords: string;
  shape: string;
}