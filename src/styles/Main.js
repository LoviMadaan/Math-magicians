import styled from "styled-components";

export const Container = styled.div`
display: grid;
justify-content: center;
align-content: center;
width: 400px;
margin: 40px auto;
grid-template-columns: repeat(4, 100px);
grid-template-rows: minmax(120px, auto) repeat(5, 100px);
box-shadow: 2px 2px 10px #333;
border-radius: 10px;
`;

export const Screen = styled.div`
grid-column: 1/-1;
background-color: rgba(60,63,67,0.75);
justify-content: space-around;
flex-direction: column;
padding: 10px;
word-wrap: break-word;
break-word: break-all;
text-align: right;
border-top-left-radius: 11px;
border-top-right-radius: 11px;
`;

export const Prevoius = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border: 1px outset white;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan} ;`;
    }
  }};
  ${({ operations }) => operations && `background-color:gray;`};
  ${({ control }) => control && `background-color:skyBlue;`};
  ${({ equals }) =>
    equals && `background-color:pink;border-bottom-right-radius:11px;`};
  ${({ decimal }) =>
    decimal && `background-color:skyBlue;border-bottom-left-radius:11px;`};
`;