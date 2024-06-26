import { format } from 'date-fns';
import LazyImage from './LazyImage';
import ImagePerformanceStats from './ImagePerformanceStats';

export default function Image(props) {
    return (
     <div className="card shadow-sm mb-4">
        <div style={{ height: '300px', overflow: 'hidden' }}>
        <LazyImage 
            src={props.urls.full} 
            alt={props.user.name} 
            loading="lazy" 
            className="card-img-top rounded-lg" 
            style={{height: "300px", objectFit: "cover"}} 
        />
        </div>
            <div className="card-body d-flex justify-content-between align-items-center">
            <img 
                src={props.user.profile_image.large} 
                alt={props.user.name} 
                loading="lazy"
                className="rounded-circle mr-3" 
                style={{width: "50px", height: "50px"}} 
            />
            <div>
                <h5 className='card-title font-weight-bold mb-1'>{props.user.name}</h5>
                <p className='card-text text-secondary'>{format(new Date(props.created_at), "dd MMMM yyyy")}</p>
            </div>
            <div>
                <ul className='list-unstyled mb-0'>
                    <li><a href={`https://instagram.com/${props.user.instagram_username}`} className='text-decoration-none'>Instagram</a></li>
                    <li>{props.likes} likes</li>
                </ul>
            </div>
        </div>
        <ImagePerformanceStats image={props} />
</div>

    )
}
