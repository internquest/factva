'use client'
import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const hadnelnav = () => {
        setOpen(!open)
    }
    return (
        <div data-framer-name="Header" name="Header" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min overflow-hidden px-[30px] py-0 relative w-full">
            <div data-framer-name="Container" name="Container" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[1_0_0px] [flex-flow:row] gap-[10px] h-min max-w-[98%] overflow-visible p-0 relative w-px">
                <div class="box-border [-webkit-font-smoothing:inherit] flex-[1_0_0px] h-auto relative w-px">
                    <div data-framer-name="Laptop" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] items-center flex [flex-flow:row] justify-between h-min px-0 py-[24px] relative w-full opacity-100">
                        <a data-framer-name="Project Logo" href="./" data-framer-page-link-current="true" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-link-current-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))] flex place-content-center items-center flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                            <div data-framer-name="Logo" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:4.20588_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 34px)] relative w-[143px] opacity-100">
                                <div data-framer-background-image-wrapper="true" class="box-border [-webkit-font-smoothing:inherit] absolute [border-radius:inherit]">
                                    <img decoding="async" src="https://framerusercontent.com/images/gYb8fKOfkPMnlVzJ6vCcg0k18jQ.svg" alt="" class="box-border [-webkit-font-smoothing:inherit] block w-full h-full [border-radius:inherit] object-cover"></img>
                                </div>
                            </div>
                        </a>
                        <div data-framer-name="Menu" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center t91:hidden b9214:flex flex flex-[0_0_auto] [flex-flow:row] gap-[40px] h-min overflow-visible p-0 relative w-[56%] bg-[rgba(0,_0,_0,_0)] opacity-100">
                            <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto opacity-100">
                                <a href='/' data-framer-name="Menu Normal" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                    <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p class="navlink">All Pages</p>
                                        </div>
                                    </div>
                                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[15px] relative w-[15px] transform-none opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] contents">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" color="rgb(15,15,15)" class="box-border [-webkit-font-smoothing:inherit] w-full h-full">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" class="box-border [-webkit-font-smoothing:inherit]"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto opacity-100">
                                <a href='/about' data-framer-name="Menu Normal" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                    <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p class="navlink">About</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto opacity-100">
                                <a href='/contact' data-framer-name="Menu Normal" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                    <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p class="navlink">Contact</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {
                            open &&

                            <div data-framer-name="Menu" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-start flex flex-[0_0_auto] [flex-flow:row] gap-[20px] h-min overflow-visible pl-[20px] pr-0 py-[20px] absolute w-full content-start flex-col left-2/4 top-[81px] bg-[rgb(255,_255,_255)] -translate-x-1/2 opacity-100">
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-1 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">Home</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-7 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./contact" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">Contact</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-2 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./about" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">About</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-3 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./services" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">Service</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-4 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./services/residential-solar-panel" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">Service Details</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-5 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./blog" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">Blog</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-6 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./blog/solar-panel-efficiency-what-you-need-to-know" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">Blog Details</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-auto relative w-auto order-8 opacity-100">
                                    <a data-framer-name="Menu Normal" data-highlight="true" href="./404" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative no-underline w-min opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                                            <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto overflow-visible whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                <p class="box-border [-webkit-font-smoothing:inherit] m-0 p-0 font-[var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)] font-[var(--framer-font-weight, 400)] text-[calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1))] tracking-[var(--framer-letter-spacing, 0)] leading-[var(--framer-line-height, 1.2em)]">404</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        }

                        <div data-framer-name="Button" class="box-border [-webkit-font-smoothing:inherit] items-center flex flex-[0_0_auto] [flex-flow:row] gap-[15px] h-auto overflow-visible p-0 relative w-auto opacity-100">
                            <div class="box-border [-webkit-font-smoothing:inherit] t91:items-center t91:flex t91:flex-[0_0_auto] t91:[flex-flow:row] t91:gap-[15px] t91:h-auto t91:overflow-visible t91:p-0 t91:relative t91:w-auto flex-[0_0_auto] h-auto relative w-auto opacity-100">

                                <a data-framer-name="Header Button" href="./" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] t767:hidden flex place-content-center items-center cursor-pointer [flex-flow:row] gap-[16px] h-min overflow-hidden p-0 relative no-underline w-min bg-[rgba(0,_0,_0,_0)] opacity-100">
                                    <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre w-auto order-1 outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                        <p data-styles-preset="mP_fZDDMg" class="navlink text-[16px] font-medium">Call us: +1-305-3095</p>
                                    </div>
                                    <div data-framer-name="Icon" class="box-border [-webkit-font-smoothing:inherit] place-content-center items-center bg-[var(--primary-color)] [aspect-ratio:1_/_1] flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-auto overflow-hidden p-[6px] relative w-[22px] order-none opacity-100">
                                        <div data-framer-name="Icon" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 16px)] left-[3px] absolute top-2/4 w-[16px] -translate-y-1/2 opacity-100">
                                            <div data-framer-background-image-wrapper="true" class="box-border [-webkit-font-smoothing:inherit] absolute [border-radius:inherit]">
                                                <img decoding="async" sizes="16px" src="https://framerusercontent.com/images/kl3A2ZtGADwoLLdzahxQwuRn90.svg" alt="" class="box-border [-webkit-font-smoothing:inherit] block w-full h-full [border-radius:inherit] object-cover"></img>
                                            </div>
                                        </div>
                                        <div data-framer-name="Icon" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 16px)] -left-[50px] absolute top-2/4 w-[16px] -translate-y-1/2 opacity-100">
                                            <div data-framer-background-image-wrapper="true" class="box-border [-webkit-font-smoothing:inherit] absolute [border-radius:inherit]">
                                                <img decoding="async" sizes="16px" src="https://framerusercontent.com/images/kl3A2ZtGADwoLLdzahxQwuRn90.svg" alt="" class="box-border [-webkit-font-smoothing:inherit] block w-full h-full [border-radius:inherit] object-cover"></img>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className='h-[32px] t91:block hidden relative w-[32px]'>
                                    <div data-framer-name="Burger" data-highlight="true" tabindex="0" class="box-border [-webkit-font-smoothing:inherit] cursor-pointer h-full overflow-hidden relative w-full opacity-100">
                                        <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[18px] left-[calc(50.00000000000002%-24px/2)] overflow-visible absolute top-[calc(50.00000000000002%-18px/2)] w-[24px] opacity-100">
                                            <div data-framer-name="Bottom" class="box-border [-webkit-font-smoothing:inherit] bottom-0 flex-[0_0_auto] h-[2px] left-0 overflow-hidden absolute right-0 [transform:translate3d(0px,_-3.07092px,_0px)_rotate(-17.2739deg)] origin-[50%_50%_0px]"></div>
                                            <div data-framer-name="Mid" class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[2px] left-0 overflow-hidden absolute right-0 top-[calc(50% - 1px)] opacity-0 [transform:translate3d(4.22251px,_0px,_0px)_scale(0.648124,_1)] origin-[50%_50%_0px]"></div>
                                            <div data-framer-name="Top" class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[2px] left-0 overflow-hidden absolute right-0 top-0 [transform:translate3d(0px,_3.07092px,_0px)_rotate(17.2739deg)_scale(1.03199,_1)] origin-[50%_50%_0px]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
