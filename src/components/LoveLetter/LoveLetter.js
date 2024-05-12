import {useState} from 'react'
import './LoveLetter.css'

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullSize, setIsFullSize] = useState(false)

  const handleOpenLetter = () => {
    setIsOpen(true)
    setTimeout(() => {
      setIsFullSize(true)
    }, 800)
  }

  const handleCloseLetter = () => {
    setIsFullSize(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 800)
  }

  return (
    <div
      className={`envelope ${isOpen ? 'open' : ''}`}
      onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}
    >
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        mah dear kundanapu bomma🖤,
        <br />
        never have i been so blessed as to fall in love with someone as
        wonderful as you...Thank you for being with me always and supporting
        me...
        <br />i loveeee youuuu mummaa :)
        <br />
        always yours,
        <br />
        @swapna
      </div>
    </div>
  )
}

export default LoveLetter
