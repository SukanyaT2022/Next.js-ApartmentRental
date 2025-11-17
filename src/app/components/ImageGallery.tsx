import React from 'react'

const ImageGallery = () => {
  return (
<div className="grid grid-cols-2 grid-rows-2 gap-2 max-w-4xl mx-auto p-4">
      {/* Large image - spans 2 rows */}
      <div className="row-span-2">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
          alt="Hotel exterior" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Top right image */}
      <div className="grid grid-cols-2 gap-2">
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" 
          alt="Hotel room" 
          className="w-full object-cover rounded-lg"
        />
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" 
            alt="Hotel interior" 
            className="w-full object-cover rounded-lg"
          />
          
        </div>
      </div>
      
      {/* Bottom right - 2 images side by side */}
      <div className="grid grid-cols-2 gap-2">
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" 
          alt="Hotel room" 
          className="w-full object-cover rounded-lg"
        />
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" 
            alt="Hotel interior" 
            className="w-full object-cover rounded-lg"
          />
          
        </div>
      </div>
    </div>
  )
}

export default ImageGallery