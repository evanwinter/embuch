import React from "react";
import { getImage } from "gatsby-plugin-image";
import {
  PreviewItem,
  PreviewImage,
  PreviewLink,
  Title,
} from "./Preview.styled";

export default function Preview({ project, kind = "designs" }) {
  return (
    <PreviewItem>
      <Title>{project.title}</Title>
      <PreviewLink to={`/${kind}/${project.slug}`}>
        {typeof project.coverImage === "string" ? (
          <img src={project.coverImage} alt={project.title} loading="lazy" />
        ) : (
          <PreviewImage
            image={getImage(project.coverImage)}
            alt={project.title}
          />
        )}
      </PreviewLink>
    </PreviewItem>
  );
}
