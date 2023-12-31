export interface ButtonMainProps {
    text: string
    id: string
    type: "button" | "reset" | "submit"
    handle?: (event?: any) => void
}