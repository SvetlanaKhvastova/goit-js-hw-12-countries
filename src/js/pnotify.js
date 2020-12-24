// import 'material-design-icons/iconfont/material-icons.css';
// import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/Angeler.css';
import '@pnotify/core/dist/PNotify.css';
import { error, defaults } from '@pnotify/core';
defaults.closerHover = false;

// defaults.styling = 'material';
// defaults.icons = 'material';

function errorsNotification(text) {
  error({
    text: text,
    type: 'error',
    dir: 'left',
    delay: 1500,
    icon: true,
    addClass: 'angeler-extended',
    width: '360px',
    closer: true,
  });
}

export default errorsNotification;
