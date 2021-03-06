import styled from "styled-components";

export const Btn = styled.button`
  background: ${({ bigBtn, mediumBtn, transparent, deleteBtn }) =>
    bigBtn
      ? "#F3B63A"
      : mediumBtn
      ? "#F3B63A"
      : transparent
      ? "#fff"
      : deleteBtn
      ? "#FF3031"
      : "#F3B63A "};
  color: ${({ bigBtn, mediumBtn, transparent }) =>
    bigBtn ? "#fff" : mediumBtn ? "#fff" : transparent ? "#F3B63A" : "#fff "};
  padding: ${({ bigBtn, mediumBtn, transparent, logInBtn }) =>
    bigBtn
      ? "1.2rem 6rem"
      : mediumBtn
      ? "1rem 3rem"
      : logInBtn
      ? "1.2rem 9rem"
      : transparent
      ? "0.6rem 2.3rem "
      : "0.7rem 2.5rem "};
  border: ${({ transparent }) => (transparent ? "2px solid #F3B63A" : "none ")};
  outline: none;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-top: ${({ bigBtn, mediumBtn, logInBtn }) =>
    bigBtn ? "2rem" : logInBtn ? "2rem" : mediumBtn ? ".8rem" : " "};
  margin-left: ${({ smallMargin, largeMargin }) =>
    smallMargin ? ".1rem" : largeMargin ? "5rem" : ""};
  cursor: pointer;
  &:hover {
    color: #fff;
    background: ${({ deleteBtn }) => (deleteBtn ? "#E44236" : "#F3B63A")};
    
  }
  @media screen and (max-width: 768px) {
    margin-left: -0.1rem;
    width: 100%;
    text-decoration: none;
    /* flex-basis: 100%; */
    display: flex;
    justify-content: center;
    padding: 0.8rem 9rem;
  }
`;
