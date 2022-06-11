import { useState } from 'react';
import { Modal} from '@mantine/core';

function EditInfoModal({modalOpened, setModalOpened}) {

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className='editInfoForm'>
            <h3>Your Info</h3>
        </form>
      </Modal>
    </>
  );
}

export default EditInfoModal

