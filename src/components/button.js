import styled from "@emotion/styled"

const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
  color: ${props => (props.light ? "hsl(6,15%, 90%)" : "hsl(6, 5%, 25%)")};
  background-color: ${props =>
    props.primary ? "hsl(6, 83%, 45%)" : "transparent"};
  border: 4px solid
    ${props => (props.light ? "hsl(6, 15%, 90%)" : "hsl(6, 5%, 25%)")};
  padding: ${props => (props.large ? "0.75rem 1.5rem" : "0.25rem 0.75rem")};
  margin: 0.25rem;
  cursor: pointer;
  > a {
    text-decoration: none;
    color: unset;
  }

  &:hover,
  &:focus {
    background-color: ${props =>
      props.light ? "hsl(6,15%, 90%)" : "hsl(6, 15%, 10%)"};
    color: ${props => (props.light ? "hsl(6, 15%, 10%)" : "hsl(6,15%, 90%)")};
  }
`

export default Button
