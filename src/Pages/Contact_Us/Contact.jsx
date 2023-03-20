import React from "react";

const Contact = () => {
    return (
        <div className="m-0 p-0 h-screen flex items-center justify-center">
            <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 p-6 sm:p-10 rounded-3xl bg-[#181818] backdrop-blur-sm backdrop-filter bg-opacity-50">
                <h1 className="text-center text-[#e8e5e5] text-3xl sm:text-5xl font-medium font-Lato my-6">
                    Get In Touch With Us
                </h1>
                <form>
                    <div className="my-3">
                        <input
                            type="text"
                            className="font-Lato w-full mt-2 p-4 outline-none border-2 border-[#41ffb7] rounded-2xl bg-inherit text-white placeholder:text-white placeholder:font-medium font-medium"
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="my-3">
                        <input
                            type="text"
                            className="font-Lato w-full mt-2 p-4 outline-none border-2 border-[#41ffb7] rounded-2xl bg-inherit text-white placeholder:text-white placeholder:font-medium font-medium"
                            placeholder="Email Address"
                        />
                    </div>

                    <div className="my-3">
                        <textarea
                            className="font-Lato h-36 w-full mt-2 p-4 outline-none border-2 border-[#41ffb7] rounded-2xl bg-inherit text-white placeholder:text-white placeholder:font-medium font-medium"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <button className="w-44 sm:w-50 p-3 mt-2 text-lg text-[#41ffb7] rounded-lg float-right outline-none border-2 border-[#41ffb7] font-bold tracking-wide transition-all hover:bg-[#41ffb7] hover:text-[#181818]">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;