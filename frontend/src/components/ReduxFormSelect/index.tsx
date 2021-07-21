import { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import { Input } from '@material-ui/core';

export const ReduxFormSelect: React.FC = (field: any) => {

    return (
        <TextField
            {...field.input}
            id={field.id}
            name={field.name}
            select
            error={(!field.mensagem ? false : true)}
            label={field.label}
            placeholder={field.label}
            onChange={field.handleChange}
            value={field.value}
            SelectProps={{
                native: true,
            }}
            helperText={field.mensagem}
            variant="outlined"
            className={field.className}
        >
            <option value=""></option>
            {field.data.map((option: any) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </TextField>
    )
}

