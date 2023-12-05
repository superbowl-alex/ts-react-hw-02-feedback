import { FC } from 'react';
import { Info } from './Notification.styled';

interface NotificationProps {
  message: string;
}

const Notification: FC<NotificationProps> = ({ message }: NotificationProps) => {
  return <Info>{message} </Info>;
};

export default Notification;
