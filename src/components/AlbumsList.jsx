import PropTypes from "prop-types"
import { useGetAlbumsQuery } from "../store"
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";


const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useGetAlbumsQuery(user);
    var content;

    if (isLoading) {
        content = <Skeleton times={3} />
    } else

        if (error) {
            content = <div>Error: {error}</div>
        } else {
            content = data.map((album) => {
                const header = <div>{album.name}</div>;
                return <ExpandablePanel key={album.id} header={header}>
                    List of photos in the album
                </ExpandablePanel>
            }
            );
        }

    return <div>
        <div>
            Album for {user.name}
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