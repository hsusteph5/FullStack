export const createReview = (review) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/businesses/${review.business_id}/reviews`,
      data: { review: review }
    })
  );
}

export const updateReview = (review) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/reviews/${review.id}`,
      data: { review: review }
    })
  );
}

// review: {description: 'love this place!', rating: 5, business_id: 5}
// review will be passed with the business id so that the ajax request can find it
