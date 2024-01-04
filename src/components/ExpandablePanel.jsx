import PropTypes from "prop-types"
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

const ExpandablePanel = ({ header, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }


    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div onClick={handleClick} className="cursor-pointer">
                    {isExpanded ? <GoChevronUp /> : <GoChevronDown />}
                </div>
            </div>
            {
                isExpanded && <div className="p-2 border-t">
                    {children}
                </div>
            }

        </div>
    )
}

ExpandablePanel.propTypes = {
    children: PropTypes.any,
    header: PropTypes.any
}

export default ExpandablePanel