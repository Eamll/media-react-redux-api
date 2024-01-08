import PropTypes from "prop-types"
import { useRemovePhotoMutation } from "../store"
import { GoTrash } from "react-icons/go";

const PhotosListItem = ({ photo }) => {

    const [removePhoto] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    }


    return (
        <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
            <img className="h-20 w-20" src={photo.url} />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrash className="text-3xl" />
            </div>
        </div>
    )
}

PhotosListItem.propTypes = {
    photo: PropTypes.shape({

        url: PropTypes.any
    })
}

export default PhotosListItem