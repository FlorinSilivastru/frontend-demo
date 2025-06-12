import { createComponent } from "./componentLoader";
import { roleTypes } from "../user-roles/roles";

export default function createRoutes(store) {
  return [
    ...createGuestRoutes(store),
    ...createPublicRoutes(store),
  ];
}

function createGuestRoutes(store) {
  return [
    {
      id: "8337ceab-bc21-4cb7-8441-bbafbdfc7fef",
      element: createComponent(store, "pages/Guest/Dashboard"),
      errorElement: <>Error Page</>,
      path: "/dashboard",
      text: "Dashboard",
      icon: <></>,
      role: [roleTypes.guest],
      menuCategory: "",
      isPrivateRoute: true,
    },
  ];
}

function createPublicRoutes(store) {
  return [
    {
      id: "fb04bb32-f79f-4f77-917f-3ee2393571ac",
      element: createComponent(store, "pages/Landing"),
      errorElement: <>Error Page</>,
      path: "/",
      text: "Landing page",
      icon:  <></>,
      role: [],
      menuCategory: "",
      isPrivateRoute: false,
    },
  ];
}
