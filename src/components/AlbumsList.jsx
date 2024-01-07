import PropTypes from "prop-types"
import { useGetAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";


const AlbumsList = ({ user }) => {
    const { data, error, isFetching } = useGetAlbumsQuery(user);

    const [addAlbum, { isLoading: isAddingAlbum }] = useAddAlbumMutation(user);

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    var content;

    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else
        if (error) {
            content = <div>Error: {error}</div>
        } else {
            content = data.map((album) => {
                return <AlbumListItem key={album.id} album={album} />
            }
            );
        }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Album for {user.name}</h3>
            <Button onClick={handleAddAlbum} loading={isAddingAlbum}
            >
                Add Album
            </Button>
        </div>
        <div>{content}</div>
    </div>;

}

AlbumsList.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.any
    })
}

export default AlbumsList