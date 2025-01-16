import { Button } from "@/ui/button";
import { useState } from "react";
import Image from 'next/image';
import { ProfileSetupFormDataProps } from '@/types/globals';
import { useEffect } from "react";

interface PhotoSetupProps {
	formData: ProfileSetupFormDataProps;
  setFormData: (formData: ProfileSetupFormDataProps) => void;
	nextStep: () => void;
}

export default function PhotoSetup ({formData, setFormData, nextStep }: PhotoSetupProps) {
  const [photos, setPhotos] = useState(Array(6).fill(null));

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('uploading photo');
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newPhotos = [...photos];
      const indexToUpdate = newPhotos.findIndex(item => item === null);
      console.log('indexToUpdate', indexToUpdate)
      if (indexToUpdate !== -1) {
        newPhotos[indexToUpdate] = imageUrl;
      }
      console.log(newPhotos)
      setPhotos(newPhotos);
      setFormData({ ...formData, photos: newPhotos.filter(photo => photo !== null) });
    }
  };
  
  const handlePhotoRemoval = (index: number) => {
    console.log(index);
    const newPhotos = [...photos];
    newPhotos[index] = null;
    setPhotos(newPhotos)
    setFormData({ ...formData, photos: newPhotos });
  }

  useEffect(() => {
    if (formData.photos) {
      const photoArray = [ ...formData.photos, ...Array(6 - formData.photos.length).fill(null)]
      console.log(photoArray, 'here')
      setPhotos(photoArray);
    }
	}, []);

	return (
	  <div className="w-full px-12 sm:max-w-[640px] sm:mx-auto px">
      <label className="text-4xl block px-6 font-bold text-left sm:text-center">Add photos</label>
      <p className="text-xs font-light text-left sm:text-center px-6 py-5">
      Add at least 2 photos to continue.</p>
      <div className="flex w-full flex-wrap">
        {photos.map((photo, index) =>
          photo ?
              <div key={`addphoto-${index}`} className="w-20 h-28 rounded-md m-2 relative">
                <button type="button" className={`rounded-full w-6 h-6 bg-white absolute bottom-[-4px] right-[-4px] drop-shadow-md bg-white text-[#EA4080] text-center justify-center`} onClick={() => handlePhotoRemoval(index)}>x</button>
                <Image
                  src={photo}
                  alt="profile photo"
                  width={80}
                  height={112}
                  className="object-cover w-full h-full"
                  />
              </div>
            :
            <button key={`photo-${index}`} type="button" className={`w-20 h-28 bg-gray-300 rounded-md m-2 relative`} onClick={() => document.getElementById(`photo${index}`)?.click()}>
              <div className="rounded-full w-6 h-6 bg-white absolute bottom-[-4px] right-[-4px] drop-shadow-md bg-gradient-to-tr from-[#EA4080] to-[#EE805F] text-white text-center justify-center">
                <p>+</p>
              </div>
              <input type="file" name={`photo${index}`} id={`photo${index}`} className="hidden" onChange={handlePhotoUpload} />
            </button>
      )}
      </div>
      <div className="w-full mt-60">
        <Button bgColor="pink-gradient" type="button" shadow disabled={photos.filter(item => item !== null).length < 2} onClick={nextStep}>{`continue`}</Button>
      </div>
    </div>
	)
}