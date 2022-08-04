import { graphql } from "gatsby";
import React from "react";
import { ProjectDetail } from "@components";

export default function BopPage({ data: { contentfulProjectPage: data } }) {
  return <ProjectDetail data={data} />;
}

export const query = graphql`
  query BopPageQuery {
    contentfulProjectPage(slug: { eq: "bop" }) {
      title
      subtitle
      summary {
        summary
      }
      id
      images {
        gatsbyImageData
        title
      }
      pdf {
        gatsbyImageData
      }
      heroImage {
        gatsbyImageData
      }
    }
  }
`;
