declare module '*.module.scss' {
  interface ClassNames {
    [className: string]: string
  }

  const classNames: ClassNames
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __ENV__: 'production' | 'development'
declare const __PLATFORM__: 'desktop' | 'mobile'