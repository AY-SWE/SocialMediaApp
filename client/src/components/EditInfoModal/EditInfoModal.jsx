import { Modal} from '@mantine/core';
import "./EditInfoModal.scss"

function EditInfoModal({modalOpened, setModalOpened}) {

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="55%"
      >
        <form className='editInfoForm'>
            <h3>Edit Your Info</h3>

            <div>
              <input type="text" className='editInfoInput' name='firstname' placeholder='First Name'/>
              <input type="text" className='editInfoInput' name='lastname' placeholder='Last Name'/>
            </div>
            <div>
              <input type="text" className='editInfoInput' name='worksAt' placeholder='Works At'/>
            </div>
            <div>
              <input type="text" className='editInfoInput' name='livesIn' placeholder='Lives In'/>
              <input type="text" className='editInfoInput' name='country' placeholder='Country'/>
            </div>
            <div>
              <input type="text" className='editInfoInput' name='relationshipStatus' placeholder='Relationship Status'/>
            </div>

            <div>
              Profile Image
              <input type="file" name="profileImage" />
              Cover Image
              <input type="file" name="coverImage" />
            </div>

            <button className="editInfoSaveButton">
              Update
            </button>
        </form>
      </Modal>
    </>
  );
}

export default EditInfoModal

