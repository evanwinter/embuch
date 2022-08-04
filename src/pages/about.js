import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

const AboutPage = ({ data }) => {
  const image = data.allContentfulAboutPage.edges[0].node.image;
  return (
    <div>
      <AboutImageWrapper>
        <GatsbyImage image={getImage(image)} />
      </AboutImageWrapper>
      <AboutTextWrapper>
        <h2>{data.allContentfulAboutPage.edges[0].node.title}</h2>
        <ReactMarkdown>
          {data.allContentfulAboutPage.edges[0].node.text.text}
        </ReactMarkdown>
      </AboutTextWrapper>
    </div>
  );
};

const AboutLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: min(5vw, 3rem);
  margin-inline: min(5vw, 3rem);
`;

const AboutTextWrapper = styled.div`
  flex: 1;
`;

const AboutImageWrapper = styled.div`
  width: 400px;
`;

export const query = graphql`
  query AboutPageQuery {
    allContentfulAboutPage {
      edges {
        node {
          title
          text {
            text
          }
          image {
            title
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default AboutPage;
