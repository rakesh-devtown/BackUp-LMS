import React from 'react'
import LayoutAlumCards from '../components/Cards/LayoutAlumCard'
import useWindowSize from '../hooks/useWindowSize';

function LayoutAlumni() {
    const { width } = useWindowSize();
    return (
        <div
            style={{
                width: "100%",
                marginTop: "20px",
            }}
        >
            <h1

                style={{
                    fontSize: width < 900 ? "40px" : "60px",
                }}
            >
                Our Alumni & their Success Stories
            </h1>
            <div
                style={{
                    backgroundColor: "green",
                    display: "flex",
                    alignItems: "stretch",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >

            </div>
            <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "stretch",
                padding: width < 900 ? "0" : "0 20px",
                width: "100%",
                marginTop: "20px",

            }}>
                {
                    (width < 900 ? [1, 2, 3] : [1, 2, 3, 4, 5, 6, 7, 8]).map((item, index) => (
                        < LayoutAlumCards key={index} />
                    ))

                }

            </div>
        </div>
    )
}

export default LayoutAlumni