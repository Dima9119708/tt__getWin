import { InputAdornment, TextField } from '@mui/material';
import { Search as IconSearch } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import {
  ChangeEvent, FormEvent, memo, useState, FocusEvent, useRef,
} from 'react';
import { SearchProps } from 'shared/ui/Search/model/types/types';
import { cn } from 'shared/lib/classNames';

const Search = (props: SearchProps) => {
  const { onSearch, ...otherProps } = props;
  const prevState = useRef('');
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (prevState.current !== event.target.value) {
      onSearch(event.target.value);
    }

    prevState.current = event.target.value;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSearch(value);
  };

  const onClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <TextField
        {...otherProps}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label="Search by name"
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon
                className={cn({
                  'pointer-events-none': !value,
                  'opacity-0': !value,
                })}
                onClick={onClear}
              />
              <IconSearch />
            </InputAdornment>
          ),
        }}
      />
    </form>

  );
};

export default memo(Search);
