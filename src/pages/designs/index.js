import React from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import { Preview } from "@components";
import { Grid } from "@styles";

const DesignsPage = ({ data }) => {
  const projects =
    data.allContentfulPortfolioLandingPage.edges[0].node.projects;
  return (
    <div>
      <Grid gridGap="2rem 3rem" padding="2rem 3rem">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.35, delay: 0.1 * (i + 1) }}
          >
            <Preview key={project.title} project={project} kind="designs" />
          </motion.div>
        ))}
      </Grid>
    </div>
  );
};

export const query = graphql`
  query DesignsPageQuery {
    allContentfulPortfolioLandingPage {
      edges {
        node {
          title
          id
          projects {
            title
            id
            slug
            subtitle
            coverImage {
              title
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default DesignsPage;
