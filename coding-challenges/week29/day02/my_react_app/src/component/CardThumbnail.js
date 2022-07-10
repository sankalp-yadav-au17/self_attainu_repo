import ThumbnailInfo from "./ThumbnailInfo"
function CardThumbnail(){

    return (
    <div className="card shadow-lg ">
        <img src="https://i.ytimg.com/vi/gUamhOX38b0/hqdefault.jpg" className="card-img-top" />
        <div className="card-body bg-dark text-light">
            <ThumbnailInfo/>
        </div>
    </div>
    )
}

// SankalpYadav©2021
export default CardThumbnail