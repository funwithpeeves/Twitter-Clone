import { FaTrashAlt } from "react-icons/fa";
import { auth, db } from "../../firebase/index";
import { MdEdit } from 'react-icons/md'
import Modal from "../../Modal";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const DropDown = ({ tweet }) => {

  const [isOpen, setIsOpen] = useState(false);

  const isOwn = tweet.user.id === auth.currentUser.uid
  
  const handleDelete = () => {
    const tweetRef = doc(db, "tweets", tweet.id);

    deleteDoc(tweetRef).then(() => toast.info("Tweet akıştan kaldırıldı")).catch(() => toast.error("Bir sorun oluştu"))
  }
  
  return (
    isOwn && (
      <>
      <label className="popup">
        <input type="checkbox" />
        <div className="burger" tabIndex="0">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>
            Eylemler
          </legend>
          <ul>
            <li>
              <button onClick={() => setIsOpen(true)}>
                <MdEdit />
                <span>Düzenle</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleDelete}>
                <FaTrashAlt />
                <span>Sil</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>

      {isOpen && <Modal tweet={tweet} close={() => setIsOpen(false)} />}
      </>
    )
  )
}

export default DropDown