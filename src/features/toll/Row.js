import React from 'react'

const Row = ({ toll, onEdit, onDelete }) => {
    const onCopy = (text) => {
        // Create a temporary element to hold the text to copy
        const tempElement = document.createElement('textarea');
        tempElement.value = text;
        tempElement.setAttribute('readonly', '');
        tempElement.style.position = 'absolute';
        tempElement.style.left = '-9999px';
        document.body.appendChild(tempElement);

        // Select the text and copy it to the clipboard
        const selectedText = document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
        tempElement.select();
        document.execCommand('copy');

        // Remove the temporary element
        document.body.removeChild(tempElement);

        // Restore the previous selection
        if (selectedText) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selectedText);
        }
    }

    return (
        <tr>
            <td onClick={() => onCopy(toll._id)}>...{toll._id.substr(toll._id.length - 5)}</td>
            <td>{toll.numberPlate}</td>
            <td>{toll.entryPoint}</td>
            <td>{toll.exitPoint}</td>
            <td>{toll.distance}</td>
            <td>{new Date(toll.day).toLocaleDateString('en-GB', {
                weekday: 'short',
                day: '2-digit',
                month: 'short'
            })}</td>
            <td>{toll.cost}</td>
            <td>
                <div className="table-actions d-flex align-items-center gap-3 fs-6">
                    <a
                        title="View Company Profile"
                        className="text-primary"
                        onClick={() => onEdit(toll)}
                        style={{ cursor: 'pointer' }}
                    >
                        <i className="bi bi-pencil"></i>
                    </a>
                    <a
                        title="Delete"
                        className="text-danger"
                        onClick={() => onDelete(toll)}
                        style={{ cursor: 'pointer' }}
                    >
                        <i className="bi bi-trash-fill"></i>
                    </a>
                </div>
            </td>
        </tr>
    )
}

export default Row