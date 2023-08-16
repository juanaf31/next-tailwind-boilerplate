import React from "react";

function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Login Layout
      <div>{children}</div>
    </div>
  );
}

export default LoginLayout;
