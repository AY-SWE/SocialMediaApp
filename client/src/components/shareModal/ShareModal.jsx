import { Modal} from '@mantine/core';
import PostShare from '../postShare/PostShare';
import "./ShareModal.scss"

function ShareModal({modalOpened, setModalOpened}) {

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="55%"
      >
        <PostShare/>
      </Modal>
    </>
  );
}

export default ShareModal

