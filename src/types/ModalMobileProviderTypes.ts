export type ModalMobileProviderTypes = {
    children: React.ReactNode;
}

export type ModalMobileContextTypes = {
    state: boolean;
    setState: (value: boolean) => void;
    stateOthers: boolean;
    setStateOthers: (value: boolean) => void;
}