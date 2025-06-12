import { useEffect } from "react";

export default function PrivateRoute({ children, ...rest }) {
  //check if token exists in session storage 
  // if not redirect to login page
  useEffect(() => {
    // if (!token) return navigate("/login");
  });

  return children;
}
