import { tsx } from "esri/widgets/support/widget";

import i18n from "dojo/i18n!./nls/Header";

const CSS = {
  base: "top-nav",
  title: "top-nav-title"
};

interface HeaderProperties {
  appName: string;
}

export const Header = (props: HeaderProperties) => (
  <header class={CSS.base}>
    <span class={CSS.title}>{i18n.label} - ArcGIS {props.appName}</span>
  </header>
);
