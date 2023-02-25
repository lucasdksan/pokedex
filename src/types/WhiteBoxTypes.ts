import React from "react";

export type WhiteBoxTypesCss = {
    valuePadding?: string;
    valueWidth?: string;
    valueGap?: boolean;
}

export interface WhiteBoxTypes extends WhiteBoxTypesCss {
    children?: React.ReactNode;
}