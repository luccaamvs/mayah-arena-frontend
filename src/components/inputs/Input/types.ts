export interface InputProps {
    labelText: string
    placeholder: string
    id: string
    name: string
    type: string
    handle?: (event?: any) => void
}