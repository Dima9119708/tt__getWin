import { TextFieldProps } from '@mui/material';

export type OnSearch = (searchValue: string) => void

export interface SearchProps extends TextFieldProps<'standard'> {
    onSearch: (searchValue: string) => void
}
