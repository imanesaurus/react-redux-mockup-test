import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const CardContainer = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 400px;
    border-width: 2px;
    border-color: red;
    border: 1px solid ${COLORS.gray};
    padding: 10px;
    box-shadow: 2px 1px 5px ${COLORS.gray}
`