export default function FeatureUI({params}) {
    console.log('Features', params)
    return (
        <h1>
            {params.featureReview.length === 1 ? `Feature - ${params.featureReview[0]}` : 
            params.featureReview.length === 2 ? `Feature - ${params.featureReview[0]} , Review -  ${params.featureReview[1]}`: null}
            </h1>
    )
}