import {React, useState} from 'react'
import styled from 'styled-components';
import { primaryColor, primaryLightColor, ProjectsLinks} from './Common';
import AbThumbnail from '../assets/img/ab-distribution.webp'
import MutezaThumbnail from '../assets/img/muteza.webp'
import OukhtyThumbnail from '../assets/img/oukhty.webp'
import FolioThumbnail from '../assets/img/folio.webp'
import FlowerThumbnail from '../assets/img/flower.webp'


const ContactContainer = styled.section`
  height: 100vh;
  width: calc(100% - 100px);
  background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  display: flex;
  /* overflow: hidden; */

  @media (min-width: 1400px) {
    width: calc(100% - 120px);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`



const ContainerLeft = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerRight = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Content = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
`
const Ul = styled.ul`
  height: auto;
  width: auto;
  overflow-y: scroll;
  max-height: 800px;
  padding-right: 5rem;

  /* ::-webkit-scrollbar {
  display: none;
  } */
`
const Li = styled.li`
  margin-bottom: 5rem;
  padding-left: 2rem;
`




const Image = styled.img`
  height: auto;
  width: 90%;
  transition: all 0.2s ease-in;
  /* opacity: ${props => props.isHover === true ? 1 : 0}; */
  /* z-index: ${props => props.isHover === true ? 1 : -1}; */
`
// const Svg = styled.svg`
//   height: 30%;
//   width: auto;
// `



function Projects(lightMode) {

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const onHover2 = () => {
    setHover2(!hover2);
  };
  const onHover3 = () => {
    setHover3(!hover3);
  };
  const onHover4 = () => {
    setHover4(!hover4);
  };
  const onHover5 = () => {
    setHover5(!hover5);
  };


  return (
    <ContactContainer>

      <ContainerLeft>

        <Ul>
          <Li onMouseEnter={onHover} onMouseLeave={onHover}>
            <ProjectsLinks href='#' >
              Oukhty Shop
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover2} onMouseLeave={onHover2}>
            <ProjectsLinks href='https://www.ab-distribution.re' >
              Ab Distribution
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover3} onMouseLeave={onHover3}>
            <ProjectsLinks href='https://www.tonibusatta.fr' >
              Porfolio V0
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover4} onMouseLeave={onHover4}>
            <ProjectsLinks href='https://tonii0.github.io/Muteza/' >
              Muteza
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover5} onMouseLeave={onHover5}>
            <ProjectsLinks href='https://flytzwoo.github.io/Aliyahmarinabfleurs/' >
              Flower Shop
            </ProjectsLinks>
          </Li>

          <Li onMouseEnter={onHover} onMouseLeave={onHover}>
            <ProjectsLinks href='#' >
              Oukhty Shop
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover2} onMouseLeave={onHover2}>
            <ProjectsLinks href='https://www.ab-distribution.re' >
              Ab Distribution
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover3} onMouseLeave={onHover3}>
            <ProjectsLinks href='https://www.tonibusatta.fr' >
              Porfolio V0
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover4} onMouseLeave={onHover4}>
            <ProjectsLinks href='https://tonii0.github.io/Muteza/' >
              Muteza
            </ProjectsLinks>
          </Li>
          <Li onMouseEnter={onHover5} onMouseLeave={onHover5}>
            <ProjectsLinks href='https://flytzwoo.github.io/Aliyahmarinabfleurs/' >
              Flower Shop
            </ProjectsLinks>
          </Li>
          
        </Ul>

        {/* <Svg width="16" height="180" viewBox="0 0 16 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.2929 179.707C7.68342 180.098 8.31658 180.098 8.70711 179.707L15.0711 173.343C15.4616 172.953 15.4616 172.319 15.0711 171.929C14.6805 171.538 14.0474 171.538 13.6569 171.929L8 177.586L2.34315 171.929C1.95262 171.538 1.31946 171.538 0.928934 171.929C0.53841 172.319 0.53841 172.953 0.928934 173.343L7.2929 179.707ZM7 130L7 179L9 179L9 130L7 130Z" fill="#FFEDCB"/>
          <path d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 50L9 1H7L7 50H9Z" fill="#FFEDCB"/>
          <path d="M10.4844 107.54C10.252 107.54 10.0469 107.576 9.86914 107.649C9.68685 107.718 9.52279 107.841 9.37695 108.019C9.23112 108.192 9.09212 108.433 8.95996 108.743C8.8278 109.049 8.69336 109.436 8.55664 109.905C8.41081 110.397 8.24902 110.842 8.07129 111.238C7.889 111.635 7.68164 111.974 7.44922 112.257C7.2168 112.539 6.9502 112.756 6.64941 112.906C6.34863 113.057 6.00456 113.132 5.61719 113.132C5.22982 113.132 4.87207 113.052 4.54395 112.893C4.21582 112.733 3.93099 112.505 3.68945 112.209C3.44336 111.908 3.25195 111.55 3.11523 111.136C2.97852 110.721 2.91016 110.258 2.91016 109.748C2.91016 109.001 3.05371 108.367 3.34082 107.848C3.62337 107.324 3.99479 106.925 4.45508 106.651C4.91081 106.378 5.39844 106.241 5.91797 106.241V107.554C5.54427 107.554 5.21387 107.633 4.92676 107.793C4.63509 107.952 4.40723 108.194 4.24316 108.518C4.07454 108.841 3.99023 109.251 3.99023 109.748C3.99023 110.217 4.06087 110.605 4.20215 110.91C4.34342 111.215 4.53483 111.443 4.77637 111.594C5.0179 111.74 5.29362 111.812 5.60352 111.812C5.81315 111.812 6.00456 111.769 6.17773 111.683C6.34635 111.591 6.50358 111.452 6.64941 111.266C6.79525 111.074 6.92969 110.833 7.05273 110.541C7.17578 110.245 7.29427 109.892 7.4082 109.481C7.56771 108.916 7.74544 108.429 7.94141 108.019C8.13737 107.608 8.3584 107.271 8.60449 107.007C8.84603 106.738 9.12174 106.54 9.43164 106.412C9.73698 106.28 10.0833 106.214 10.4707 106.214C10.8763 106.214 11.2432 106.296 11.5713 106.46C11.8994 106.624 12.1797 106.859 12.4121 107.164C12.6445 107.469 12.8245 107.836 12.9521 108.265C13.0752 108.688 13.1367 109.162 13.1367 109.687C13.1367 110.147 13.0729 110.6 12.9453 111.047C12.8177 111.489 12.6263 111.892 12.3711 112.257C12.1159 112.617 11.8014 112.906 11.4277 113.125C11.0495 113.339 10.612 113.446 10.1152 113.446V112.134C10.457 112.134 10.751 112.068 10.9971 111.936C11.2386 111.803 11.4391 111.623 11.5986 111.396C11.7581 111.163 11.8766 110.901 11.9541 110.609C12.027 110.313 12.0635 110.006 12.0635 109.687C12.0635 109.226 11.9997 108.837 11.8721 108.518C11.7445 108.199 11.5622 107.957 11.3252 107.793C11.0882 107.624 10.8079 107.54 10.4844 107.54ZM9.83496 98.5234V97.2109C10.4639 97.2793 11.0267 97.4593 11.5234 97.751C12.0202 98.0426 12.4144 98.4551 12.7061 98.9883C12.9932 99.5215 13.1367 100.187 13.1367 100.984C13.1367 101.568 13.0273 102.099 12.8086 102.577C12.5898 103.051 12.2799 103.459 11.8789 103.801C11.4733 104.143 10.988 104.407 10.4229 104.594C9.85319 104.776 9.21973 104.867 8.52246 104.867H7.53125C6.83398 104.867 6.2028 104.776 5.6377 104.594C5.06803 104.407 4.5804 104.14 4.1748 103.794C3.76921 103.443 3.45703 103.021 3.23828 102.529C3.01953 102.037 2.91016 101.483 2.91016 100.868C2.91016 100.116 3.05143 99.4805 3.33398 98.9609C3.61654 98.4414 4.00846 98.0381 4.50977 97.751C5.00651 97.4593 5.58301 97.2793 6.23926 97.2109V98.5234C5.77441 98.5872 5.37565 98.7057 5.04297 98.8789C4.70573 99.0521 4.44596 99.2982 4.26367 99.6172C4.08138 99.9362 3.99023 100.353 3.99023 100.868C3.99023 101.31 4.07454 101.7 4.24316 102.037C4.41178 102.37 4.65104 102.65 4.96094 102.878C5.27083 103.101 5.64225 103.27 6.0752 103.384C6.50814 103.498 6.98893 103.555 7.51758 103.555H8.52246C9.01009 103.555 9.4681 103.505 9.89648 103.404C10.3249 103.299 10.7008 103.142 11.0244 102.933C11.348 102.723 11.6032 102.456 11.79 102.133C11.9723 101.809 12.0635 101.426 12.0635 100.984C12.0635 100.424 11.9746 99.9772 11.7969 99.6445C11.6191 99.3118 11.3639 99.0612 11.0312 98.8926C10.6986 98.7194 10.2998 98.5964 9.83496 98.5234ZM3.04687 95.4131V92.1182C3.04687 91.3708 3.16081 90.7396 3.38867 90.2246C3.61654 89.7051 3.95378 89.3109 4.40039 89.042C4.84245 88.7686 5.38704 88.6318 6.03418 88.6318C6.48991 88.6318 6.9069 88.7253 7.28516 88.9121C7.65885 89.0944 7.97786 89.3587 8.24219 89.7051C8.50195 90.0469 8.69564 90.457 8.82324 90.9355L8.9668 91.3047V94.4014L7.89355 94.415L7.89355 92.0771C7.89355 91.6032 7.81152 91.209 7.64746 90.8945C7.47884 90.5801 7.25326 90.3431 6.9707 90.1836C6.68815 90.0241 6.37598 89.9443 6.03418 89.9443C5.65137 89.9443 5.31641 90.0195 5.0293 90.1699C4.74219 90.3203 4.52116 90.5573 4.36621 90.8809C4.20671 91.1999 4.12695 91.6123 4.12695 92.1182L4.12695 94.0938H13V95.4131H3.04687ZM13 89.5957L8.48828 92.0156L8.48145 90.6416L12.918 88.1875H13V89.5957ZM7.70898 79.123H8.33789C9.08529 79.123 9.75521 79.2165 10.3477 79.4033C10.9401 79.5902 11.4437 79.859 11.8584 80.21C12.2731 80.5609 12.5898 80.9824 12.8086 81.4746C13.0273 81.9622 13.1367 82.5091 13.1367 83.1152C13.1367 83.7031 13.0273 84.2432 12.8086 84.7354C12.5898 85.223 12.2731 85.6468 11.8584 86.0068C11.4437 86.3623 10.9401 86.638 10.3477 86.834C9.75521 87.0299 9.08529 87.1279 8.33789 87.1279H7.70898C6.96159 87.1279 6.29395 87.0322 5.70605 86.8408C5.11361 86.6449 4.61003 86.3691 4.19531 86.0137C3.77604 85.6582 3.45703 85.2367 3.23828 84.749C3.01953 84.2568 2.91016 83.7168 2.91016 83.1289C2.91016 82.5228 3.01953 81.9759 3.23828 81.4883C3.45703 80.9961 3.77604 80.5745 4.19531 80.2236C4.61003 79.8682 5.11361 79.597 5.70605 79.4102C6.29395 79.2188 6.96159 79.123 7.70898 79.123ZM8.33789 80.4287H7.69531C7.10286 80.4287 6.57878 80.4902 6.12305 80.6133C5.66732 80.7318 5.28451 80.9072 4.97461 81.1396C4.66471 81.3721 4.43001 81.6569 4.27051 81.9941C4.111 82.3268 4.03125 82.7051 4.03125 83.1289C4.03125 83.5391 4.111 83.9105 4.27051 84.2432C4.43001 84.5713 4.66471 84.8538 4.97461 85.0908C5.28451 85.3232 5.66732 85.5033 6.12305 85.6309C6.57878 85.7585 7.10286 85.8223 7.69531 85.8223H8.33789C8.9349 85.8223 9.46354 85.7585 9.92383 85.6309C10.3796 85.5033 10.7646 85.321 11.0791 85.084C11.389 84.8424 11.6237 84.5576 11.7832 84.2295C11.9427 83.8968 12.0225 83.5254 12.0225 83.1152C12.0225 82.6868 11.9427 82.3063 11.7832 81.9736C11.6237 81.641 11.389 81.3607 11.0791 81.1328C10.7646 80.9004 10.3796 80.7249 9.92383 80.6064C9.46354 80.488 8.9349 80.4287 8.33789 80.4287ZM11.9268 71.1113H13L13 76.0879H11.9268L11.9268 71.1113ZM3.04687 75.8281H13V77.1475H3.04687L3.04687 75.8281ZM11.9268 63.5645H13V68.541H11.9268V63.5645ZM3.04687 68.2812H13V69.6006H3.04687V68.2812Z" fill="#FFEDCB"/>
        </Svg> */}

      </ContainerLeft>

      <ContainerRight>

        <Content>
          {/* <Image isHover={hover}
            src={OukhtyThumbnail}
          />
          <Image isHover={hover2}
            src={AbThumbnail}
          />
          <Image isHover={hover3}
            src={FolioThumbnail}
          />
          <Image isHover={hover4}
            src={MutezaThumbnail}
          />
          <Image isHover={hover5}
            src={FlowerThumbnail}
          /> */}

          
          {hover && <Image 
            src={OukhtyThumbnail}
          />}
          {hover2 && <Image 
            src={AbThumbnail}
          />}
          {hover3 && <Image 
            src={FolioThumbnail}
          />}
          {hover4 && <Image 
            src={MutezaThumbnail}
          />}
          {hover5 && <Image 
            src={FlowerThumbnail}
          />}

        </Content>

      </ContainerRight>

              
    </ContactContainer>
  )
}

export default Projects
