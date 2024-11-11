import { ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

export const PageContainer = ({
  pageName,
  children,
}: {
  pageName: string;
  children: ReactNode;
}) => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
    time: 2000,
  });

  return (
    <animated.div
      style={springs}
      className="flex flex-col justify-between w-full h-full items-center"
    >
      <h1 className="text-4xl font-bold font-serif">{pageName}</h1>
      {children}
    </animated.div>
  );
};
