import React from 'react'
import Faqindividual from './Faqindividual'

const Faq = () => {
    return (

        <header data-framer-name="Content Section 02" name="Content Section 02" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] bg-[#f7f6f2] [flex-flow:column] gap-0 h-min overflow-hidden t767:pt-[50px] t767:px-5 t767:pb-[105px] b791:pt-[70px] b791:px-[30px] b791:pb-[135px] b9214:pt-[90px] b9214:px-[30px] b9214:pb-[100px] pt-[90px] px-[30px] pb-[100px] relative w-full">
            <div data-framer-name="Container" name="Container" class="box-border [-webkit-font-smoothing:inherit] items-center flex flex-[0_0_auto] t767:flex-col t767:gap-[40px] t767:justify-center t767:max-w-[390px] [flex-flow:row] h-min b791:justify-center b791:gap-[50px] b791:flex-col b791:max-w-[768px] max-w-[98%] overflow-visible p-0 relative w-full b9214:gap-[40px] gap b9214:justify-center justify-between">
                <div data-framer-name="Content area" name="Content area" class="box-border [-webkit-font-smoothing:inherit] items-start flex t767:gap-[30px] t767:max-w-[unset] t767:w-full b791:gap-[40px] b791:max-w-[unset] b791:w-full b9214:flex-[1_0_0px] flex-none [flex-flow:column] b9214:gap-[50px] gap-[60px] h-min b9214:max-w-[480px] max-w-[680px] overflow-hidden p-0 relative b9214:w-px w-[50%]">
                    <div data-framer-name="Title" name="Title" class="box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:column] gap-[10px] h-min overflow-hidden p-0 relative w-full">
                        <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] relative flex-[0_0_auto] h-auto [transform:perspective(1200px)] whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100">
                            <h2 data-styles-preset="nJtNjSFCn" class="text-primary font-semibold leading-[1.3em] tracking-[-.1px] text-start t767:text-[36px] b791:text-[45px] text-[56px]">WE HELP YOU TO GET FREEDOM OF ELECTRICY.</h2>
                        </div>
                        <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] relative flex-[0_0_auto] h-auto opacity-80 [transform:perspective(1200px)] whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0">
                            <p data-styles-preset="rbbnf0dYn" class="text-primary font-normal leading-[1.7em] tracking-[0px] text-start text-[20px]">For over 15 years, homeowners in the region have trusted us for affordable, high-efficiency solar systems.</p>
                        </div>
                    </div>
                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative [transform:perspective(1200px)] w-full opacity-100">
                        <div data-framer-name="Desktop" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex [flex-flow:column] gap-[16px] h-min overflow-hidden p-0 relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                            <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                                <div data-framer-name="Open" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center cursor-pointer flex [flex-flow:row] gap-[10px] h-min overflow-hidden p-0 relative w-full transform-none origin-[50%_50%_0px] opacity-100">

                                    <div>

                                        <Faqindividual expanded={true} header={'How much can I actually save by going solar?'} answer={'Typical homeowners save between $10,000-$30,000 over the lifetime of their solar panel system. The exact amount depends on factors like your home\'s sunlight exposure, energy consumption habits, and available solar incentives in your area. '} />


                                    </div>

                                </div>
                            </div>
                            <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                                <div data-framer-name="Close" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center cursor-pointer flex [flex-flow:row] gap-[10px] h-min overflow-hidden p-0 relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                                    <Faqindividual expanded={false} header={'Do solar panels require a lot of maintenance?'} answer={'Solar panels are extremely durable and require very little maintenance once installed by professionals. An occasional cleaning to remove dirt, dust or debris is recommended. We advise having your system inspected annually to ensure everything is operating at peak efficiency.'} />
                                </div>
                            </div>
                            <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                                <div data-framer-name="Close" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center cursor-pointer flex [flex-flow:row] gap-[10px] h-min overflow-hidden p-0 relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                                    <Faqindividual expanded={false} header={'What happens if I want to sell my home with solar panels?'} answer={'Solar panels are viewed as a major home upgrade that increases property resale value. If you have a solar lease or loan, you can either pay it off or transfer the agreement to the new homeowner.'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-framer-name="Content image" name="Content image" class="box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:column] gap-[10px] h-min overflow-visible b9214:pl-0 b9214:pr-[30px] t767:w-full t767:pt-0 t767:pr-[30px] t767:pb-0 t767:pl-0 b9214:py-0 pt-0 pr-[50px] pb-0 pl-0 relative w-min">
                    <div data-framer-name="Image" name="Image" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:0.8_/_1] flex-[0_0_auto] t767:h-auto t767:w-full h-auto relative [transform:perspective(1200px)] b9214:w-[350px] w-[492px] z-[2] opacity-100">
                        <div data-framer-background-image-wrapper="true" class="box-border [-webkit-font-smoothing:inherit] absolute inset-0 [border-radius:inherit]">
                            <img decoding="async" sizes="calc(min(100vw - 40px, 390px) - 30px)" srcset="https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png?scale-down-to=1024 948w, https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png 1130w" src="https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] t767:block bg-no-repeat hidden w-full h-full [border-radius:inherit] object-cover"></img>
                            <img decoding="async" sizes="350px" srcset="https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png?scale-down-to=1024 948w, https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png 1130w" src="https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] b9214:block hidden w-full h-full [border-radius:inherit] object-cover"></img>
                            <img decoding="async" sizes="492px" srcset="https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png?scale-down-to=1024 948w, https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png 1130w" src="https://framerusercontent.com/images/d5pSt7kmIFdpQtfF0OpqYJJNdY.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] t91:hidden b9214:hidden block w-full h-full [border-radius:inherit] object-cover"></img>
                        </div>
                    </div>
                    <div data-framer-name="Shape" name="Shape" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:0.791803_/_1] b9214:-bottom-[30px] t767:w-[300px] t767:bottom-[-30px] t767:h-auto t767:aspect-[.7692307692307693/1] -bottom-[45px] flex-[0_0_auto] h-auto absolute right-0 [transform:perspective(1200px)] b9214:w-[250px] w-[424px] z-[1] opacity-100">
                        <div data-framer-background-image-wrapper="true" class="box-border [-webkit-font-smoothing:inherit] inset-0 absolute [border-radius:inherit]">
                            <img decoding="async" sizes="250px" srcset="https://framerusercontent.com/images/q5Yg1Hl8HqVO8dM7KIQVP5Rr9nc.png?scale-down-to=1024 810w, https://framerusercontent.com/images/q5Yg1Hl8HqVO8dM7KIQVP5Rr9nc.png 966w" src="https://framerusercontent.com/images/q5Yg1Hl8HqVO8dM7KIQVP5Rr9nc.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] b9214:block hidden w-full h-full [border-radius:inherit] object-cover"></img>
                            <img decoding="async" sizes="424px" srcset="https://framerusercontent.com/images/q5Yg1Hl8HqVO8dM7KIQVP5Rr9nc.png?scale-down-to=1024 810w, https://framerusercontent.com/images/q5Yg1Hl8HqVO8dM7KIQVP5Rr9nc.png 966w" src="https://framerusercontent.com/images/q5Yg1Hl8HqVO8dM7KIQVP5Rr9nc.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] b9214:hidden block w-full h-full [border-radius:inherit] object-cover"></img>
                        </div>
                    </div>
                    <div data-framer-name="Pattern" name="Pattern" class="box-border [-webkit-font-smoothing:inherit] t767:bottom-[-45px] t767:h-auto t767:right-[105px] t767:width-[230px] [aspect-ratio:1.32119_/_1] b9214:-bottom-[45px] -bottom-[-70px] flex-[0_0_auto] h-auto absolute b9214:right-[60px] right-[142px] [transform:perspective(1200px)] b9214:w-[280px] w-[310px] z-[1] opacity-100">
                        <div data-framer-background-image-wrapper="true" class="box-border [-webkit-font-smoothing:inherit] absolute inset-0 [border-radius:inherit]">
                            <img decoding="async" sizes="230px" srcset="https://framerusercontent.com/images/lVcAP6mQeVH0wxnYZ0QdVBLSmdk.png?scale-down-to=512 512w, https://framerusercontent.com/images/lVcAP6mQeVH0wxnYZ0QdVBLSmdk.png 802w" src="https://framerusercontent.com/images/lVcAP6mQeVH0wxnYZ0QdVBLSmdk.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] t767:block hidden w-full h-full [border-radius:inherit] object-cover"></img>
                            <img decoding="async" sizes="280px" srcset="https://framerusercontent.com/images/lVcAP6mQeVH0wxnYZ0QdVBLSmdk.png?scale-down-to=512 512w, https://framerusercontent.com/images/lVcAP6mQeVH0wxnYZ0QdVBLSmdk.png 802w" src="https://framerusercontent.com/images/lVcAP6mQeVH0wxnYZ0QdVBLSmdk.png" alt="" loading="lazy" class="box-border [-webkit-font-smoothing:inherit] block t767:hidden w-full h-full [border-radius:inherit] object-cover"></img>
                        </div>
                    </div>
                </div>
            </div>
        </header >

    )
}

export default Faq
