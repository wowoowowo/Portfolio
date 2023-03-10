import React from "react";
import styled from "styled-components";
import { Images } from "../media";

export function Animation() {


    return (
        <Container>
            <Logo src={Images.Monitor} />

        </Container>
    );
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: pink;
`
const Logo = styled.img``