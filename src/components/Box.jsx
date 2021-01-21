import React, { useState } from 'react';


const Box = props => {
    // map box array
    const { color } = props;

    return (<div className="box" style={{ backgroundColor: color, 
                                    display: "inline-block", width: 20, 
                                    height: 20, marginRight: 10 }}>
            </div>)

};

export default Box;