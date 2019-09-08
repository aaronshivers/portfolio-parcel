import styled from 'styled-components'

export const PageHeaderTextContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    margin-bottom: 1rem;
  }
`
