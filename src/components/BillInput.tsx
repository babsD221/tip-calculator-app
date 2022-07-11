import  React from "react";

class BillInput extends React.Component {
    render() {
        return(
            <div>
                <div className="flex flex-row">
                    <label htmlFor="bill">Bill</label>
                    <input type="text" name="bill" id="bill" />
                </div>
            </div>
        )

    }
}