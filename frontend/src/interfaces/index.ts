type method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type WebSocketHook = {
  message: string;
  sendMessage: (message: string) => void;
};

export interface ApiParams {
  url: string;
  method?: method;
  headers?: Record<string, string>;
  body?: object;
}

export interface Icon {
  icon?: "offline" | "loading";
}

export interface Url {
  url: string;
}

export interface Layout {
  children: React.ReactNode;
  image: string;
}

export type BorderRadiusType = "full" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export enum BorderRadiusEnum {
  full = "full",
  sm="sm",
  md= "md",
  lg= "lg",
  xl= "xl",
  xl2= "2xl",
  xl3 = "3xl"
}

export enum FontSizeEnum {
xs = "xs",
sm = "sm",
base = "base",
lg = "lg",
xl = "xl",
xl2 = "2xl",
xl3 = "3xl",
xl4 = "4xl",
xl5 = "5xl",
xl6 = "6xl",
xl7 = "7xl",
xl8 = "8xl",
xl9 = "9xl",
}

export enum TextColorEnum {
  black = "black",
  white = "text-white",
  pink = "text-[#FE5A8F]",
  green = "text-[#6FAF46]"
}

export enum BackgroundButtonEnum{
  white = "bg-white",
  pink = "bg-[#FE5A8F]",
  green = "bg-[#6FAF46]"
}

export enum PositionButtonEnum{
  static = "static",
  fixed = "fixed",
  absolute = "absolute",
  relative = "relative",
  sticky = "sticky",
}

export interface ButtonInterface {
  bgColor?: BackgroundButtonEnum | null;
  borderRadius?: BorderRadiusEnum;
  label: string;
  borderColor?: string | null;
  textColor?: TextColorEnum | null;
  url: string;
  fontSize?: FontSizeEnum;
  positionButton? : PositionButtonEnum | null;
}

export interface BackButtoninterface {
  bgColor?: string | null;
  url: string;
  imageSrc?: string;
}

export interface CardRewardinterface {
  bgColor?: string | null;
  url: string;
  imageSrc?: string;
  label: string;
}

export interface SocialMedia {
  name: string;
  icon: JSX.Element;
}

export interface MediasProps {
  socialMedias: SocialMedia[];
}

export interface Container {
  name: string;
  icon: string;
}

export interface ContainersConditions {
  container: Container;
  conditions: string[];
}

export interface ArrayContainersConditions {
  containers: ContainersConditions[];
}

export interface PaginationButtonsInterface {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  previousImageSrc: string;
  nextImageSrc: string; 
}

export interface TicketButtonInterface {
  imageSrc: string;
  altText: string;
  buttonText: string;
  buttonClass?: string;
  imgClass?: string;
  textClass?: string;
  url: string;
}

export interface QRCodeInterface {
  value: string;
  size?: number;
  level?: 'L' | 'M' | 'Q' | 'H';
  includeMargin?: boolean;
  marginSize?: number;
  fgColor?: string;
  title?: string;
  bgColor?: string;
}


export interface MetaDataLanguage {
  button: {
      url: string,
      bgColor: string,
      labelEn: string,
      labelEs: string,
      fontSize: string,
      borderRadious: string
      },
  background : string,
  }

  export interface MetaDataHome {
    button: {
      url: string;
      label: string;
      bgColor: string;
      fontSize: string;
      borderRadious: string;
    };
    logoUp: {
      alt: string;
      path: string;
    };
    logoDown: {
      alt: string;
      path: string;
    };
    background: string;
    logoHelp: {
      alt: string;
      path: string;
      };
    logoLang: {
        alt: string;
        path: string;
        },
  }

  export interface MetaDataHelp{
    textDown: {
            phone: string,
            description:string
        },
        background: string,
        textCenter: {
            title: string,
            phoneText: string,
            description: string
        }
  }