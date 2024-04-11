"use client";

import { HTMLAttributes, useCallback, useMemo } from "react";
import { Large } from "@components/text";
import { Button } from "@components/ui/button";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useClient } from "@/hooks/useClient";
import Loading from "@components/loading";

const loadingList = ["w-[160px] h-[16px] rounded", "w-[47px] h-[36px] rounded"];

interface HeaderProps extends Omit<HTMLAttributes<HTMLBaseElement>, "children"> {}

const Header = ({ ...props }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [ready] = useClient();

  const icon = useMemo(() => {
    switch (theme) {
      case "light":
        return <MoonIcon />;
      case "dark":
        return <SunIcon />;
    }
  }, [theme]);

  const changeTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  if (!ready) {
    return (
      <Loading
        list={loadingList}
        options={{ direction: "row", className: "px-3 lg:px-0 py-3 flex justify-between items-center border-b" }}
      />
    );
  }

  return (
    <header className="flex w-full items-center justify-between border-b px-3 py-3 lg:px-0" {...props}>
      <div>
        <Large>Kream Compare Viewer</Large>
      </div>

      <div>
        <Button onClick={changeTheme}>{icon}</Button>
      </div>
    </header>
  );
};

export default Header;
