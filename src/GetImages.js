import { useState, useEffect } from "react";
import Image from "./Image";

export default function GetImages() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
            const data = await response.json();
            setImages(data);
        };

        fetchImages();
    }, []);

    return (
        <>
            {!images ? (
                <h2 className="d-flex justify-content-center align-items-center h-screen font-weight-bold fs-4 text-center">Loading...</h2>
            ) : (
                <section className="px-5 max-w-xxl mx-auto">
                    <h1 className="font-weight-bold fs-3 fs-md-4 fs-lg-6 my-4 my-md-5 my-lg-8 text-secondary">Recommended for you</h1>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {images.map((image) => (
                            <div key={image.id} className="col">
                                <Image {...image} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
