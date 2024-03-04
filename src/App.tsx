import ImageSlider from './ImageSlider';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
const IMAGES = [img1,img2,img3,img4,img5]
function App() {

  return (
    <>
      <div className='max-w-[1200px] w-full h-[500px] mx-auto aspect-[10/3]'>
        <ImageSlider imageUrls={IMAGES} />
      </div>
    </>
  )
}

export default App
