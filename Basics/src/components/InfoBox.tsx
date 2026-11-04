import { ReactNode } from "react";

type InfoBoxPropsHint = {
  mode: "hint";
  children: ReactNode;
};

type InfoBoxPropsWarning = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = InfoBoxPropsHint | InfoBoxPropsWarning;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;

  if (mode === "hint") {
    return (
      <div className="infobox infobox-hint">
        <p>{children}</p>
      </div>
    );
  }

  const {severity} = props;

  return (
    <div className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning!</h2>
      <p>{children}</p>
    </div>
  );
}
