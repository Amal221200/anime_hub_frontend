/* eslint-disable react/prop-types */


const SectionLayout = ({ children, className }) => {
    return (
        <div className={`lg:max-w-[80vw] max-w-[90vw] mx-auto px-3 ${className ? className : ""}`}>
            {children}
        </div>
    );
}

export default SectionLayout;