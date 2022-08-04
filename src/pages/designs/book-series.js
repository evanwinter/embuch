import { graphql } from "gatsby";
import React from "react";
import { ProjectDetail } from "@components";

export default function BookSeriesPage({
  data: { contentfulProjectPage: data },
}) {
  return <ProjectDetail data={data} />;
}

export const query = graphql`
  query BookSeriesPageQuery {
    contentfulProjectPage(slug: { eq: "book-series" }) {
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
