import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const WORK_PROJECTS = [
  {
    title: "American Cancer Society",
    slug: "american-cancer-society",
    coverImage: () => (
      <StaticImage
        src="../images/work/american-cancer/ACS-Cover.jpg"
        quality={100}
        alt=""
      />
    ),
  },
  {
    title: "HLK",
    slug: "hlk",
    coverImage: () => (
      <StaticImage
        src="../images/work/hlk/HLK-Cover.jpg"
        quality={100}
        alt="HLK"
      />
    ),
  },
  {
    title: "Audible",
    slug: "audible",
    coverImage: () => (
      <StaticImage
        src="../images/work/audible/Audible-Cover.jpg"
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
        src="../images/work/ambetter-nascar/AMB-Cover.jpg"
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
        src="../images/work/medicaid/Medicaid-Cover.jpg"
        quality={100}
        alt="Medicaid"
      />
    ),
  },
];

export const FUN_PROJECTS = [
  {
    title: "custom type",
    slug: "custom-type",
    coverImage: () => (
      <StaticImage
        src="../images/fun/Custom-Type-Cover.jpg"
        quality={100}
        alt="Custom Type"
      />
    ),
  },
  {
    title: "logos",
    slug: "logos",
    coverImage: () => (
      <StaticImage
        src="../images/fun/logos/Logos-Cover.jpg"
        quality={100}
        alt="Logos"
      />
    ),
  },
  {
    title: "portaits",
    slug: "portraits",
    coverImage: () => (
      <StaticImage
        src="../images/fun/Portraits-Cover.jpg"
        quality={100}
        alt="Portraits"
      />
    ),
  },
  {
    title: "t-shirts",
    slug: "t-shirts",
    coverImage: () => (
      <StaticImage
        src="../images/fun/T-Shirts-Cover.jpg"
        quality={100}
        alt="T-Shirts"
      />
    ),
  },
];
