"use client";

import { useEffect, useState } from "react";

export const useClient = () => {
  const [ready, setReady] = useState(false);

  const forceSetState = (state: boolean) => setReady(state);

  useEffect(() => {
    setReady(true);
  }, []);

  return [ready, forceSetState];
};
