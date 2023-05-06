import Sidebar from '../components/Sidebar'
import FileWindow from "../components/fileup";

const Tool = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <div className="w-[82%]">
          <FileWindow></FileWindow>
        </div>
      </div>
    </>
  )
}

export default Tool
