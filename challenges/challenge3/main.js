// this is the unoptimized and undocumented code (start from here)
function processReviews(reviews) {
    let sum = 0;
    let comments = [];
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].rating;
        comments.push(reviews[i].comment);
    }
    let averageRating = sum / reviews.length;
    return {
        averageRating: averageRating,
        comments: comments
    };
}
