
// Solution 1: Using `reduce` for Summing and Collecting Comments
function processReviews(reviews) {
    // Calculate the sum of ratings and collect comments using reduce
    const { sum, comments } = reviews.reduce((acc, review) => {
        acc.sum += review.rating;
        acc.comments.push(review.comment);
        return acc;
    }, { sum: 0, comments: [] });

    // Calculate the average rating
    const averageRating = sum / reviews.length;

    // Return the result as an object
    return {
        averageRating: averageRating,
        comments: comments
    };
}

// -------------------- Solution 2 --------------------

// Solution 2: Using `forEach` for Iterating
function processReviews(reviews) {
    let sum = 0;
    let comments = [];

    // Iterate over reviews using forEach
    reviews.forEach(review => {
        sum += review.rating;
        comments.push(review.comment);
    });

    // Calculate the average rating
    const averageRating = sum / reviews.length;

    // Return the result as an object
    return {
        averageRating: averageRating,
        comments: comments
    };
}

// -------------------- Solution 3 --------------------

// Solution 3: Using Modern JavaScript Syntax (ES6+)
const processReviews = (reviews) => {
    // Calculate the sum of ratings and collect comments using reduce
    const { sum, comments } = reviews.reduce((acc, review) => {
        acc.sum += review.rating;
        acc.comments.push(review.comment);
        return acc;
    }, { sum: 0, comments: [] });

    // Calculate the average rating
    const averageRating = sum / reviews.length;

    // Return the result as an object
    return {
        averageRating,
        comments
    };
}
