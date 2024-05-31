import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { serviceGet } from "../utils/api";
import { notification } from "antd";
import { setHeader } from "../utils/header";

const useProgramStore = create(
    devtools((set , get) => ({
        allBatches :[], 
        name : "",


        setName : (name) => { 
            
            set({ name : name});
        }, 
        getAllbatches :async ( ) => {
            try {
                
                setHeader("auth", `bearer ${localStorage.getItem("token")}`);

                const res = await serviceGet("student/student-api/v1/batch" , {}); 
                const {success,message, data: { batches } } = res ;
                if(success) {
                    set({allBatches : batches});
                    // notification.success({
                    //     message: "Batches fetched Successfully" ,
                        
                    //   });
                }
                else {
                    notification.error({
                        message: "Error",
                        description: message
                    });
                }

            } catch (error) {
                notification.error({
                    message: "Error",
                    description: error.message
                  });
            }
        }, 
        setBatches: ( {batches}) => {
            
            set({batches : batches });
        }

    }))

) 

export default useProgramStore;