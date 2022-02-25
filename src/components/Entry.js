import marker from "../images/marker.png"
import data from "../data"

export default function Entry(props) {
    return (
        <div>
            <div className="entry">
                <img src = {props.imageUrl} className = "entry-image" /> 
                <div className = "entry-content">
                    <div className = "locationContainer">
                        <img src = {marker} className = "marker" />
                        <p className = "location">{props.location}</p>
                        <a href = {props.googleMapsUrl} target = "_blank" className = "gmaps">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>  
                    <p className = "dates">{props.startDate} - {props.endDate}</p>
                    <p className = "description">{props.description}</p>  
                </div>   
            </div>
            {/* if last item in array then don't add a break*/}
            {
                data.length === props.id ||
                <hr className = "break"/>
            }
          
        </div>
    )
}
