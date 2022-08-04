import { graphql } from "gatsby";
import React from "react";
import { ProjectDetail } from "@components";

export default function SensesPage({ data: { contentfulProjectPage: data } }) {
  return <ProjectDetail data={data} />;
}

export const query = graphql`
  query SensesPageQuery {
    contentfulProjectPage(slug: { eq: "senses" }) {
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
