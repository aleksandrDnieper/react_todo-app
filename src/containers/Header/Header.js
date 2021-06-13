import React from 'react';
import {Form} from "../../components/Form/Form";
import {HeaderStyle, HeaderTitle} from "./Header.styles";

export const Header = () => {
    return (
      <HeaderStyle className="header">
        <HeaderTitle>todos</HeaderTitle>
        <Form />
      </HeaderStyle>
    );
}
