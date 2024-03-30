import { HTMLAttributes } from "react";
import Header from "@components/header";
import { cn } from "@/lib/utils";

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  hideHeader?: boolean;
}

const PageLayout = ({ children, hideHeader = false, ...props }: PageLayoutProps) => {
  return (
    <div {...props}>
      {!hideHeader && <Header />}
      <div className={cn(!hideHeader && "mt-4")}>{children}</div>
    </div>
  );
};

export default PageLayout;
