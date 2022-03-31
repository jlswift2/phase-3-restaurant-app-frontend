import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";

function PrintComponent() {
    let componentRef = useRef();

    return (
        <>
            <div>
                {/* button to trigger printing of target component */}
                <ReactToPrint
                trigger={() => <Button className="bg-white-500 p-2 mb-4 text-red-500">Print Menu</Button>}
                content={() => componentRef}
                />

                {/* component to be printed */}
                <div style={{ display: "none" }}>
                    <ComponentToPrint ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    );
}

export default PrintComponent