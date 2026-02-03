import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className={"flex items-stretch p-300 md:p-500 lg:px-0 lg:py-600"}>
      {children}
    </main>
  );
}

export default MainContainer;
