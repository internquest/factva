import React from 'react'


const Howitworks = () => {
    return (
        <div className='flex flex-col items-center justify-center t767:pt-[70px] t767:px-[5px] t767:pb-[50px] pt-[100px] px-[30px] pb-[50px] relative w-full'>
            <div className='flex flex-col justify-center items-center w-full t767:gap-2 gap-6'>

                <h1 className='text-primary font-bold text-[48px] leading-[1.7em] tracking-[0px] uppercase'>HOW IT WORKS</h1>
                <p className='text-primary font-normal text-[20px] leading-[1.9em] max-w-[696px] text-center tracking-[0px] '>
                    Personify facilitates 1:1 conversations about your goals, your ambitions, your
                    values, & how you see the world. No trick questions. No awkward small talk.
                    Just a chance for you to be you.
                </p>
            </div>
            <div className='w-full'>


                <div className='bg-[#CDEF5C] t767:w-full mx-auto w-[700px] h-min  py-12 px-5 mt-10 flex gap-5 flex-col justify-center items-center'>
                    <div className='bg-[var(--primary-color)] font-semibold w-[52px] h-[52px] text-[32px] text-[#f5f5f5] flex justify-center items-center rounded-[50%] '>
                        1
                    </div>

                    <h2 className='text-primary text-[32px] mt-2 leading-[1.2em] tracking-normal font-semibold'>SIGN UP & SCHEDULE</h2>
                    <div>

                        <p className='text-primary text-[18px] t767:max-w-[unset]  max-w-[517px] teba leading-[1.9em] w-full text-center tracking-[0px] font-normal'>Create a profile and schedule your conversations with us.</p>
                        <p className='text-primary text-[18px] max-w-[517px] teba leading-[1.9em] w-full text-center tracking-[0px] font-normal'>   It’s as simple as signing up for a coffee chat.</p>
                    </div>
                </div>
                <div className='bg-[#0f0f0f] t767:w-full mx-auto w-[700px] h-min py-12 px-5 mt-10 flex t767:items-start gap-5 flex-col justify-center items-center'>
                    <div className='bg-[#FFFFFF] w-[52px] h-[52px] font-semibold text-[32px] text-[#0f0f0f] flex justify-center items-center rounded-[50%] '>
                        2
                    </div>

                    <h2 className='text-white t767:text-[28px] text-[32px] mt-2 leading-[1.2em] t767:self-start tracking-normal font-semibold'>JOIN THE CONVERSATION</h2>
                    <div>

                        <p className='text-white text-[18px] t767:max-w-[unset] max-w-[543px] t767:px-0 px-8 leading-[1.9em] w-full t767:text-start text-center tracking-[0px] font-normal'>Have a real, human conversation. You’ll be asked questions
                            that matter, from your thoughts on leadership to how you
                            handle challenges, to what motivates you & more.
                        </p>

                        <p className='text-white text-[18px] max-w-[543px]  leading-[1.9em] w-full t767:text-start text-center tracking-[0px] font-normal'>(Don’t worry, there are no wrong answers here.)</p>

                    </div>
                </div>
                <div className='bg-[#F7F6F2] t767:w-full mx-auto w-[700px] h-min py-12 px-5 mt-10 t767:self-start flex gap-5 flex-col justify-center items-center'>
                    <div className='bg-[#3D3D3C] w-[52px] h-[52px] font-semiboldt t767:self-start text-[32px] text-[#F5F5F5] flex justify-center items-center rounded-[50%] '>
                        3
                    </div>

                    <h2 className='text-[#3d3d3c] t767:text-[28px] text-[32px] mt-2 leading-[1.2em] tracking-normal font-semibold'>GET YOUR PERSONALITY PROFILE</h2>
                    <div>

                        <p className='text-[#3d3d3c] text-[18px] t767:px-0 px-8 max-w-[543px]  leading-[1.9em] w-full t767:text-start text-center tracking-[0px] font-normal'>A personalized profile shall be created based on your
                            conversations. This profile will help companies see more
                            than just your credentials—it’s a glimpse into the real you.
                        </p>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitworks
