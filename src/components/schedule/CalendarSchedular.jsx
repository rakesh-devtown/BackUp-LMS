import React, { useEffect, useState } from "react";
import { Drawer, Button, Card, notification, Calendar, Flex } from "antd";
import {
  StyledCalendar,
  StyledCalendarCard,
} from "../../styles/calendar.styles";
import { serviceGet } from "../../utils/api";
import { setHeader } from "../../utils/header";
import { formatDate } from "../courses/CourseOverview";
import MeetingModal from "../Meetings/MeetingModal";
import useAuthStore from "../../store/authStore";
import useBatchStore from "../../store/batchStore";
import Title from "antd/es/typography/Title";
import useLoadingStore from "../../store/loadingStore";

const CalendarScheduler = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (value) => {
    setSelectedDate(value["$d"]);

    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setSelectedDate(null);
    setSelectedEvent(null);
    setDrawerVisible(false);
  };

  const dateCellRender = (value) => {
    const date = value.format("YYYY-MM-DD");
    const eventsForDate = events.filter((event) => event.date === date);

    return (
      <div className="date-cell">
        {eventsForDate.length > 0 && (
          <div className="event-title">{eventsForDate[0].topic}</div>
        )}
      </div>
    );
  };
  const setCurrentBatchId = useBatchStore((state) => state.setCurrentBatchId);
  const [sessions, setSessions] = useState([]);
  const [open, setopen] = useState(false);
  const [meetingData, setMeetingData] = useState({});
  const setLoading = useLoadingStore((state) => state.setLoading);
  const [openMeetingConfirmation, setOpenMeetingConfirmation] = useState(false);
  const getSessions = async () => {
    try {
      // dispatch(setLoadingTrue());

      const st = new Date(selectedDate + selectedDate.getTimezoneOffset());
      const en = new Date(selectedDate + selectedDate.getTimezoneOffset());


      st.setHours(0,0,0) ;
      en.setHours(23,59,59);
      setLoading(true);
      setHeader("auth", `bearer ${localStorage.getItem("token")}`);
      const res = await serviceGet(
        `student/student-api/v1/upcommingSessions?start=${st.toISOString()}&end=${en.toISOString()}`
      );
      const {
        data: { upcommingSessions },
      } = res;
      setSessions(upcommingSessions);
      // dispatch(setLoadingFalse());
    } catch (error) {
      // notification.error({
      //   message: "Error",
      //   description: error.message,
      // });
      // dispatch(setLoadingFalse());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSessions();
  }, [selectedDate]);
  return (
    <Flex>
      <StyledCalendar
      
        onSelect={handleDateClick}
        dateCellRender={dateCellRender}
      />

      <Drawer
        title={`Classes for ${selectedDate ? formatDate(selectedDate)[1] : ""}`}
        width={400}
        placement="right"
        onClose={handleCloseDrawer}
        visible={drawerVisible}
      >
        {sessions && sessions.length > 0 ? (
          sessions.map((session, i) => {
            const dt = new Date(
              new Date(session?.date).toLocaleString("en-US", {
                timeZone: "Asia/Calcutta",
              })
            );
            const dt_e = new Date(
              new Date(session?.date).toLocaleString("en-US", {
                timeZone: "Asia/Calcutta",
              })
            );
            dt_e.setHours(dt.getHours() + 2);
            return (
              <>
                <MeetingModal
                  meetingNumber={meetingData?.meetingNumber}
                  name={meetingData?.topic}
                  date={meetingData?.startTime}
                  platform={meetingData?.platform}
                  url={meetingData?.url}
                  open={openMeetingConfirmation}
                  setOpen={setOpenMeetingConfirmation}
                />
                <StyledCalendarCard key={i} title={`Title: ${session.topic}`}>
                
                  <p>Description: {session.description}</p>
                  {/* <p>Instructor: {session.instructor}</p> */}
                  <Button
                    onClick={() => {
                      setCurrentBatchId(session?.batch._id);

                      // setOpenMeetingConfirmation(true);
                      //       setMeetingData({
                      //         meetingNumber:
                      //           session?.meeting[0]?.meetingNumber,
                      //         name: session?.topic,
                      //         date: session?.meeting[0]?.startTime,
                      //         platform: session?.meeting[0]?.platform,
                      //         url: session?.meeting[0]?.joinUrl,
                      //   });

                      if (new Date() < dt) {
                        notification.error({
                          message: "Meeting has not started yet",
                        });
                        // toast.error('Meeting has not started yet');
                      } else if (new Date() >= dt && new Date() <= dt_e) {
                        setCurrentBatchId(session?.batch._id);

                        openMeetingConfirmation(true);
                        setMeetingData({
                          meetingNumber: session?.meeting[0]?.meetingNumber,
                          name: session?.topic,
                          date: session?.meeting[0]?.startTime,
                          platform: session?.meeting[0]?.platform,
                          url: session?.meeting[0]?.joinUrl,
                        });
                      } else
                        notification.error({ message: "Meeting has ended" });
                    }}
                    type="primary"
                  >
                    Join
                  </Button>
                </StyledCalendarCard>
              </>
            );
          })
        ) : (
          <div>
            <Title>No classes scheduled for this day</Title>
          </div>
        )}
      </Drawer>
    </Flex>
  );
};

export default CalendarScheduler;
