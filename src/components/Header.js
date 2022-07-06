import React, {useEffect, useState} from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import IpInfo from "./IpInfo";
import Loading from "./Loading";
import Map from "./Map";

function Header() {
    const [searchip,setSearchip] = useState("")
    const [fsearch, setFSearch] = useState("")
    const [ipInfo, setIpInfo] = useState()
    const [fetched, isFetched] = useState(false)

    useEffect(()=>{
        fetch("https://api.ipify.org?format=json").then(r => r.json()).then(ip =>{
            if(!fsearch){
                setFSearch(ip.ip)
            }
        })
    })
    useEffect(()=>{
        const fetchip = async () =>{
            try{
                const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${fsearch}`)
                const data = await response.json()
                setIpInfo(data)
                isFetched(true)
            } catch (e) {
                console.log(e);
            }
        }
        if(fsearch){
            fetchip();
        }
    },[fsearch])
    function handleSubmit (e){
        e.preventDefault();
        setFSearch(searchip)
    }
    function handleChange (e){
        setSearchip(e.target.value)
    }
    return (
        <div className='gradient flex justify-center items-center flex-col'>
            <h1 className='lg:text-4xl text-white mt-12 text-3xl'>IP Address Tracker</h1>
            <form onSubmit={handleSubmit} className='flex items-center mt-12'>
                <input type="text" placeholder='Search for any IP address or domain' onChange={handleChange} className='p-4 lg:pr-56 focus:outline-none rounded-l-xl pr-28'/>
                <button className='bg-black rounded-r-lg p-4 hover:bg-[#2B2B2B]' type="submit"><MdKeyboardArrowRight className='text-2xl text-white' /></button>
            </form>
            {fetched? <IpInfo isp={ipInfo.isp} ip={ipInfo.ip} timezone={ipInfo.location.timezone} city={ipInfo.location.region} country={ipInfo.location.country} />: <Loading/>}
            {fetched? <Map lat={ipInfo.location.lat} lng={ipInfo.location.lng} />: null}
        </div>
    );
}

export default Header;