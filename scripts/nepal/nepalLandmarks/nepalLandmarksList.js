

export const nepalLandmarks = (nepalLandmarksObj) => {
    return( 

        `<article class="landmarks-card">
        <div class="landmark-image"><img class="landmarks-image" src ="../../../images/nepal/${nepalLandmarksObj.img}" alt="landmark"/></div>
        <h3 class ="landmarks-name">${nepalLandmarksObj.name}</h3>
        <p class ="landmarks-desc">${nepalLandmarksObj.desc}</p>
        <p class = "landmarks-closest-city"> The closest city to ${nepalLandmarksObj.name} is ${nepalLandmarksObj.closestCity}.</p>
        </article>`
    );
};