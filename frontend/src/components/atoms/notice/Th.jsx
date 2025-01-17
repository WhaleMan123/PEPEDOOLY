import styled from "styled-components";

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #6cca6f;
  width: ${(props) => props.width || "auto"};
`;

export default Th;
