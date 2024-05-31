import * as React from "react";
import styled from "styled-components";
const companies = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/76f11830c0ce08869efa6cf3cfad4eba4ae4750afb527ffe61d62ac698c19ec8?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 1 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/49b1b3f5ff3170ababe97315450707971409319e34d94b19771bb766e243ab2b?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 2 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9921176e0dcddf1daf2222bf474965a81848d6356bcd4da4b79e7ed27e0b6f96?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 3 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7216c6ff4c6635d0ad885da506d337905f02ac5a0c039c2d44f43c852f1a7e0f?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 4 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c47ea616bbb06ef5a609c0df633fa619e20c37372ec696ef630fd1c2e4c177e?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 5 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2919a9b4808e33298b1ffcda9a22e7ff151917d709ffdbd0ee1aecf224a79e7a?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 6 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/709992c1915f83358df6e246fea8ea73ca99a49b7adb15834d6a97344e53d9a4?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 7 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b98cc134e1319d39fc020004e13c96302a497034025eacd83e0ac8f26d7e306?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 8 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c647c877065198714a813a1393d128528c96edace2282950df2a9b600a5797?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 9 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/30302b4ccc44a735186012ce229a4adc772c803e6b3121c82274e812dff48eb5?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 10 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9588ab4097d58c00a09146554ec5dc4f0e671f6268895c70bb1e072512135498?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 11 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0140d5fb3ae978f0fb03c1a0410145c149cd4c871d2b579d2e279676b764a868?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 12 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/967e91e3c13edf921beabb89b2436359c92e6b80a47a59c0848e4445c3d54ae7?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 13 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/01c332f3c44244c195f5ee47730cd1455da4eac50cba73ec0b8a0dc8f299b8e6?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 14 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/65d59a6ac0b7d96406724be55b922d64baa3824793ec3765576fe11ad474cf73?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 15 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4cab38bf65b0bdcd70ce1f22d50ba035396d13e0c15c4f959665448f8d41f7b0?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 16 logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/224bc8044db78c46980375611a0083addece6046855afb7562b52fc2a3447801?apiKey=3253b8c03e174b5d8b62115417961652&",
    alt: "Company 17 logo",
  },
];
function CompanyLogo({ src, alt }) {
  return <CompanyLogoImage src={src} alt={alt} />;
}
function CompanySection() {
  return (
    <CompanySectionContainer>
      <CompanySectionTitle>
        MNC's Offering 1 Month Virtual Project Experience
      </CompanySectionTitle>
      <CompanyLogoGrid>
        <CompanyLogoRow>
          {companies.slice(0, 9).map((company) => (
            <CompanyLogo key={company.src} {...company} />
          ))}
        </CompanyLogoRow>
        <CompanyLogoRow>
          {companies.slice(9).map((company) => (
            <CompanyLogo key={company.src} {...company} />
          ))}
        </CompanyLogoRow>
      </CompanyLogoGrid>
    </CompanySectionContainer>
  );
}
const CompanySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: center;
`;
const CompanySectionTitle = styled.h2`
  width: 100%;
  color: var(--Gray-900, #1d2026);
  font: 600 24px/133% Inter, sans-serif;
  letter-spacing: -0.24px;
  text-align: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const CompanyLogoGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background-color: var(--Color-White-100, #fff);
  border: 1px solid rgba(187, 187, 187, 1);
  border-radius: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const CompanyLogoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 20px;
  padding: 0 28px;
  &:last-child {
    margin-top: 36px;
  }
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;
const CompanyLogoImage = styled.img`
  width: 80px;
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
`;
export default CompanySection;
