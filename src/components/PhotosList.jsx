import PropTypes from "prop-types"
import { useGetPhotosQuery, useAddPhotoMutation } from "../store"
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
    const { data: photos, error, isLoading: isFetchingPhotos } = useGetPhotosQuery(album);

    const [addPhoto, { isLoading: isAddingPhoto }] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    var content;

    if (isFetchingPhotos) {
        content = <Skeleton count={3} />;
    } else if (error) {
        content = <div>Error fetching photos.</div>;
    } else {
        content = photos.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />;
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">
                    Photos in {album.name}
                </h3>
                <Button className="mr-2" onClick={handleAddPhoto} loading={isAddingPhoto}>Add Photo</Button>

            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    )
}

PhotosList.propTypes = {
    album: PropTypes.any
}

export default PhotosList