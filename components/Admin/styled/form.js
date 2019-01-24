import styled, { css } from 'styled-components'
import * as colors from './colors'

const FormControl = css`
  padding: 0.3em 0.6em;
  font-size: 1.1em;
  border: 1px solid ${colors.gray};
  outline: none;
  border-radius: 3px;
  margin: 0.3em;
  color: ${colors.darkerPrimary};
  flex-grow: 1;
  &:focus {
    background-color: ${colors.lightPrimary};
    border-color: ${colors.darkGray};
    color: #000;
  }
  ${props =>
    props.disabled &&
    css`
      background-color: ${colors.gray}!important;
      border-color: ${colors.darkGray}!important;
      cursor: not-allowed !important;
    `}
`
export const FormCentered = styled.form`
  margin: 2em auto;
  position: relative;
  width: 400px;
  border-radius: 5px;
  border: 1px solid ${colors.primary};
`
export const Form = styled.form`
  margin: 1em;
  border-radius: 5px;
  border: 1px solid ${colors.lightPrimary};
`
export const Label = styled.label`
  flex: 0 0 100px;
  padding-right: 0.6em;
`
export const Row = styled.div`
  display: flex;
  margin: 0.6em;
  align-items: center;
`
export const Textarea = styled.textarea`
  ${FormControl}
`

export const Input = styled.input`
  ${FormControl}
  ${props =>
    props.type === 'submit' &&
    css`
      background-color: ${colors.primary};
      border-color: ${colors.primary};
      color: ${colors.lightPrimary};
      cursor: pointer;
    `}
  ${props =>
    props.type === 'button' &&
    css`
      background-color: ${colors.darkPrimary};
      border-color: ${colors.primary};
      color: ${colors.lightPrimary};
      cursor: pointer;
    `}    
`
export const Btn = styled.button`
  ${FormControl}
`
