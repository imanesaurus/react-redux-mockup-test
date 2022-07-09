import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const InputWrapper = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${COLORS.gray};
    margin-bottom: 30px;
    height: 30px;
    width: 60%;
`

export const ErrorMessage = styled.span`
    position: absolute;
    bottom: 20px;
    font-size: 16px;
    width: 60%;
    color: ${COLORS.red};
    font-weight: 500;
`