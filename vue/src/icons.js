// font awesome integration
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faEye, faEyeSlash, faBookmark, faAngleDown, faCircle, faFilePdf,
  faFileWord, faFilePowerpoint, faFileAlt, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons'

library.add(
  // solid icons
  faSearch,
  faEye,
  faEyeSlash,
  faBookmark,
  faAngleDown,
  faCircle,
  faFilePdf,
  faFileWord,
  faFilePowerpoint,
  faFileAlt,
  faPlay,
  // regular icons ['far', 'icon-name']
  faBookmarkRegular
)
