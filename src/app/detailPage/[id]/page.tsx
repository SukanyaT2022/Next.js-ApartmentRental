import BookingCardComp from "@/app/components/BookingCardComp";
import ImageGallery from "@/app/components/ImageGallery";
import { data } from "@/utils/data";

export default async function DetailPage({params}:any) {
  const { id } = await params;
  const productDetail = data.find((item) => item.id === parseInt(id));
  return (
    <div className="p-4 mt-20">
      
    <ImageGallery />
    <div className="">
<div>

</div>
<div>
  <BookingCardComp />
</div>
    </div>

      {/* <h1>Details Page</h1>
      <p>{productDetail?.id}</p>
      <img src={productDetail?.image} alt="Product Image" className="w-64 h-64 object-cover"/>
      <p>Price: ${productDetail?.price}</p>
      <p>Type: {productDetail?.type}</p>
      <p>Bedrooms: {productDetail?.bedrooms}</p>
      <p>Rating: {productDetail?.rating}</p>
      <p>Reviews: {productDetail?.reviews}</p> */}

      {/* Add more static content as needed */}
    </div>
  );
}