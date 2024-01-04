import PropTypes from "prop-types"


const AlbumsList = ({ user }) => {
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