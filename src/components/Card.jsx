import locationTag from "../../public/images/location.png";

export default function Card(props) {
    return (
        <div className="card-section">
            <img className="card-img" src={props.imageUrl} />
            <div>
                <div className="upper-txt">
                    <img src={locationTag} className="location-tag"/>
                    <p>{props.location}</p>
                    <a target="blank" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="bottom-txt">
                    <h2 className="bottom-txt-title">{props.title}</h2>
                    <p className="bottom-txt-time">{props.startDate} - {props.endDate}</p>
                    <p className="bottom-txt-paragraph">{props.description}</p>
                </div>
            </div>
        </div>
    )
}