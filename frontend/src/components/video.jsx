
function VideoPlayer(props) {
    console.log("http://127.0.0.1:5000/testurl/" + props.url)

    return (
        <div className="flex justify-center">


            {/* <video controls autoPlay width="50%" className="mt-10">
                <source src="http://127.0.0.1:5000/video" type="video/mp4" />
                Processing
            </video> */}
            <img src={"http://127.0.0.1:5000/testurl/" + props.url} className="mt-4" width="70%" />
        </div>
    )
}

export default VideoPlayer;