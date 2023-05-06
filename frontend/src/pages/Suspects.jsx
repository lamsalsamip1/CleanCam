import Sidebar from '../components/Sidebar'
import sus1 from '../assets/sus1.gif'
import sus2 from '../assets/sus2.jpg'
import sus3 from '../assets/sus3.jpg'
import sus4 from '../assets/sus4.jpeg'
import sus5 from '../assets/sus5.jpg'
import sus6 from '../assets/sus6.jpg'
import sus7 from '../assets/sus7.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Suspects = () => {
  const suspectsArr = [
    {
      id: 1,
      photo: sus1,
      date: '2023-05-05',
    },
    {
      id: 2,
      photo: sus2,
      date: '2023-05-05',
    },
    {
      id: 3,
      photo: sus3,
      date: '2023-05-05',
    },
    {
      id: 4,
      photo: sus4,
      date: '2023-05-05',
    },
    {
      id: 5,
      photo: sus5,
      date: '2023-05-05',
    },
    {
      id: 6,
      photo: sus6,
      date: '2023-05-05',
    },
    {
      id: 7,
      photo: sus7,
      date: '2023-05-05',
    },
  ]

  const [results, setResults] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/suspects")
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  // results.forEach(file => {
  //   console.log(file.file_name);
  // });


  return (
    <>
      <div className="flex w-full h-screen overflow-y-hidden">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <div className="w-full px-5 h-screen ">
          <h1 className='my-4 text-3xl'>Suspects List</h1>
          <div className='h-full overflow-y-scroll'>
            <div className="flex w-full py-5 border-b-2 border-gray-300 dark:border-gray-500">
              <div className="w-[10%] mx-5 text-start">S.N</div>
              <div className="w-[15%] mx-5 text-center">Date</div>
              <div className="w-[15%] mx-5 text-center">Time</div>
              <div className="w-[15%] mx-5 text-center">Location</div>
              <div className="w-[45%] mx-5 text-center">Photo</div>
            </div>
            {results.map((x, i) => {
              const dateString = x.file_name.slice(0, 8);
              const year = dateString.substring(0, 4);
              const month = dateString.substring(4, 6);
              const day = dateString.substring(6, 8);
              const formattedDateString = `${year}-${month}-${day}`;

              const parts = x.file_name.split('/');
              const timeString = parts[1].slice(0, -4);
              const hours = parseInt(timeString.substring(0, 2));
              const minutes = timeString.substring(2, 4);
              const suffix = hours < 12 ? 'am' : 'pm';
              const formattedHours = hours > 12 ? hours - 12 : hours;
              const formattedTimeString = `${formattedHours}:${minutes} ${suffix}`;

              return (
                <div
                  key={i}
                  className="flex items-center w-full py-3 border-gray-300 dark:border-gray-500"
                >
                  <div className="w-[10%] mx-5 text-start">{i + 1}</div>
                  <div className="w-[15%] mx-5 text-center">{formattedDateString}</div>
                  <div className="w-[15%] mx-5 text-center">{formattedTimeString}</div>
                  <div className="w-[15%] mx-5 text-center">Sifal, Kathmandu</div>
                  <div className="w-[45%] mx-5 flex justify-center">
                    <a target="_blank" href='/'>
                      <img
                        className="h-24 w-32 rounded-xl"
                        src={`http://127.0.0.1:5000/images/${x.file_name}`}
                        alt="sus"
                      />
                    </a>
                  </div>
                </div>
              )
            })}
            <div className='w-full h-20'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Suspects