import {useEffect, useState} from "react";
import StyleManager from "../services/StyleManager";

let HeroComponent = ({title, subtitle, buttons, imageURL, videoURL, content})=>{

    const [styles, setStyles] = useState(null);

    const styleManager = new StyleManager();

    useEffect(()=>{

        setStyles(styleManager.getStyles());

    }, []);

    return(


        <div className={`w-full pt-52 pb-10 ${styles && `${'bg-'+styles.backgroundColor} ${'text-'+styles.textColor.color}` }`}>

            <div className={"w-[95%] mx-auto flex flex-col justify-center items-start gap-y-24"}>
                <div className={"mx-auto w-[100%] flex flex-col justify-start items-start"}>
                    <h1 className="text-[43px] md:text-[55px] lg:text-[73px] mb-3">
                        {title}
                    </h1>
                    <p className="text-[18px] md:text-[20px] lg:text-[28px] leading-8">
                        {subtitle}
                    </p>

                    {
                        buttons && (

                            <div className={"flex justify-start items-center gap-x-10 w-full"}>
                                {
                                    buttons.map((button, index)=>{

                                        return (

                                            <a key={index} href={button.fields.url} className={"cursor-pointer text-[14px] md:text-[16px] px-[20px] py-[12px] rounded-full text-white bg-vm-blue font-semibold"}>{button.fields.text}</a>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>

                {
                    ( imageURL || videoURL || content ) && (

                        <div className={`w-full mx-auto
                
                     xl:h-[820px] 
                        xlBETWEENlg:h-[749px]
                     lg:h-[677px]
                        lgBETWEENmd:h-[606px]
                     md:h-[534px]
                        mdBETWEENsm:h-[463px]
                     sm:h-[391px]
                        smBETWEENxs:h-[320px]
                     xs:h-[248px]
                    
                `}>
                            {
                                imageURL && <img
                                    src={imageURL}
                                    loading="lazy"
                                    alt=""
                                    className={`rounded-[2px] w-full h-full object-cover`}/>
                            }

                            {
                                videoURL && <video
                                    src={imageURL}
                                    className={`rounded-[2px] w-full h-full object-fit`}/>
                            }

                            {
                                content && content
                            }

                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default HeroComponent;