import { useState } from "react"
import Modal from './ContextMenu';
import { fileType } from "../utils/data/data";

interface FolderProps {
    NewFolder?: React.ComponentType<FolderProps>; 
    files: fileType,
    setSelectedParent?: Function
}

const Folder: React.FC<FolderProps> = ({ files, NewFolder, setSelectedParent }) => {
    const [showParent, setShowParent] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [selected, setSelected] = useState<fileType | null>(null)
    const [parentSelected, setParentSelected] = useState<fileType | null>(null)

    const handleDoubleClick = (data:fileType) =>  {
        setSelected(data)
        setShowParent(false)
        if (setSelectedParent) {
          setSelectedParent(data)
        }
    }

    const handleClick = (data: fileType) => {
        if (selected && selected.name === data.name) {
            setSelected(null)
        } else {
            setSelected(data)
        }
    }

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement>, data: fileType) => {
        e.preventDefault()
        setShowModal(true)
        setSelected(data)
    }

    const handleAction = (action: string) => {
      console.log('File name: ' + selected?.name, 'Action type: ' + action)
    }

    return (
        <>
          {
            files.type === 'folder' && showParent && (
              <div onDoubleClick={() => handleDoubleClick(files)} onContextMenu={(e) => handleRightClick(e, files)} onClick={() => handleClick(files)} className={`file ${selected && selected.name === files.name ? 'active' : ''}` }>
                <img src='/images/folderIcon.svg' alt="" />
                <p>{ files.name }</p>
              </div>
            )
          }
          {
            !showParent && files.data && (
                files.data.map((item: fileType, index: number) => {
                    if (parentSelected && parentSelected.name !== item.name){
                      return null
                    }
                    if (item.type === 'folder' && item.data && item.data.length > 0) {
                        return (
                            <Folder key={item.name + index} files={item} NewFolder={NewFolder} setSelectedParent={(item: fileType) => setParentSelected(item)} />
                        )
                    }
                    return (
                      <div key={item.name + index} onContextMenu={(e) => handleRightClick(e, item)} onClick={() => handleClick(item)} className={`file ${selected && selected.name === item.name ? 'active' : ''}` }>
                        <img src={`/images/${item.meta}Icon.svg`} alt="" />
                        <p>{ item.name }</p>
                      </div>
                    )
                })
            )
          }
          {
            showModal && (
                <Modal setState={(val:boolean) => setShowModal(val)} file={selected} handleAction={(action:string) => handleAction(action)} />
            )
          }
        </>
    )
}

export default Folder