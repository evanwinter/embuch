import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const WORK_PROJECTS = [
  {
    title: "American Cancer",
    slug: "american-cancer",
    coverImage: () => (
      <StaticImage src="../images/ACS-Cover.jpg" quality={100} alt="" />
    ),
  },
  {
    title: "HLK",
    slug: "hlk",
    coverImage: () => (
      <StaticImage src="../images/HLK-Cover.jpg" quality={100} alt="HLK" />
    ),
  },
  {
    title: "Audible",
    slug: "audible",
    coverImage: () => (
      <StaticImage
        src="../images/Audible-Cover.jpg"
        quality={100}
        alt="Audible"
      />
    ),
  },
  {
    title: "Ambetter X NASCAR",
    slug: "ambetter-nascar",
    coverImage: () => (
      <StaticImage
        src="../images/AMB-Cover.jpg"
        quality={100}
        alt="Ambetter X NASCAR"
      />
    ),
  },
  {
    title: "Medicaid",
    slug: "medicaid",
    coverImage: () => (
      <StaticImage
        src="../images/Medicaid-Cover.jpg"
        quality={100}
        alt="Medicaid"
      />
    ),
  },
];

export const FUN_PROJECTS = [
  {
    title: "T-Shirts",
    slug: "t-shirts",
    coverImage: () => (
      <StaticImage
        src="../images/T-Shirts-Cover.jpg"
        quality={100}
        alt="T-Shirts"
      />
    ),
  },
  {
    title: "Logos",
    slug: "logos",
    coverImage: () => (
      <StaticImage src="../images/Logos-Cover.jpg" quality={100} alt="Logos" />
    ),
  },
  {
    title: "Portraits",
    slug: "portaits",
    coverImage: () => (
      <StaticImage
        src="../images/Portraits-Cover.jpg"
        quality={100}
        alt="Portraits"
      />
    ),
  },
  {
    title: "Custom Type",
    slug: "custom-type",
    coverImage: () => (
      <StaticImage
        src="../images/Custom-Type-Cover.jpg"
        quality={100}
        alt="Custom Type"
      />
    ),
  },
];
