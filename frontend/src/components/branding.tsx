import React from "react";
import H1 from "./H1";

type BrandingProps = {
  title: string;
  subtitle: string;
};

function Branding({ title, subtitle }: BrandingProps) {
  return (
    <section>
      <H1>{title}</H1>
      <p className="text-lg opacity-80">{subtitle}</p>
    </section>
  );
}

export default Branding;
