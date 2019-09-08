import styled from 'styled-components'

export const ProjectsSectionOuterContainer = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 'projects-header'
                       'projects-section';
`
export const ProjectsSectionInnerContainer = styled.div`
  grid-area: projects-section;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
