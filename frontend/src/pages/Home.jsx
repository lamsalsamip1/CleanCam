import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/Sidebar'
import FileWindow from '../components/fileup'
import { VscColorMode, VscOrganization } from 'react-icons/vsc'
import { IoNotifications } from 'react-icons/io5'
import { FaUserCircle, FaInfoCircle } from 'react-icons/fa'
import { RiCloudFill } from 'react-icons/ri'
import HeroImg from '../assets/Hero1.png'
import HeroImg2 from '../assets/Hero2.png'

const Home = () => {
  const overviewArr = [
    {
      id: 1,
      name: 'Cities covered',
      number: '3',
      color: '#fc7303',
    },
    {
      id: 2,
      name: 'Partners',
      number: '16',
      color: '#18cf00',
    },
    {
      id: 3,
      name: 'Footages',
      number: '8',
      color: '#0015d5',
    },
    {
      id: 4,
      name: 'Suspects found',
      number: '104',
      color: '#b60000',
    },
  ]
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  return (
    <>
      <div className="flex w-full h-screen overflow-y-hidden">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <div className="w-[82%] overflow-y-hidden">
          <div className="flex items-center justify-between py-2 px-7">
            <div>
              <form action="">
                <input
                  type="text"
                  id="small-input"
                  className="py-4 px-7 w-[20rem] h-11 outline-none rounded-full border-2 border-gray-300 bg-gray-300"
                  placeholder={`🔍  Search here`}
                ></input>
              </form>
            </div>
            <div>
              <button className="p-2 m-2 bg-gray-100 rounded-full dark:bg-black">
                <IoNotifications size={22} />
              </button>
              <button className="p-2 m-2 bg-gray-100 rounded-full dark:bg-black">
                <VscColorMode size={22} />
              </button>
              <button className="p-2 m-2 bg-gray-100 rounded-full dark:bg-black">
                <FaUserCircle size={22} />
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="w-[65%] px-4">
              <div>
                <h1 className="px-4 py-2 text-2xl font-semibold">Overview</h1>
                <div className="flex">
                  {overviewArr.map(({ id, name, number, color }) => (
                    <div
                      key={id}
                      className="w-40 mx-3 my-2 bg-gray-100 shadow-lg rounded-xl h-36"
                    >
                      <div className="flex items-center px-1 py-3 text-gray-500">
                        <span style={{ color: `${color}` }} className="mx-1">
                          <RiCloudFill size={22} />
                        </span>{' '}
                        <span className='text-sm'>{name}</span>
                      </div>
                      <div
                        className="pb-2 mt-3 ml-2 text-5xl w-14"
                        style={{ borderBottom: `4px solid ${color}` }}
                      >
                        {number}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="px-4 mt-3 py-0 text-2xl font-semibold">
                What we're trying to achieve
              </h1>
              <div className="flex flex-col p-3 mt-4 ml-2 bg-white shadow-xl rounded-2xl">
                <div className="flex">
                  <div className="flex items-center flex-col rounded-xl bg-[#D7F1B3] p-5 w-2/3 m-2">
                    <img src={HeroImg} className="w-52" alt="" />
                    <div className="flex flex-col">
                      <h1 className='text-2xl font-bold text-black'>Find Perpetrators</h1>
                    </div>
                  </div>
                  <div className="flex items-center flex-col rounded-xl bg-[#ffe6bb] p-5 w-2/3 m-2">
                    <img src={HeroImg2} className="w-52" alt="" />
                    <div className="flex flex-col">
                      <h1 className='text-2xl font-bold text-black'>Create clean Nepal</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[35%] h-screen overflow-y-hidden p-4">
              <div className='w-full mt-10 p-4 bg-white shadow-xl rounded-2xl'>
                <h1 className='text-xl font-medium flex items-center'><VscOrganization className='mr-2 font-semibold text-orange-500' size={25} />Footage Sources</h1>
                <ul>
                  <li className='text-base font-normal w-full my-4 px-6'>Thamel, Kathmandu </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Basantapur Durbar Square </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Ratnapark, Kathmandu </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Chabahil, Kathmandus </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Thamel, Kathmandu </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Basantapur Durbar Square </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Ratnapark, Kathmandu </li>
                  <li className='text-base font-normal w-full my-4 px-6'>Chabahil, Kathmandus </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
