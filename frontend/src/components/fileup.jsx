import { useState } from "react";
import axios from 'axios';
import VideoPlayer from "./video";
import LoadingBar from "./loading";
import YoutubeEmbed from "./YoutubeEmbed";
import { BiCctv } from "react-icons/bi";
function FileWindow() {


    const [file, setFile] = useState()
    const [url, setURL] = useState()
    const [path, setPath] = useState()
    const [success, setSuccess] = useState(0)
    const [content, setContent] = useState('')
    const [processing, setProcessing] = useState(0)
    function handleChange(event) {
        setFile(event.target.files[0])
    }
    function handleUrlChange(event) {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     setSuccess(0)
    //     if (file) {
    //         setContent('Processing...')

    //         setProcessing(1)
    //         const url = 'http://127.0.0.1:5000/detect';
    //         const formData = new FormData();
    //         formData.append('video', file);
    //         const config = {
    //             headers: {
    //                 'content-type': 'multipart/form-data',
    //             },
    //         };
    //         axios.post(url, formData, config).then((response) => {
    //             console.log(response.data);
    //             setProcessing(0)
    //             if (response.status == 200) {

    //                 setSuccess(1)

    //             }
    //             else {
    //                 setSuccess(0)
    //             }
    //         });
    //     }
    //     else {
    //         setContent('No file found...')
    //     }

    // }

    // function handleRetrieve(event) {
    //     event.preventDefault()
    //     axios.get('https://cb10-35-199-168-46.ngrok-free.app/return-files').then(resp => {

    //         console.log(resp.data);
    //     });

    function handleURLSubmit(event) {
        event.preventDefault()
        setPath(url)
        setSuccess(1)
    }



    return (
        <div className="flex-row items-center justify-start">
            <h1 className="w-full my-4 text-3xl font-bold text-center">Detection Tool </h1>

            <div className="w-full px-10 my-10">
                <form className="flex justify-center">
                    <input type="text" id="small-input" className="p-4 w-[50rem] outline-none rounded-full border-2 border-gray-300" placeholder="Enter video stream" onChange={handleUrlChange}></input>
                    <button onClick={handleURLSubmit} className="p-4 mx-5 text-white rounded-full bg-primary dark:bg-primary-dark"><BiCctv size={25} /></button>
                </form>
            </div>

            {/* <div className="flex items-center justify-center">
                <YoutubeEmbed source="https://www.youtube.com/embed/ha0odJte1ns" />
            </div> */}


            {success == 1 ? <VideoPlayer url={path}></VideoPlayer> : ''}
            {processing == 1 ? <LoadingBar /> : ''}
        </div>
    )
}


export default FileWindow;