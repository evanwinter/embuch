import { graphql } from "gatsby";
import React from "react";
import { ProjectDetail } from "@components";

export default function NyxPage({
  data: { contentfulProjectPage: data },
}) {
  return <ProjectDetail data={data} />;
}

export const query = graphql`
  query NyxPageQuery {
    contentfulProjectPage(slug: { eq: "nyx" }) {
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
