export type CustomSelectComponentTypes = {
    arrOptions: {
        value: string,
        key: string,
    }[];
    firstElement: string;
    onChange: (value: string)=>void;
}