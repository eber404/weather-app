import { useState } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

import TextField from '@mui/material/TextField'

export function SearchInput({ setSearch, placeholder }) {
  const [value, setValue] = useState('')

  function onChangeHandler(event) {
    setValue(event.target.value)
  }

  function onKeyDown(event) {
    if (value.length === 0) return

    if (event.keyCode === 13) {
      setSearch(value)
      event.target.blur()
      return setValue('')
    }
  }

  return (
    <InputWrapper>
      <TextField
        autoFocus={true}
        label="City"
        variant="standard"
        onInput={onChangeHandler}
        onKeyDown={onKeyDown}
        value={value}
        placeholder={placeholder ?? 'New York, US'}
        fullWidth
      />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`

SearchInput.propTypes = {
  setSearch: propTypes.func.isRequired,
}
