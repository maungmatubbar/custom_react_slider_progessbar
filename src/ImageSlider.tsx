import { useEffect, useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type ImageSliderProps = {
    imageUrls: string[]
}
const ImageSlider = ({imageUrls}:ImageSliderProps) => {
    const autoPlay = true;
    const [imageIndex,setImageIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const handlePrev = () => {
        
        setImageIndex(index=> {
            if(index ===0) return imageUrls.length - 1;
            return index - 1;
        })
    }
    const handleNext = () => {
        setImageIndex(index=> {
            if(index === imageUrls.length -1 ) return 0;
            return index + 1;
        })
    }
    // // const startProgressBar = () => {
    // //     const progressInterval = setInterval(() => {
    // //         setProgress(prevProgress => (prevProgress + 1) % 100);
    // //       }, 3000/1000); 
    // //       clearInterval(progressInterval);
    // // }
    //  clearInterval(progressInterval);
    // }
    useEffect(()=>{
        const id = setInterval(() => {
            setImageIndex((imageIndex + 1) % imageUrls.length);
          }, 3000);
       
          return () => clearInterval(id);
    },[imageIndex,imageUrls.length]);
    useEffect(()=>{
        
        const progressId = setInterval(()=>{
            setProgress(prevProgress => (prevProgress + 1) % 100);
        },imageUrls.length)
        
          return clearInterval(progressId);
    },[autoPlay,imageUrls.length])

   

  return (
    <>
        <div className="w-full h-full relative mbt-10">
            <div className="h-full w-full overflow-hidden  flex flex-shrink-0 flex-grow-0">
                {imageUrls.map(url=>(
                    <img key={url} src={url} className="image-slider-item" style={{translate: `${-100 * imageIndex}%`}} />
                ))}
            
            </div>
            <ul className="relative bottom-6 justify-center flex gap-3 ">
                {imageUrls.map((url,index)=>(
                    <li key={url} onClick={()=>setImageIndex(index)} className={`h-[10px] w-[10px]  ${imageIndex === index ?'bg-blue-500':'bg-black'} rounded-full`} ></li>
                ))}
                </ul>
            {/* <img src={imageUrls[imageIndex]} className="object-cover w-full h-full block" /> */}
            <button onClick={handlePrev} className="slider-btn left-0"><ArrowBigLeft/></button>
            <button onClick={handleNext} className="slider-btn  right-0"><ArrowBigRight/></button>
           
       

        </div>
        <ul className="relative -bottom-10 justify-center flex gap-3 ">
            {imageUrls.map((url,index)=>(
                <li key={url} onClick={()=>setImageIndex(index)}
                 className={`tab-item`} ><button className={`tab-item-btn ${imageIndex === index ?'item-active':''}`}></button></li>
            ))}
        </ul>
    </>
  )
}

export default ImageSlider