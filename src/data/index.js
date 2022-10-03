import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const WORK_PROJECTS = [
  {
    title: "American Cancer",
    slug: "american-cancer",
    coverImage: () => (
      <StaticImage
        src="../images/work/american-cancer/ACS-Cover-Image.jpg"
        quality={100}
        alt=""
      />
    ),
  },
  {
    title: "HLK",
    slug: "hlk",
    coverImage: () => (
      <StaticImage src="../images/HLK.jpg" quality={100} alt="HLK" />
    ),
  },
  {
    title: "Audible",
    slug: "audible",
    coverImage: () => (
      <StaticImage src="../images/Audible.jpg" quality={100} alt="Audible" />
    ),
  },
  {
    title: "Ambetter X NASCAR",
    slug: "ambetter-nascar",
    coverImage: () => (
      <StaticImage
        src="../images/AMB.png"
        quality={100}
        alt="Ambetter X NASCAR"
      />
    ),
  },
  {
    title: "Medicaid",
    slug: "medicaid",
    coverImage: () => (
      <StaticImage src="../images/medicaid.jpg" quality={100} alt="Medicaid" />
    ),
  },
  {
    title: "Ulta",
    slug: "ulta",
    coverImage: () => (
      <StaticImage src="../images/ulta.jpg" quality={100} alt="Ulta" />
    ),
  },
];

export const FUN_PROJECTS = [
  {
    title: "T-Shirts",
    slug: "t-shirts",
    coverImage: () => (
      <StaticImage
        src="../images/fun/Page-Hero-Images.jpg"
        quality={100}
        alt="T-Shirts"
      />
    ),
  },
  {
    title: "Logos",
    slug: "logos",
    coverImage: () => (
      <StaticImage
        src="../images/fun/prettygood.jpg"
        quality={100}
        alt="Logos"
      />
    ),
  },
  {
    title: "Portraits",
    slug: "portaits",
    coverImage: () => (
      <StaticImage
        src="../images/fun/kittysleep.jpg"
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
        src="../images/fun/customtype.jpg"
        quality={100}
        alt="Custom Type"
      />
    ),
  },
];
