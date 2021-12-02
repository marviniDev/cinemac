import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

function Roons() {
    const [visible, setVisible] = useState(true)

    return (
        <>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                Content
            </Sidebar>

            <Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} />
        </>
    );
}

export default Roons;
