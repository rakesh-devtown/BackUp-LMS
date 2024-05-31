const customizeRequiredMark = (label, { required }) => (
    <>
        {label}
        {required ? <span style={{ color: "#1E6DE8" }}>*</span> : ""}
    </>
);

export default customizeRequiredMark;