import  React from "react";


class TipCalculator extends React.Component {
    render() {
        return(
            <div className="absolute left-[20%] top-[25%] bg-white w-1/2 h-1/2 rounded-3xl">
                <div className="flex flex-row justify-between h-full w-full p-[5%]">
                    <div className="w-1/2 h-full flex flex-col justify-between">
                        <div>
                        <h3 >Bill</h3>
                        <input className="bg-[#F4FAFA]" type="text" />
                        </div>
                        <div className="">
                            <h3>Select Tip %</h3>
                            <div className="grid grid-cols-3  gap-1">
                                <div className="w-20 h-10 bg-[#00494D] rounded-md text-center m-0">
                                    <h3 className="text-white text-xl font-bold">5%</h3>
                                    </div>
                                <div className="w-20 h-10 bg-[#00494D] rounded-md text-center m-0">
                                    <h3 className="text-white text-xl font-bold">10%</h3> 
                                    </div>
                                <div className="w-20 h-10 bg-[#00494D] rounded-md text-center m-0">
                                <h3 className="text-white text-xl font-bold">15%</h3> 
                                    </div>
                                <div className="w-20 h-10 bg-[#00494D] rounded-md text-center m-0">
                                <h3 className="text-white text-xl font-bold">25%</h3> 
                                    </div>
                                <div className="w-20 h-10 bg-[#00494D] rounded-md text-center m-0">
                                <h3 className="text-white text-xl font-bold">50%</h3> 
                                    </div>
                                <div id="tip-custom" >
                                    <input type="text" className="w-20 h-10 bg-[#F4FAFA] rounded-md text-center m-0" placeholder="CUSTOM" />
                                </div>

                            </div>
                        </div>
                        <div className="num_people">
                            <label htmlFor="people">Number Of People</label> <br />
                            <span>
                                <input type="text" id="people" className="bg-[#F4FAFA]" name="people" />

                            </span>
                        </div>

                    </div>
                    <div className="h-full w-1/2 bg-[#00494D] rounded-3xl flex flex-col align-middle text-center  justify-around">
                        <div className="grid grid-cols-2 gap-x-56 gap-y-10 w-full">
                            <div className="flex flex-col justify-evenly ">
                                <h3 className="text-white font-bold text-center">Tip Amount</h3>
                                <p className="text-[#F4FAFA] text-xs">/  Person</p>
                            </div>
                            <h2  className="text-4xl text-[#26c0ab]">0</h2>
                            <div className="flex flex-col justify-evenly">
                                <h3 className="text-white font-bold text-center ">Total</h3>
                                <p  className="text-[#F4FAFA] text-xs">/  Person</p>
                            </div>
                            <h2  className="text-4xl text-[#26c0ab]">0</h2>

                        </div>
                        <button className="w-[80%] mx-[10%] h-[10%] rounded-md bg-[#26c0ab]">Resume</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default TipCalculator;