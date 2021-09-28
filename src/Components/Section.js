import React from "react";

const Section = ({children, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
};

export default Section;