import styled from 'styled-components';

export const SectionMain = styled.section`
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
`;

export const ButtonToggleAll = styled.input`
    width: 1px;
    height: 1px;
    border: none;
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;

    @media screen and (-webkit-min-device-pixel-ratio:0) {
      background: none;
    }
`;
export const LabelToggleAll = styled.label`
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);

    &::before {
      content: "❯";
      font-size: 22px;
      color: #e6e6e6;
      padding: 10px 27px;
    }

    ${ButtonToggleAll}:checked + &::before {
       color: #0f0;
    }
`;

