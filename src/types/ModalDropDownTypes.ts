import React from "react";

export type ModalDropDownCssTypes = {
    height: number | string;
    state?: boolean;
}

export interface ModalDropDownTypes extends ModalDropDownCssTypes {
    children: React.ReactNode;
}