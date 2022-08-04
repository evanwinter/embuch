import { graphql } from "gatsby";
import React from "react";
import { ProjectDetail } from "@components";

export default function CoalfirePage({
  data: { contentfulProjectPage: data },
}) {
  return <ProjectDetail data={data} />;
}

export const query = graphql`
  query CoalfirePageQuery {
    contentfulProjectPage(slug: { eq: "coalfire" }) {
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
