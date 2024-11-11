'use client'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Faqindividual = ({ expanded, header, answer }) => {
    const [expand, setExpanded] = useState(expanded);
    // const theme = createTheme({
    //     components: {
    //         MuiAccordionSummary: {
    //             defaultProps: {
    //                 component: 'div', // Set AccordionSummary component to use 'div' instead of 'h3'
    //             },
    //         },
    //     },
    // })

    const handleChange = () => {
        setExpanded(!expand);
    };
    return (

        <Accordion defaultExpanded={expanded} className='place-content-center items-center font-unsans flex flex-[1_0_0px] [flex-flow:column] gap-[24px] h-min overflow-hidden !px-[26px] !py-[20px] relative  cursor-pointer bg-[rgb(255,_255,_255)] mt-4 transform-none origin-[50%_50%_0px] opacity-100 w-full'>
            <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                component="div"
                className='w-full'
                onClick={handleChange}
            >

                <div data-framer-name="Question" className="box-border [-webkit-font-smoothing:inherit] place-content-center items-center flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min overflow-visible p-0 relative w-full transform-none origin-[50%_50%_0px] opacity-100">
                    <div data-framer-component-type="RichTextContainer" className="box-border [-webkit-font-smoothing:inherit] relative flex-[1_0_0px] h-auto whitespace-pre-wrap w-px break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none origin-[50%_50%_0px] opacity-100">
                        <p data-styles-preset="TZhC2r16V" className="text-primary font-semibold leading-[1.7em] tracking-[0px] text-start text-[20px]">{header}</p>
                    </div>
                    <div style={{ rotate: expand ? '360deg' : '-360deg' }} className="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] duration-300 flex-[0_0_auto] h-auto relative w-[20px]  origin-[50%_50%_0px] opacity-100">
                        <div className="box-border [-webkit-font-smoothing:inherit] contents">

                            {
                                expand ?
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(15, 15, 15)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="box-border [-webkit-font-smoothing:inherit] w-full h-full">
                                        <line x1="5" y1="12" x2="19" y2="12" className="box-border [-webkit-font-smoothing:inherit]"></line>
                                    </svg>
                                    :

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(15, 15, 15) /* {&quot;name&quot;:&quot;Neutral-04&quot;} */" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ width: '100%', height: '100%' }}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            }
                        </div>
                    </div>
                </div>





            </AccordionSummary>
            <AccordionDetails >
                <Typography>
                    <div data-border="true" data-framer-name="Answer" className={`${expand ? 'border-t border-[rgb(15,15,15,.1)]' : ''} box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min overflow-visible pt-[24px] px-0 pb-0 relative w-full transform-none origin-[50%_50%_0px] opacity-100`}>
                        <div data-framer-component-type="RichTextContainer" className="box-border [-webkit-font-smoothing:inherit] relative flex-[0_0_auto] h-auto whitespace-pre-wrap w-[91%] break-words outline-[none] flex flex-col justify-start flex-shrink-0 transform-none origin-[50%_50%_0px] opacity-100">
                            <p data-styles-preset="HcH1e0kJr" className="text-primary font-unsans font-normal leading-[1.7em] tracking-[0px] text-start text-[16px]">{answer} </p>
                        </div>
                    </div>
                </Typography>
            </AccordionDetails>
        </Accordion>








    )
}

export default Faqindividual
