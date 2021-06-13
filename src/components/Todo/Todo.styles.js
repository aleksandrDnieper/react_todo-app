import styled from "styled-components";

export const TodoItem =styled.li`
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;

    &:last-child {
      border-bottom: none;
    }
    &.editing {
      border-bottom: none;
      padding: 0;
    }
    &.editing:last-child {
      margin-bottom: -1px;
    }
`;

export const DivView = styled.div`
    ${TodoItem}.editing & {
      display: none;
    }
`;

export const InputToggle = styled.input`
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
    opacity: 0;

    @media screen and (-webkit-min-device-pixel-ratio:0) {
      background: none;
      height: 40px;
    }
`;

export const LabelToggle = styled.label`
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;

    ${InputToggle} + & {
      background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center left;
    }

    ${InputToggle}:checked + & {
      background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
    }

    ${TodoItem}:completed & {
      color: #d9d9d9;
      text-decoration: line-through;
    }
`;

export const TodoDeleteButton = styled.button`
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;

    &:hover {
        color: #af5b5e;
    }
    &::after {
        content: "×";
    }

    ${TodoItem}:hover & {
        display: block;
    }
`;

export const InputEdit = styled.input`
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: none;

    ${TodoItem}.editing & {
        display: block;
        width: 506px;
        padding: 12px 16px;
        margin: 0 0 0 43px;
    }
`;
