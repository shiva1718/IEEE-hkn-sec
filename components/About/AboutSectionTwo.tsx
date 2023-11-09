import Image from "next/image";
// bg-[url('/images/hero/landing-page.jpg')] bg-cover

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/SUMMA-black.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/SUMMA-white.png"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {/*Bug free code*/}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sri Sairam Engineering College, Chennai was established in the year 1995 by MJF. Ln. LeoMuthu,
                  Chairman of Sapthagiri Educational Trust. Our Institution is an Autonomous Institution, affiliated to
                  Anna University and approved by AICTE, New Delhi. Besides, the institution has been accredited by
                  National Accreditation and Assessment Council (NAAC) with &quot;A+&quot; Grade and our Institution has been
                  upgraded to ISO 9001:2015 Certification. Our Institution has secured a place in the 151-200 Rank Band
                  in the National Institutional Ranking Framework 2023 (NIRF), prestigious ranking released by the
                  MHRD, Government of India. All the eligible programs of the institution have been accredited by the
                  National Board of Accreditation, confirming our endeavor of offering quality education and bearing
                  testimony to the highest standards.
                </p>
              </div>
              {/*<div className="mb-9">*/}
              {/*  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">*/}
              {/*    Premier support*/}
              {/*  </h3>*/}
              {/*  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">*/}
              {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
              {/*    do eiusmod tempor incididunt.*/}
              {/*  </p>*/}
              {/*</div>*/}
              {/*<div className="mb-1">*/}
              {/*  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">*/}
              {/*    Next.js*/}
              {/*  </h3>*/}
              {/*  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">*/}
              {/*    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt*/}
              {/*    consectetur adipiscing elit setim.*/}
              {/*  </p>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
