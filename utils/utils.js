import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';

const showNotification = (type, message, title=false, timeout=2000) =>{
    switch (type) {
        case 'info':
            NotificationManager.info(message, title || 'Information', timeout);
          break;
        case 'success':
            NotificationManager.success(message, title || 'Success', timeout);
          break;
        case 'warning':
            NotificationManager.warning(message, title || 'Warning', timeout);
          break;
        case 'error':
            NotificationManager.error(message, title || 'Error', timeout);
          break;
      }
}

export {
    showNotification
}