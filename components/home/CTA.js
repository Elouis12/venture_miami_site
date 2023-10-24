import {BsArrowRight} from "react-icons/bs"
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function CTA(props) {

    useEffect(() => {

        Aos.init({duration: 200});
    }, []);

    const textColor = [
        "text-white",
        "text-black"
    ];
    const bgColor = [
        "bg-[#007afc]",
        "bg-white"
    ]
    return (

        <div className={"w-full m-auto pt-16"}>

            <div className={"w-[90%] m-auto xl:w-[85%]"}>
                {/*<div className={"m-auto bg-[#161A1D] rounded-[16px]"}>

                    <div className="font-bold flex flex-col justify-center items-center ml-auto mr-auto p-[80px]">
                        <h2 className="text-white text-[36px] text-center">
                            {props.content.title}
                        </h2>
                        <p className="text-[#9CA6B6] text-[18px] text-center">
                            {props.content.subtitle}
                        </p>
                        <div
                            className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start flex flex-col space-y-5 sm:flex-row sm:justify-stretch flex-1 sm:space-y-0">

                            {
                                props.content.buttons.map((button, index) => {

                                    return (
                                        <button key={index}
                                                className={`rounded-full ${textColor[index]} ${bgColor[index]} px-4 py-4 text-sm font-semibold shadow-sm hover:${bgColor[index]}/100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}>
                                            <a href={button.fields.url}
                                               className={"flex justify-between items-center w-full gap-x-10"}>
                                                <p>{button.fields.text}</p>
                                                <BsArrowRight size={20} fontWeight={20}/>
                                            </a>
                                        </button>

                                    );
                                })
                            }

                        </div>
                    </div>
                </div>*/}

                <div className={'w-full relative'}>

                    <img className={"rounded-[8px] w-full h-full object-cover absolute top-0 left-0 h-full"} src="https://images.unsplash.com/photo-1652109348316-2ec63fa43632?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fDRrJTIwaGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt=""/>

                    <div className={""}>
                        <h2 className="text-white text-[36px] text-center">
                            {props.content.title}
                        </h2>
                        <p className="text-[#9CA6B6] text-[18px] text-center">
                            {props.content.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
