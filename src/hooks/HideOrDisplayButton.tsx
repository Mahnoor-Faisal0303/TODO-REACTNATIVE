import React from 'react';

const useHideOrDisplayButton = (initialShowUpdateButton: boolean, initialShowAddButton: boolean) => {
    
    const [showUpdateButton, setShowUpdateButton] = React.useState<boolean>(initialShowUpdateButton);
    const [showAddButton, setShowAddButton] = React.useState<boolean>(initialShowAddButton);

    return {
        showUpdateButton,
        setShowUpdateButton,
        showAddButton,
        setShowAddButton
    };
}

export default useHideOrDisplayButton;
