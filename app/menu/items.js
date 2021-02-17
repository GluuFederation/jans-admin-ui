import React from "react";
const Icon = ({ iconName }) => <i className={`fa fa-fw ${iconName}`}></i>;

const items = [
  {
    title: "PluginOne",
    icon: <Icon iconName="fa-sitemap" />,
    items: []
  },
  {
    title: "PluginTwo",
    icon: <Icon iconName="fa-sitemap" />,
    items: []
  }
];
export default items;
