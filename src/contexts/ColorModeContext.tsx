import React from "react";
import { ReactNode } from "react";

type ColorModeType = {
  mode: "light" | "dark";
  toggleColorMode: () => void;
};

export const ColorModeContext = React.createContext<ColorModeType>({
  mode: "light",
  toggleColorMode: () => {},
});

type Props = {
  children: ReactNode;
};
const ColorModeProvider = ({ children }: Props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
