import React, { Component, Fragment, useState} from "react";
import Select from "react-select";

const options = [
    {value: "trimestre",label: "Trimestre"},
    {value: "semestre",label: "Semestre"}
];

export class TablaPeriodo extends Component {




    handleChange = (selectedOption: any) => {
        this.setState({selectedOption});
        console.log("option selected:", selectedOption);
    };
    
    render(){
        return(
            <Fragment>
                <Select
                    className = "basic-single"
                    classNamePrefix = "select"
                    defaultValue={options[0]}
                    options = {options}
                    onChange = {this.handleChange}
                />

            </Fragment>
        )

    }
    
};
export default TablaPeriodo;