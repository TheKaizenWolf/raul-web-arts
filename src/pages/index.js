import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const StyledHeroContainer = styled.div.attrs({
  className: '',
})`
  height: 70vh;
  overflow: hidden;
`;
const StyledRow = styled.div.attrs({
  className: 'bg-purple',
})`
  @media (min-width: 60rem) {
    height: 35vh;
  }
`;

const StyledRowHeading = styled.h1.attrs({
  className: 'f3 purple',
})`
  font-family: 'Proxima Nova Black';
`;
const StyledHeading = styled.h1.attrs({
  className: 'f1 fw8',
})`
  font-family: 'Proxima Nova Black';
`;

const HeroImageContainer = styled(Link).attrs({})`
  width: 500px;
  margin: 0 auto;
  left: 650px;

  @media (max-width: 60rem) {
    display: none;
  }
`;

const ProjectImage = styled.img.attrs({
  className: 'shadow-3 grow',
})`
  width: 35rem;
`;
const Index = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "indexhero.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <StyledHeroContainer className="relative flex flex-column justify-center tc">
        <StyledHeading className="w-40-l animated bounceInLeft w-100 ph2">
          I Am A Full-Stack Developer
        </StyledHeading>
        <div className="flex w-40-l justify-center animated bounceInLeft ">
          <FaLinkedinIn className="f2 pr3" />
          <GoMarkGithub className="f2" />
        </div>
        <HeroImageContainer className="absolute animated bounceInRight ">
          <Image fluid={image.sharp.fluid} />
        </HeroImageContainer>
      </StyledHeroContainer>
      <StyledRow className="flex flex-row-l flex-column animated fadeIn delay-1s ">
        <div className="w-33-l bg-white ma4 pa4 tc pt2 ba b--black bw2">
          <StyledRowHeading>Development</StyledRowHeading>
          <p className="f4 fw5">
            Your project will have a great attention to detail, front-end and
            back-end.
          </p>
        </div>
        <div className="w-33-l bg-white ma4 pa4 tc pt2 ba b--black bw2">
          <StyledRowHeading>Communication</StyledRowHeading>
          <p className="f4 fw5">
            We will use Trello and Slack in order to communicate effectively.
          </p>
        </div>
        <div className="w-33-l bg-white ma4 pa4 tc pt2 ba b--black bw2">
          <StyledRowHeading>Pricing</StyledRowHeading>
          <p className="f4 fw5">
            Need flexible pricing? Hourly or fixed prices are accepted.
          </p>
        </div>
      </StyledRow>
      <div className="tc pt2">
        <StyledHeading className="tc pv3 white bg-purple mh7-l">
          My Projects
        </StyledHeading>
        <div>
          <StyledHeading className="dark-pink">
            Face-Recognition-App
          </StyledHeading>
          <ProjectImage src="img/rafits.png" />
        </div>
        <div>
          <div>
            <StyledHeading className="dark-pink">Rafits</StyledHeading>
            <ProjectImage src="img/face.png" />
          </div>
          <StyledHeading className="dark-pink">Roboamigos</StyledHeading>
          <ProjectImage src="img/robo.png" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
