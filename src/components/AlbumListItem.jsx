import PropTypes from "prop-types"
import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from './ExpandablePanel'
import { GoTrash } from "react-icons/go";
import Button from "./Button";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
    const [removeAlbum, { isLoading: isRemovingAlbum }] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }
    const header =
        <>
            <Button className="mr-2" onClick={handleRemoveAlbum} loading={isRemovingAlbum}><GoTrash /> </Button>
            {album.name}
        </>;
    return (
        <div>
            <ExpandablePanel key={album.id} header={header}>
                <PhotosList album={album} />
            </ExpandablePanel>
        </div>
    )
}

AlbumListItem.propTypes = {
    album: PropTypes.shape({
        id: PropTypes.any,
        name: PropTypes.any
    })
}

export default AlbumListItem