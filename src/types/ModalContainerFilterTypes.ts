export type ModalContainerFilterTypes = {
    arr: {
        key: string,
        value: string
    }[];
    label: string;
    arrSelected: string[];
    setArrSelected: (arr:string[])=>void;
    elementCheck: boolean;
    setElementCheck: (e:boolean)=>void;
}