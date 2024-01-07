import PropTypes from "prop-types"
import { useGetAlbumsQuery } from "../store"

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useGetAlbumsQuery(user);

    console.log(data, error, isLoading);
    return (
        <div>
            Albums by {user.name}
        </div>
    )
}

AlbumsList.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.any
    })
}

export default AlbumsList