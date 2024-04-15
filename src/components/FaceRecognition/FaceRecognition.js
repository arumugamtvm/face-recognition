import './FaceRecognition.css'
const FaceRecognition = ({ box, imageUrl }) => {
    console.log('BOX',box)
    return (<div className="center ma">
        <div className="absolute mt2">
            <img id='input_image' alt="Recognition Image" src={imageUrl} width='500px' height='auto' />
            <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol  }}></div>
        </div>
    </div>)
}

export default FaceRecognition