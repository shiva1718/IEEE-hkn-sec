import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About IEEE HKN",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Where innovation meets humanity, IEEE pioneers technology, shaping a better future through excellence, collaboration, and global impact."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
