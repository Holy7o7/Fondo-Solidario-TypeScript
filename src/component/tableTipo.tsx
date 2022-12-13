import React, { Component, Fragment, useState} from "react";
import Select from "react-select";

const options = [
    {value: "barra",label: "Barras"},
    {value: "linea",label: "Lineas"}
];

export class TablaTipo extends Component {
    constructor(props: any){
        super(props);
    }
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
                />

            </Fragment>
        )

    };
    
};
export default TablaTipo;