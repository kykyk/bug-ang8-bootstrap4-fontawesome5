import { NgModule } from '@angular/core';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
/* ----------------------------------------
 * Light
 * -------------------------------------- */
import { faArchive as falArchive } from '@fortawesome/pro-light-svg-icons/faArchive';
import { faFilePdf as falFilePdf } from '@fortawesome/pro-light-svg-icons/faFilePdf';
import { faAngleRight as falAngleRight } from '@fortawesome/pro-light-svg-icons/faAngleRight';
import { faArrowUp as falArrowUp } from '@fortawesome/pro-light-svg-icons/faArrowUp';
import { faCalendar as falCalendar } from '@fortawesome/pro-light-svg-icons/faCalendar';
import { faCheck as falCheck } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faClock as falClock } from '@fortawesome/pro-light-svg-icons/faClock';
import { faCog as falCog } from '@fortawesome/pro-light-svg-icons/faCog';
import { faFile as falFile } from '@fortawesome/pro-light-svg-icons/faFile';
import { faFileDownload as falFileDownload } from '@fortawesome/pro-light-svg-icons/faFileDownload';
import { faHourglassHalf as falHourglassHalf } from '@fortawesome/pro-light-svg-icons/faHourglassHalf';
import { faInfoCircle as falInfoCircle } from '@fortawesome/pro-light-svg-icons/faInfoCircle';
import { faLink as falLink } from '@fortawesome/pro-light-svg-icons/faLink';
import { faListUl as falListUl } from '@fortawesome/pro-light-svg-icons/faListUl';
import { faLock as falLock } from '@fortawesome/pro-light-svg-icons/faLock';
import { faLongArrowLeft as falLongArrowLeft } from '@fortawesome/pro-light-svg-icons/faLongArrowLeft';
import { faLongArrowRight as falLongArrowRight } from '@fortawesome/pro-light-svg-icons/faLongArrowRight';
import { faMinus as falMinus } from '@fortawesome/pro-light-svg-icons/faMinus';
import { faObjectUngroup as falObjectUngroup } from '@fortawesome/pro-light-svg-icons/faObjectUngroup';
import { faPaperPlane as falPaperPlane } from '@fortawesome/pro-light-svg-icons/faPaperPlane';
import { faPencil as falPencil } from '@fortawesome/pro-light-svg-icons/faPencil';
import { faPen as falPen } from '@fortawesome/pro-light-svg-icons/faPen';
import { faPersonDollyEmpty as falPersonDollyEmpty } from '@fortawesome/pro-light-svg-icons/faPersonDollyEmpty';
import { faPlus as falPlus } from '@fortawesome/pro-light-svg-icons/faPlus';
import { faQuestion as falQuestion } from '@fortawesome/pro-light-svg-icons/faQuestion';
import { faQuestionCircle as falQuestionCircle } from '@fortawesome/pro-light-svg-icons/faQuestionCircle';
import { faSearch as falSearch } from '@fortawesome/pro-light-svg-icons/faSearch';
import { faSortAmountDown as falSortAmountDown } from '@fortawesome/pro-light-svg-icons/faSortAmountDown';
import { faSortAmountUp as falSortAmountUp } from '@fortawesome/pro-light-svg-icons/faSortAmountUp';
import { faStar as falStar } from '@fortawesome/pro-light-svg-icons/faStar';
import { faStepBackward as falStepBackward } from '@fortawesome/pro-light-svg-icons/faStepBackward';
import { faSyncAlt as falSyncAlt } from '@fortawesome/pro-light-svg-icons/faSyncAlt';
import { faThumbsUp as falThumbsUp } from '@fortawesome/pro-light-svg-icons/faThumbsUp';
import { faTimes as falTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { faTimesCircle as falTimesCircle } from '@fortawesome/pro-light-svg-icons/faTimesCircle';
import { faTrash as falTrash } from '@fortawesome/pro-light-svg-icons/faTrash';
import { faUndo as falUndo } from '@fortawesome/pro-light-svg-icons/faUndo';
import { faUnlink as falUnlink } from '@fortawesome/pro-light-svg-icons/faUnlink';
import { faUser as falUser } from '@fortawesome/pro-light-svg-icons/faUser';
import { faCompass as falCompass } from '@fortawesome/pro-light-svg-icons/faCompass';
import { faArrowToRight as falArrowToRight } from '@fortawesome/pro-light-svg-icons/faArrowToRight';
import { faArrowToLeft as falArrowToLeft } from '@fortawesome/pro-light-svg-icons/faArrowToLeft';
import { faSearchPlus as falSearchPlus } from '@fortawesome/pro-light-svg-icons/faSearchPlus';
import { faSearchMinus as falSearchMinus } from '@fortawesome/pro-light-svg-icons/faSearchMinus';
import { faPaperclip as falPaperclip } from '@fortawesome/pro-light-svg-icons/faPaperclip';
import { faArrowRight as falArrowRight } from '@fortawesome/pro-light-svg-icons/faArrowRight';
import { faComment as falComment } from '@fortawesome/pro-light-svg-icons/faComment';
import { faLongArrowAltLeft as falLongArrowAltLeft } from '@fortawesome/pro-light-svg-icons/faLongArrowAltLeft';
import { faLongArrowAltRight as falLongArrowAltRight } from '@fortawesome/pro-light-svg-icons/faLongArrowAltRight';
import { faPlusCircle as falPlusCircle } from '@fortawesome/pro-light-svg-icons/faPlusCircle';
import { faAngleUp as falAngleUp } from '@fortawesome/pro-light-svg-icons/faAngleUp';
import { faMapMarker as falMapMarker } from '@fortawesome/pro-light-svg-icons/faMapMarker';
import { faList as falList } from '@fortawesome/pro-light-svg-icons/faList';
import { faArrowLeft as falArrowLeft } from '@fortawesome/pro-light-svg-icons/faArrowLeft';
import { faEllipsisV as falEllipsisV } from '@fortawesome/pro-light-svg-icons/faEllipsisV';
import { faFilter as falFilter } from '@fortawesome/pro-light-svg-icons/faFilter';
import { faEdit as falEdit } from '@fortawesome/pro-light-svg-icons/faEdit';
import { faMapMarkerAlt as falMapMarkerAlt } from '@fortawesome/pro-light-svg-icons/faMapMarkerAlt';
import { faMapMarkerPlus as falMapMarkerPlus } from '@fortawesome/pro-light-svg-icons/faMapMarkerPlus';
import { faMapMarkerTimes as falMapMarkerTimes } from '@fortawesome/pro-light-svg-icons/faMapMarkerTimes';
import { faReply as falReply } from '@fortawesome/pro-light-svg-icons/faReply';
import { faSquare as falSquare } from '@fortawesome/pro-light-svg-icons/faSquare';
import { faEllipsisH as falEllipsisH } from '@fortawesome/pro-light-svg-icons/faEllipsisH';
import { faChevronRight as falChevronRight } from '@fortawesome/pro-light-svg-icons/faChevronRight';
import { faChevronUp as falChevronUp } from '@fortawesome/pro-light-svg-icons/faChevronUp';
import { faChevronDown as falChevronDown } from '@fortawesome/pro-light-svg-icons/faChevronDown';
import { faUsersClass as falUsersClass } from '@fortawesome/pro-light-svg-icons/faUsersClass';
import { faUsersCog as falUsersCog } from '@fortawesome/pro-light-svg-icons/faUsersCog';
import { faSignOutAlt as falSignOutAlt } from '@fortawesome/pro-light-svg-icons/faSignOutAlt';
import { faInfo as falInfo } from '@fortawesome/pro-light-svg-icons/faInfo';
import { faExclamation as falExclamation } from '@fortawesome/pro-light-svg-icons/faExclamation';
import { faExclamationCircle as falExclamationCircle } from '@fortawesome/pro-light-svg-icons/faExclamationCircle';
import { faFileImage as falFileImage } from '@fortawesome/pro-light-svg-icons/faFileImage';
import { faTrashAlt as falTrashAlt } from '@fortawesome/pro-light-svg-icons/faTrashAlt';
import { faArrowAltToBottom as falArrowAltToBottom } from '@fortawesome/pro-light-svg-icons/faArrowAltToBottom';
import { faSpinnerThird as falSpinnerThird } from '@fortawesome/pro-light-svg-icons/faSpinnerThird';
import { faFileAlt as falFileAlt } from '@fortawesome/pro-light-svg-icons/faFileAlt';
import { faListOl as falListOl } from '@fortawesome/pro-light-svg-icons/faListOl';
import { faBold as falBold } from '@fortawesome/pro-light-svg-icons/faBold';
import { faItalic as falItalic } from '@fortawesome/pro-light-svg-icons/faItalic';
import { faEnvelope as falEnvelope } from '@fortawesome/pro-light-svg-icons/faEnvelope';
import { faCloudDownload as falCloudDownload } from '@fortawesome/pro-light-svg-icons/faCloudDownload';
import { faHourglass as falHourglass } from '@fortawesome/pro-light-svg-icons/faHourglass';
import { faDrawSquare as falDrawSquare } from '@fortawesome/pro-light-svg-icons/faDrawSquare';
import { faAngleDown as falAngleDown } from '@fortawesome/pro-light-svg-icons/faAngleDown';
import { faChevronLeft as falChevronLeft } from '@fortawesome/pro-light-svg-icons/faChevronLeft';
import { faBell as falBell } from '@fortawesome/pro-light-svg-icons/faBell';
import { faImage as falImage } from '@fortawesome/pro-light-svg-icons/faImage';
import { faCheckCircle as falCheckCircle } from '@fortawesome/pro-light-svg-icons/faCheckCircle';
import { faCommentLines as falCommentLines } from '@fortawesome/pro-light-svg-icons/faCommentLines';
import { faComments as falComments } from '@fortawesome/pro-light-svg-icons/faComments';
import { faRedoAlt as falRedoAlt } from '@fortawesome/pro-light-svg-icons/faRedoAlt';
import { faClipboardCheck as falClipboardCheck } from '@fortawesome/pro-light-svg-icons/faClipboardCheck';
import { faBan as falBan } from '@fortawesome/pro-light-svg-icons/faBan';
import { faCopy as falCopy } from '@fortawesome/pro-light-svg-icons/faCopy';
import { faMinusCircle as falMinusCircle } from '@fortawesome/pro-light-svg-icons/faMinusCircle';
import { faListAlt as falListAlt } from '@fortawesome/pro-light-svg-icons/faListAlt';
import { faBarcodeAlt as falBarcodeAlt } from '@fortawesome/pro-light-svg-icons/faBarcodeAlt';
import { faSync as falSync } from '@fortawesome/pro-light-svg-icons/faSync';
/* ----------------------------------------
 * Regular
 * -------------------------------------- */
import { faBriefcase as farBriefcase } from '@fortawesome/pro-regular-svg-icons/faBriefcase';
import { faChevronDown as farChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import { faChevronUp as farChevronUp } from '@fortawesome/pro-regular-svg-icons/faChevronUp';
import { faCheck as farCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faLock as farLock } from '@fortawesome/pro-regular-svg-icons/faLock';
import { faUndo as farUndo } from '@fortawesome/pro-regular-svg-icons/faUndo';
import { faHourglass as farHourglass } from '@fortawesome/pro-regular-svg-icons/faHourglass';
import { faAngleDown as farAngleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDown';
import { faMapMarkerPlus as farMapMarkerPlus } from '@fortawesome/pro-regular-svg-icons/faMapMarkerPlus';
import { faMapMarkerTimes as farMapMarkerTimes } from '@fortawesome/pro-regular-svg-icons/faMapMarkerTimes';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
/* ----------------------------------------
 * Solid
 * -------------------------------------- */
import { faChevronLeft as fasChevronLeft } from '@fortawesome/pro-solid-svg-icons/faChevronLeft';
import { faChevronRight as fasChevronRight } from '@fortawesome/pro-solid-svg-icons/faChevronRight';
import { faCheck as fasCheck } from '@fortawesome/pro-solid-svg-icons/faCheck';
import { faMapMarker as fasMapMarker } from '@fortawesome/pro-solid-svg-icons/faMapMarker';
import { faCaretDown as fasCaretDown } from '@fortawesome/pro-solid-svg-icons/faCaretDown';
import { faCaretUp as fasCaretUp } from '@fortawesome/pro-solid-svg-icons/faCaretUp';
import { faEdit as fasEdit } from '@fortawesome/pro-solid-svg-icons/faEdit';
import { faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons/faMapMarkerAlt';
import { faReply as fasReply } from '@fortawesome/pro-solid-svg-icons/faReply';
import { faCheckSquare as fasCheckSquare } from '@fortawesome/pro-solid-svg-icons/faCheckSquare';
import { faClipboardCheck as fasClipboardCheck } from '@fortawesome/pro-solid-svg-icons/faClipboardCheck';
import { faExclamationTriangle as fasExclamationTriangle } from '@fortawesome/pro-solid-svg-icons/faExclamationTriangle';
import { faFile as fasFile } from '@fortawesome/pro-solid-svg-icons/faFile';
import { faTimesOctagon as fasTimesOctagon } from '@fortawesome/pro-solid-svg-icons/faTimesOctagon';
import { faCheckCircle as fasCheckCircle } from '@fortawesome/pro-solid-svg-icons/faCheckCircle';
import { faCommentAlt as fasCommentAlt } from '@fortawesome/pro-solid-svg-icons/faCommentAlt';
import { faCircle as fasCircle } from '@fortawesome/pro-solid-svg-icons/faCircle';
import { faMinusSquare as fasMinusSquare } from '@fortawesome/pro-solid-svg-icons/faMinusSquare';
import { faCompass as fasCompass } from '@fortawesome/pro-solid-svg-icons/faCompass';
import { faCamera as fasCamera } from '@fortawesome/pro-solid-svg-icons/faCamera';


@NgModule({})
export class FontawesomeModule {

  constructor() {
    /* ----------------------------------------
     * Add Light
     * -------------------------------------- */
    library.add(
      falAngleDown,
      falArchive,
      falFilePdf,
      falAngleRight,
      falArrowUp,
      falCalendar,
      falCheck,
      falClock,
      falCog,
      falFile,
      falFileDownload,
      falHourglassHalf,
      falInfoCircle,
      falLink,
      falListUl,
      falLock,
      falLongArrowLeft,
      falLongArrowRight,
      falMinus,
      falObjectUngroup,
      falPaperPlane,
      falPencil,
      falPen,
      falPersonDollyEmpty,
      falPlus,
      falQuestion,
      falQuestionCircle,
      falSearch,
      falSortAmountDown,
      falSortAmountUp,
      falStar,
      falStepBackward,
      falSyncAlt,
      falThumbsUp,
      falTimes,
      falTimesCircle,
      falTrash,
      falUndo,
      falUnlink,
      falUser,
      falCompass,
      falArrowToRight,
      falArrowToLeft,
      falSearchPlus,
      falSearchMinus,
      falPaperclip,
      falArrowRight,
      falComment,
      falLongArrowAltLeft,
      falLongArrowAltRight,
      falPlusCircle,
      falAngleUp,
      falMapMarker,
      falList,
      falArrowLeft,
      falEllipsisV,
      falFilter,
      falEdit,
      falMapMarkerAlt,
      falMapMarkerTimes,
      falMapMarkerPlus,
      falReply,
      falSquare,
      falEllipsisH,
      falChevronRight,
      falChevronUp,
      falChevronDown,
      falUsersClass,
      falUsersCog,
      falSignOutAlt,
      falInfo,
      falExclamation,
      falExclamationCircle,
      falFileImage,
      falTrashAlt,
      falArrowAltToBottom,
      falSpinnerThird,
      falFileAlt,
      falListOl,
      falItalic,
      falBold,
      falEnvelope,
      falCloudDownload,
      falHourglass,
      falDrawSquare,
      falChevronLeft,
      falBell,
      falCheckCircle,
      falCommentLines,
      falComments,
      falImage,
      falRedoAlt,
      falBan,
      falCopy,
      falPlusCircle,
      falMinusCircle,
      falClipboardCheck,
      falListAlt,
      falBarcodeAlt,
      falSync,
    );
    /* ----------------------------------------
     * Add Regular
     * -------------------------------------- */
    library.add(
      farBriefcase,
      farChevronDown,
      farChevronUp,
      farCheck,
      farLock,
      farUndo,
      farHourglass,
      farAngleDown,
      farMapMarkerTimes,
      farMapMarkerPlus,
      farPlus,
    );
    /* ----------------------------------------
     * Add Solid
     * -------------------------------------- */
    library.add(
      fasChevronLeft,
      fasChevronRight,
      fasCheck,
      fasMapMarker,
      fasCaretDown,
      fasCaretUp,
      fasEdit,
      fasMapMarkerAlt,
      fasReply,
      fasCheckSquare,
      fasClipboardCheck,
      fasExclamationTriangle,
      fasFile,
      fasTimesOctagon,
      fasCheckCircle,
      fasCommentAlt,
      fasCircle,
      fasMinusSquare,
      fasCompass,
      fasCamera,
    );
    /* ----------------------------------------
     * Watch for svg
     * -------------------------------------- */
    dom.watch();
  }


}
