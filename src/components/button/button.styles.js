import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ButtonMain = styled.button`
    background-color: ${(props) => props.disabled ? COLORS.gray : COLORS.purple};
    color: ${COLORS.white};
    width: 50%;
    height: 50px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
`