export type ElementType = "heading" | "paragraph" | "image" | "video";

export type BaseElement = {
    id: string;
    type: ElementType;
};

export type HeadingElement = BaseElement & {
    type: "heading";
    properties: {
        fontFamily: string;
        fontWeight: "bold" | "semibold" | "medium" | "thin";
        text: string;
    };
};

export type ParagraphElement = BaseElement & {
    type: "paragraph";
    properties: {
        fontFamily: string;
        fontWeight: "bold" | "semibold" | "medium" | "thin";
        text: string;
    };
};

export type ImageElement = BaseElement & {
    type: "image";
    properties: {
        src: string;
        width?: number;
        height?: number;
    };
};

export type VideoElement = BaseElement & {
    type: "video";
    properties: {
        src: string;
        width?: number;
        height?: number;
    };
};

export type Element = HeadingElement | ParagraphElement | ImageElement | VideoElement; 