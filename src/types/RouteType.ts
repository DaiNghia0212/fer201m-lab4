export type RouteType = {
  path: string;
  component: React.ComponentType;
  children?: RouteType[];
};
