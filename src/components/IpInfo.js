import React from 'react';

function IpInfo({ip,isp,timezone,city,country}) {
    return (
        <div className='rounded-xl items-center index bg-white lg:text-3xl lg:justify-around lg:-mb-20 -mb-40 lg:mt-12 mt-6 lg:flex '>
            <div className='flex-col flex items-center lg:items-start lg:pl-14 lg:pr-14 p-5'>
                <h1 className='lg:text-sm small_text lg:mb-2 lg:-mt-4 lg:tracking-widest text-[#969696] bold'>IP ADDRESS</h1>
                <h1 className="text-xl">{ip}</h1>
            </div>
            <div className="border_div hidden lg:block"></div>
            <div className='flex-col flex items-center lg:items-start lg:pl-14 lg:pr-14 mb-5'>
                <h1 className='lg:text-sm small_text lg:mb-2 lg:-mt-2 tracking-widest text-[#969696] bold'>LOCATION</h1>
                <h1 className="text-xl">{city},{country}</h1>
            </div>
            <div className="border_div hidden lg:block"></div>
            <div className='flex-col flex items-center lg:items-start lg:pl-14 lg:pr-14 mb-5'>
                <h1 className='lg:text-sm small_text lg:mb-2 lg:-mt-2 tracking-widest text-[#969696] bold'>TIMEZONE</h1>
                <h1 className="text-xl">UTC {timezone}</h1>
            </div>
            <div className="border_div hidden lg:block"></div>
            <div className='flex flex-col items-center lg:items-start lg:pl-14 lg:pr-14 lg:mt-11 mb-5 pl-5 pr-5'>
                <h1 className='lg:text-sm small_text lg:mb-1 tracking-widest text-[#969696] bold'>ISP</h1>
                <h1 className='lg:pr-4 lg:max-w-fit lg:mb-2 text-xl'>{isp}</h1>
            </div>
        </div>
    );
}

export default IpInfo;