import { graphql } from "gatsby";
import React from "react";
import { ProjectDetail } from "@components";

export default function FreshPicksPage({
  data: { contentfulProjectPage: data },
}) {
  return <ProjectDetail data={data} />;
}

export const query = graphql`
  query FreshPicksPageQuery {
    contentfulProjectPage(slug: { eq: "fresh-picks" }) {
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
