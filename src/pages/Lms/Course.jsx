import React, { useEffect, useState } from "react";
import CourseCard from "../../components/Cards/CourseCard";
import { ArrowUpOutlined, StarFilled } from "@ant-design/icons";
import useWindowSize from "../../hooks/useWindowSize";
import CourseDescriptionModal from "../../components/Modals/CourseDescriptionModal";
import PageContentLayout from "../../layout/MobilePageContentLayout";

import useLmsUiStore from "../../store/lmsUiStore";
import BackButton from "../../components/ui/Buttons/BackButton";
import CourseLearningContent from "../../components/Cards/CourseLearningContent";
import WhatIsThisCourseFor from "../../components/Cards/WhatIsThisCoursefor";
import CourseRequirements from "../../components/Cards/CourseRequirements";
import CourseCertification from "../../components/Cards/CourseCertification";
import CourseInstructorCard from "../../components/Cards/CourseInstructorCard";
import CompanySection from "../../components/Cards/MncCard";
import CourseDescriptionModalCard from "../../components/Cards/CourseDescriptionModalCars";
import ModalTabs from "../../components/ui/ModalTabs";

function Courses() {
  const [isCourseDescriptionOpen, setIsCourseDescriptionOpen] = useState(false);

  const { width } = useWindowSize();
  const isCourseDescriptionModalOpen = useLmsUiStore(
    (state) => state.isCourseDescriptionModalOpen
  );
  const setCourseDescriptionModalOpen = useLmsUiStore(
    (state) => state.setCourseDescriptionModalOpen
  );
  useEffect(() => {
    if (width < 900) {
      setCourseDescriptionModalOpen(false);
    }
  }, [width]);
  return (
    <>
      {/* free Trial Page  */}
      {!isCourseDescriptionOpen ? (
        <PageContentLayout>
          <h1>Free Trial Courses</h1>
          <div
            onClick={() => {
              if (width < 900) {
                setIsCourseDescriptionOpen(true);
              }
              setCourseDescriptionModalOpen(true);
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              // marginTop: "20px",
            }}
          >
            <CourseCard />
            <CourseCard />
          </div>

          <div
            style={{
              backgroundColor: "#e1e8f3",
              width: "100%",
              padding: "20px",
              borderRadius: "20px",

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexDirection: "column",
                fontSize: "24px",
              }}
            >
              <h3>Enrolled Courses</h3>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "18px",
                }}
              >
                <StarFilled />
                No Course Enrolled
              </div>
            </div>
            <div>
              <ArrowUpOutlined
                style={{
                  transform: "rotate(45deg)",
                  fontSize: "30px",
                }}
              />
            </div>
          </div>
          {/* Modal Course Description   */}

          {width > 900 && <CourseDescriptionModal />}
        </PageContentLayout>
      ) : (
        <PageContentLayout>
          <BackButton />

          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <ModalTabs />
          </div>

          <CourseDescriptionModalCard />

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <h1>Description</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                sint totam laborum accusantium saepe quod, ipsum fugit itaque
                dolorem sed obcaecati iusto? Dolor, modi perferendis accusantium
                reprehenderit eum obcaecati facere.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, quaerat ex, impedit animi incidunt molestiae, sed
                vitae voluptatem doloremque ipsa quae repellat pariatur rem ad
                voluptatibus nihil architecto deleniti blanditiis! Facilis
                neque, soluta aperiam placeat odio, a sit dolore veritatis
                corrupti dignissimos nulla porro debitis accusamus earum,
                eligendi nihil aspernatur cupiditate voluptate? At ullam commodi
                odio unde tempora, nostrum cumque. Dolores id modi quasi dicta?
                Alias, deleniti earum eaque, quaerat minima suscipit inventore
                modi officiis nam eligendi consectetur fugit. Ea id sint minus
                quod sequi, blanditiis recusandae in molestiae placeat?
                Consequatur nesciunt quos corporis quod nisi aut doloribus
                ipsum, id cupiditate, rem reprehenderit consectetur voluptate
                dolore labore! Voluptate obcaecati nulla ex reprehenderit
                architecto illo molestias fugit, consectetur corporis asperiores
                iste.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                quibusdam consequuntur voluptatem necessitatibus repudiandae vel
                aliquam distinctio nesciunt laboriosam exercitationem, cumque
                beatae recusandae, id cum! Itaque sint est ipsum consequuntur!
                Animi aliquid vel officiis recusandae, aperiam culpa ipsa, rem
                deserunt omnis quidem molestiae! Eos odit debitis harum unde
                quod repellendus magnam nisi, excepturi aut, laboriosam officiis
                qui adipisci, odio id! Maiores nihil omnis minus magnam at
                numquam autem ab temporibus reprehenderit provident vero maxime
                architecto exercitationem, quas perspiciatis. Quaerat unde eos
                similique, sint nesciunt voluptate laboriosam illum libero
                repellat exercitationem.
              </p>
            </div>
            <div>
              <h1>What will you learn in this Course.</h1>
              <div>
                <CourseLearningContent />
              </div>
            </div>
            <div>
              <WhatIsThisCourseFor />
            </div>
            <div>
              <CourseRequirements />
            </div>
            <div>
              <CourseCertification />
            </div>
            {width > 900 && (
              <div>
                <CompanySection />
              </div>
            )}
            <div>
              <CourseInstructorCard />
            </div>
          </div>
        </PageContentLayout>
      )}
    </>
  );
}

export default Courses;
