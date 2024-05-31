import React, { useState } from "react";
import { Button, Modal } from "antd";
import CourseDescriptionModalCard from "../Cards/CourseDescriptionModalCars";
import ModalTabs from "../ui/ModalTabs";
import CourseLearningContent from "../Cards/CourseLearningContent";
import WhatIsThisCourseFor from "../Cards/WhatIsThisCoursefor";
import CourseRequirements from "../Cards/CourseRequirements";
import CourseCertification from "../Cards/CourseCertification";
import CourseInstructorCard from "../Cards/CourseInstructorCard";
import MncCard from "../Cards/MncCard";
import useWindowSize from "../../hooks/useWindowSize";
import useLmsUiStore from "../../store/lmsUiStore";
const CourseDescriptionModal = () => {
  const { width } = useWindowSize();
  const isCourseDescriptionModalOpen = useLmsUiStore(state => state.isCourseDescriptionModalOpen);
  const setCourseDescriptionModalOpen = useLmsUiStore(state => state.setCourseDescriptionModalOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setCourseDescriptionModalOpen(false);
  };
  const handleCancel = () => {
    setCourseDescriptionModalOpen(false);
  };
  return (
    <div>
      <Modal
        style={{}}
        width={width < 900 ? "96%" : "70%"}
        open={isCourseDescriptionModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CourseDescriptionModalCard />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <ModalTabs />
        </div>

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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sint
              totam laborum accusantium saepe quod, ipsum fugit itaque dolorem
              sed obcaecati iusto? Dolor, modi perferendis accusantium
              reprehenderit eum obcaecati facere.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, quaerat ex, impedit animi incidunt molestiae, sed vitae
              voluptatem doloremque ipsa quae repellat pariatur rem ad
              voluptatibus nihil architecto deleniti blanditiis! Facilis neque,
              soluta aperiam placeat odio, a sit dolore veritatis corrupti
              dignissimos nulla porro debitis accusamus earum, eligendi nihil
              aspernatur cupiditate voluptate? At ullam commodi odio unde
              tempora, nostrum cumque. Dolores id modi quasi dicta? Alias,
              deleniti earum eaque, quaerat minima suscipit inventore modi
              officiis nam eligendi consectetur fugit. Ea id sint minus quod
              sequi, blanditiis recusandae in molestiae placeat? Consequatur
              nesciunt quos corporis quod nisi aut doloribus ipsum, id
              cupiditate, rem reprehenderit consectetur voluptate dolore labore!
              Voluptate obcaecati nulla ex reprehenderit architecto illo
              molestias fugit, consectetur corporis asperiores iste.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              quibusdam consequuntur voluptatem necessitatibus repudiandae vel
              aliquam distinctio nesciunt laboriosam exercitationem, cumque
              beatae recusandae, id cum! Itaque sint est ipsum consequuntur!
              Animi aliquid vel officiis recusandae, aperiam culpa ipsa, rem
              deserunt omnis quidem molestiae! Eos odit debitis harum unde quod
              repellendus magnam nisi, excepturi aut, laboriosam officiis qui
              adipisci, odio id! Maiores nihil omnis minus magnam at numquam
              autem ab temporibus reprehenderit provident vero maxime architecto
              exercitationem, quas perspiciatis. Quaerat unde eos similique,
              sint nesciunt voluptate laboriosam illum libero repellat
              exercitationem.
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
          <div>
            <MncCard />
          </div>
          <div>
            <CourseInstructorCard />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CourseDescriptionModal;
